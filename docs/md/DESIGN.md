---
name: Cecilia
description: The Cecilia app identity extended into its public product website.
colors:
  cream: '#fbf7f2'
  plum: '#8c4f6b'
  plum-hover: '#733c56'
  ink: '#2e2427'
  muted: '#75666b'
  line: '#e8ddd2'
  white: 'white'
  screen-rose: '#f1e6eb'
  screen-sand: '#f0e9df'
  screen-sage: '#e6efed'
  methods-copy: '#fff3f8'
  methods-line: '#c59aae'
  cycle-red: '#d84343'
  cycle-orange: '#f2a33a'
  cycle-purple: '#7e57c2'
  cycle-green: '#3ba55c'
  cycle-teal: '#2c8c8c'
typography:
  display:
    {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: 'clamp(3.3rem, 5.5vw, 5.2rem)',
      fontWeight: 700,
      lineHeight: 1.09,
      letterSpacing: '-0.035em',
    }
  headline:
    {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: 'clamp(2.2rem, 3.5vw, 3.3rem)',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
    }
  title:
    {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    }
  body:
    {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: '17px',
      fontWeight: 400,
      lineHeight: 1.7,
    }
  button:
    {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: 1.4,
    }
  navigation:
    { fontFamily: 'Nunito Sans, sans-serif', fontSize: '15px', fontWeight: 400 }
  question:
    {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: '17px',
      fontWeight: 700,
      lineHeight: 1.5,
    }
  caption:
    {
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: 1.5,
    }
rounded:
  figure: '16px'
  screen: '32px'
  screen-compact: '27px'
  pill: '999px'
spacing:
  compact: '16px'
  group: '24px'
  column-compact: '48px'
  column-wide: '90px'
  section-compact: '64px'
  section-wide: '100px'
components:
  button-primary:
    {
      backgroundColor: '{colors.plum}',
      textColor: '{colors.white}',
      typography: '{typography.button}',
      rounded: '{rounded.pill}',
      padding: '15px 26px',
    }
  button-primary-hover: { backgroundColor: '{colors.plum-hover}' }
  section-navigation:
    {
      textColor: '{colors.ink}',
      typography: '{typography.navigation}',
      padding: '12px 0',
    }
  figure-today:
    {
      backgroundColor: '{colors.screen-rose}',
      rounded: '{rounded.figure}',
      padding: '38px 30px 20px',
    }
  figure-calendar:
    {
      backgroundColor: '{colors.screen-sand}',
      rounded: '{rounded.figure}',
      padding: '38px 30px 20px',
    }
  figure-chart:
    {
      backgroundColor: '{colors.screen-sage}',
      rounded: '{rounded.figure}',
      padding: '38px 30px 20px',
    }
  faq-summary:
    {
      textColor: '{colors.ink}',
      typography: '{typography.question}',
      padding: '24px 0',
    }
---

# Design System: Cecilia

## Overview

**Creative North Star: "Cecilia's cream and plum app identity"**

Cecilia pairs a warm cream canvas with plum actions, dark brown text, and the app's five-color cycle glyph. Rounded Nunito Sans typography and generous space give the website the same approachable character as the application. Real localized app screens supply the visual detail.

This record describes the implemented website, rather than a proposed redesign. It was extracted from `state/adapters/inbound/styles/global.css`, `state/adapters/inbound/components/`, and the six current English, Spanish, and Portuguese captures at desktop and mobile widths. The user-pinned direction in `docs/md/SURFACE.md` was the visual authority; no approved comp or quality-board comparison was available.

Women are the central marketing audience. A bold app-for-women sentence directly below the hero headline establishes the product definition. The introduction, audience question and footer reinforce it while retaining equal conception and family-planning goals and real interface proof.

**Key Characteristics:**

- Warm cream backgrounds, plum emphasis, and dark brown reading text.
- One rounded sans-serif family with a clear, balanced heading hierarchy.
- Open sections, restrained dividers, and spacious screenshot figures.
- Real app screens and the original five-color cycle identity.
- The same visual system across all three languages.

## Colors

The palette extends the app's warm, low-contrast surfaces while retaining strong text and action emphasis.

- **Primary:** Plum carries actions, selected language links, heading emphasis, and the full-width methods section. Plum hover deepens the action state. White and methods copy provide the corresponding light foregrounds.
- **Secondary:** Rose, sand, and sage distinguish Today, Calendar, and Chart screenshot figures. These are supporting surfaces, not additional action colors.
- **Tertiary:** Cycle red, orange, purple, green, and teal retain that order in the five-part divider. The original app icon supplies the cycle glyph in the wordmark.
- **Neutral:** Cream is the page canvas. Ink is the primary text; muted is explanatory text and small labels. Line separates content on cream; methods line separates content on plum.

**The App Identity Rule.** Preserve the app's cream, plum, and five-color cycle identity when extending this website.

The unused `--rose` declaration in the stylesheet is not a documented token. The implemented figure rose is the `screen-rose` token above.

## Typography

**Display and body font:** Locally bundled Nunito Sans, with sans-serif fallback. The page imports weights (400, 600, 700, and 800); regular body text uses (400), headings and actions use (700), and selected language links and step numbers use (800).

The frontmatter records the main desktop roles. Supporting copy varies by purpose: hero copy (19px), section introductions (18px), feature and methods copy (17px), answers (16px), notes (12–14px), and example captions (11px). Paragraphs have relaxed leading (1.7); headings balance their line breaks.

Hero copy is limited to (39ch), feature copy to (47ch), and section introductions to (48ch). Small disclaimer text is allowed a longer measure (100ch). The wordmark uses slightly open tracking (0.01em); the major headings tighten tracking progressively as recorded above.

