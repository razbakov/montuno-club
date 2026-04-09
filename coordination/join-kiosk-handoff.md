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
- Added the missing `join.*` translation keys in `i18n/locales/en.json`
- Added matching kiosk keys in `de.json`, `es.json`, `ru.json`, and `uk.json` to avoid runtime gaps
- Brought `bun test tests/join-kiosk.test.ts` back to green
- Verified `bun run build` passes on this branch

Still worth reviewing:
- Check the `/join` page on an actual iPad-sized viewport at Buena Vista Bar
- Fine-tune QR size, spacing, and copy density if the real device needs it

## Files Touched

- `app/pages/join.vue`
- `tests/join-kiosk.test.ts`
- `i18n/locales/en.json`
- `i18n/locales/de.json`
- `i18n/locales/es.json`
- `i18n/locales/ru.json`
- `i18n/locales/uk.json`

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

## Remaining Notes

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

These are now present in:
- `i18n/locales/en.json`
- `i18n/locales/de.json`
- `i18n/locales/es.json`
- `i18n/locales/ru.json`
- `i18n/locales/uk.json`

## Test State

`tests/join-kiosk.test.ts` was added as a lightweight Bun test.

Current expectation of the test:
- English copy should clearly target first-time bar visitors
- Discovery QR should appear before student check-in in `app/pages/join.vue`
- The old equal-weight two-column kiosk layout should be gone

Current state:
- The test passes after the locale keys were added

## Recommended Next Steps

1. Review the `/join` page on an iPad-sized viewport or the real kiosk device
2. Fine-tune QR size, spacing, and copy density if needed for standing-distance readability
3. Decide whether the non-English kiosk copy should stay localized or temporarily fall back to English for onsite consistency

## Suggested Copy Direction

Primary message should sound like:
- Saw us dancing?
- New here?
- Scan to see what Montuno Club is, when classes happen, and how to join

Secondary message should sound like:
- Already a student?
- Alex will ask you to scan here to check in for today’s class
