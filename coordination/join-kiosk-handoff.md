# Join Kiosk Handoff

Date: 2026-04-09
Branch: `codex/join-kiosk-handoff`

## Context

This handoff covers WIP changes to the `/join` kiosk page for iPad use at Buena Vista Bar.

Goal:
- Make the kiosk fit iPad better
- Make the message clear for people who do not know Montuno Club yet
- Position the main QR code for newcomers who saw the dancing or the ad on the iPad
- Keep student check-in as a secondary CTA for returning students

## Current Status

Implemented:
- Started a layout refactor in `app/pages/join.vue`
- Reordered the page so the primary QR block is the newcomer/discovery path
- Reduced the visual weight of the student check-in block
- Added a Bun test scaffold in `tests/join-kiosk.test.ts` to lock the intended hierarchy and messaging direction

Not finished:
- `app/pages/join.vue` now references new `join.*` translation keys that do not exist yet
- Locale files have not been updated
- Tests have not been brought back to green
- Build verification has not been run after the refactor

## Files Touched

- `app/pages/join.vue`
- `tests/join-kiosk.test.ts`

Unrelated worktree item not touched:
- `AGENTS.md` is untracked and should be ignored for this task unless intentionally added later

## Expected UX Direction

Primary audience:
- A person who never heard about Montuno Club
- They saw people dancing in the bar or noticed the iPad ad
- They want to know what this is and whether they should scan

Primary CTA:
- Learn more / scan to discover Montuno Club

Secondary CTA:
- Student check-in
- This should be explicitly framed as something Alex tells existing students to use

## Known Gaps

The new page markup expects keys like:
- `join.eyebrow`
- `join.subtitle`
- `join.tonight`
- `join.everySunday`
- `join.englishFriendly`
- `join.noPartner`
- `join.primaryEyebrow`
- `join.primaryTitle`
- `join.primarySub`
- `join.primaryHint`
- `join.checkInEyebrow`
- `join.checkInHint`

These need to be added at minimum in:
- `i18n/locales/en.json`
- likely also `de.json`, `es.json`, `ru.json`, `uk.json`

## Test State

`tests/join-kiosk.test.ts` was added as a lightweight Bun test.

Current expectation of the test:
- English copy should clearly target first-time bar visitors
- Discovery QR should appear before student check-in in `app/pages/join.vue`
- The old equal-weight two-column kiosk layout should be gone

Current state:
- The test is expected to fail until locale keys are added

## Recommended Next Steps

1. Add the missing `join.*` copy to `i18n/locales/en.json`
2. Update the other locale files or temporarily align them to avoid runtime gaps
3. Run `bun test tests/join-kiosk.test.ts`
4. Run `bun run build`
5. Review the page on an actual iPad-sized viewport and fine-tune QR size, spacing, and copy density

## Suggested Copy Direction

Primary message should sound like:
- Saw us dancing?
- New here?
- Scan to see what Montuno Club is, when classes happen, and how to join

Secondary message should sound like:
- Already a student?
- Alex will ask you to scan here to check in for today’s class

