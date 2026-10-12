import { test as base } from 'playwright-bdd';
import { withRuntime } from './runtime-server';

export const test = base.extend<{ siteURL: string }>({
  siteURL: async ({ browserName }, use) => {
    void browserName;
    await withRuntime(async ({ baseURL }) => use(baseURL));
  },
});
