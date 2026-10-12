import { spawn, execFileSync, type ChildProcess } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, stat } from 'node:fs/promises';
import { isAbsolute, join } from 'node:path';
import { once } from 'node:events';
import { expect, type Page } from '@playwright/test';
import getPort from 'get-port';
import { SITE } from '../../logic/site';

export function htmlRoutes(): readonly string[] {
  return ['/en/', '/es/', '/pt/'];
}

export async function assertSite(baseURL: string): Promise<void> {
  const response = await fetch(`${baseURL}/en/`);
  expect(response.status).toBe(200);
  expect(await response.text()).toContain('Cecilia');
}

export async function captureRoute(
  page: Page,
  testId: string,
  route: string
): Promise<void> {
  const root = process.env.ASTRO_SCREENSHOT_DIR;
  if (!root || !isAbsolute(root))
    throw new Error('ASTRO_SCREENSHOT_DIR must be an absolute path');
  await page.locator('img').evaluateAll((images) =>
    images.forEach((image) => {
      (image as HTMLImageElement).loading = 'eager';
    })
  );
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map((image) => image.decode())
    );
  });
  const slug = route === '/' ? 'root' : route.slice(1).replaceAll('/', '-');
  const directory = join(root, 'astro-static');
  const destination = join(directory, `${testId}-${slug}.png`);
  await mkdir(directory, { recursive: true });
  await page.screenshot({ path: destination, fullPage: true });
  expect((await stat(destination)).size).toBeGreaterThan(0);
}

// Local agent runs use the governed picker. Standalone CI has no agent tooling
// and uses an ephemeral OS port on its isolated runner.
async function runtimePort(): Promise<number> {
  if (existsSync('../../.agent_root')) {
    return Number(
      execFileSync(
        'uv',
        [
          'run',
          '../../agent_commons/agent_tools/scripts/port_utility.py',
          'grab',
        ],
        { encoding: 'utf8' }
      ).trim()
    );
  }
  return getPort();
}

export async function withRuntime<T>(
  action: (runtime: { baseURL: string }) => Promise<T>
): Promise<T> {
  const port = await runtimePort();
  let output = '';
  const child = spawn('npm', ['run', 'start'], {
    detached: true,
    env: { ...process.env, PORT: String(port), ASTRO_PREVIEW_BACKGROUND: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  child.stdout?.on('data', (chunk: Buffer) => {
    output += chunk.toString();
  });
  child.stderr?.on('data', (chunk: Buffer) => {
    output += chunk.toString();
  });
  const baseURL = `http://127.0.0.1:${port}${SITE.base.slice(0, -1)}`;
  try {
    await waitUntilReady(baseURL, child, () => output);
    return await action({ baseURL });
  } finally {
    await stopRuntime(child);
  }
}

async function waitUntilReady(
  baseURL: string,
  child: ChildProcess,
  output: () => string
): Promise<void> {
  for (let attempt = 0; attempt < 100; attempt++) {
    if (child.exitCode !== null) throw new Error(`Runtime exited: ${output()}`);
    try {
      await assertSite(baseURL);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  throw new Error(`Runtime readiness timed out: ${output()}`);
}

async function stopRuntime(child: ChildProcess): Promise<void> {
  if (child.exitCode !== null || child.pid === undefined) return;
  process.kill(-child.pid, 'SIGTERM');
  const stopped = await Promise.race([
    once(child, 'exit').then(() => true),
    new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 1000)),
  ]);
  if (!stopped) {
    process.kill(-child.pid, 'SIGKILL');
    await once(child, 'exit');
  }
}