**The Quiet Hierarchy Rule.** Use size, weight, spacing, and a plum phrase to establish emphasis within the single type family.

## Layout

The centered content area caps at (1180px), with total horizontal clearance of (96px) on wide screens. Primary content uses two columns: nearly equal columns for text and app imagery, equal columns for feature explanations, and a narrower heading column beside the questions. Shared wide column gaps are (90px); the hero uses (30px).

The wide feature sequence alternates the Calendar explanation to the right. Screenshot figures sit within the open content flow. The methods section spans the viewport, while its content aligns to the same centered area. Main sections use roughly (86–110px) vertical padding; the feature sequence separates rows by (90px).

At the first breakpoint (1100px), horizontal clearance becomes (64px), major column gaps become (48px), and language navigation takes a second header row. The hero screenshots shrink to (225px) and (195px).

At the compact breakpoint (760px), horizontal clearance becomes (40px). Section navigation occupies a full row below the wordmark and language links. The hero, introductions, feature rows, methods, steps, and questions stack. Each feature explanation precedes its screenshot; the desktop Calendar reversal is removed. Major sections commonly use (60–64px) vertical padding, with feature rows separated by (58px).

Compact display type becomes `clamp(2.9rem, 10vw, 4.4rem)`, feature titles become (29px), and most explanatory copy becomes (16px). The hero screenshot group remains a layered pair within a centered area capped at (350px); its images become (205px) and (180px). Localized text is allowed to wrap and grow the page naturally.

**The Open Sections Rule.** Separate explanations with space, tonal sections, and thin dividers; use contained surfaces to present the app screenshots.

The two-goal section uses equal columns (70px gap) and equal heading, body, and screenshot treatments. The avoidance explanation includes limitations directly beside it. Columns stack below 700px; illustrative-data captions remain visible. Goal screens cap at 240px wide and retain their native aspect ratio. The headline preserves the existing display type with the second phrase in plum.

## Elevation & Depth

The page is flat except for app screens. A diffuse screen shadow (`0 20px 55px #44233316`) separates the real interface from cream or tinted figures. The hero pair uses opposing rotations (−6deg and 6deg) and overlap; the feature screenshots remain upright. Text sections, actions, and question rows do not carry shadows.

**The Screen Depth Rule.** Keep elevation attached to the app imagery; use spacing and color for the surrounding page structure.

Motion is limited to smooth anchor scrolling, action background and arrow-gap transitions, and rotation of the question icon. Transitions use (0.2s ease). Reduced-motion preference disables transitions and uses immediate scrolling.

## Shapes

Primary actions are fully rounded pills. Screenshot figures have softly rounded corners; app screens use a larger radius, reduced on compact layouts. Thin dividers use a single-pixel stroke. The five-color divider comprises equal-length segments with a small rounded end treatment (6px).

The original cycle-ring icon remains an image asset. Action arrows and question plus signs are inline vector paths, with consistent small dimensions (20px).

## Components

- **Primary action:** Plum pill with white text, an inline arrow, and generous horizontal padding. Minimum height is (56px), becoming (54px) on compact layouts. Hover deepens the background and expands the text-to-arrow gap from (24px) to (30px). The same component appears in the hero and beta section.
- **Navigation:** The open-test participation link is plum and bold to distinguish the available action from informational sections. Ordinary text links retain visible hover and keyboard states. Section links use plum and an underline on hover. The selected language uses plum, heavier weight, and an underline. Locale choices remain visible at compact widths.
- **Screenshot figures:** Today uses rose, Calendar uses sand, and Chart uses sage. Each figure contains an upright real screenshot, a centered example-data caption, and a soft screen shadow. Screen width caps at (264px), becoming (228px) on compact layouts. Figure top padding becomes (28px) at that breakpoint.
- **Testing options:** Two open columns with top dividers separate web access from Android Firebase enrollment. Each available option uses the existing primary action component, with installation guidance beside the Android invitation. The profile setup sentence and iOS coming-soon notice follow. Below 760px, options stack with a 32px gap. Only verified destinations are shown.
- **Frequently asked questions (FAQ):** Native expandable rows use thin bottom dividers, a bold summary, and a plum plus sign that rotates (45deg) when open. Answers have top clearance (12px) and bottom padding (24px).
- **Wordmark:** The original cycle icon sits beside the plum Cecilia name. Header text is (28px), becoming (25px) on compact layouts; the footer uses (23px).

**The Native Screens Rule.** Use the real localized app screenshots, keep their aspect ratio, and keep the illustrative-data caption visible.

**The Room for Focus Rule.** Interactive elements use a plum outline (3px) offset from the element (6px). Preserve the answer clearance below an expanded question's summary so the outline does not cross the answer text. The skip link becomes visible on focus.

There are no website input fields, forms, chips, or generic card primitives to document.

## Do's and Don'ts

### Do:

- **Do** retain cream as the page canvas and plum as the shared action and emphasis color.
- **Do** use the original cycle glyph and preserve the divider's five-color order.
- **Do** keep real screenshots localized and visibly labeled as illustrative examples.
- **Do** let translated content wrap naturally while retaining the shared hierarchy and reading order.
- **Do** preserve visible keyboard focus, answer clearance, and reduced-motion behavior.

### Don't:

- **Don't** redraw the application interface or substitute invented product imagery for the real screenshots.
- **Don't** use the screenshot surface tints as competing primary action colors.
- **Don't** crop away app content or the example-data captions to force a fixed composition.
- **Don't** turn an unused stylesheet declaration into an established design token.

The hero positioning paragraph uses 22px bold text (20px on compact layouts), 24px clearance after the headline and 10px before the audience description. The poster repeats the explicit app-for-women definition in plum bold type above its two-goal audience description.
