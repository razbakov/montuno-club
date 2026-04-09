---
name: event-launch
version: 1.0.0
description: "Generate multi-channel marketing content for Montuno Club events. Use when launching a new event, course, or weekly schedule change. Outputs: Instagram caption, HubSpot newsletter, and WeDance event listing — all in one go."
---

# Event Launch — Multi-Channel Content for Montuno Club

Generate ready-to-use content for Instagram, email newsletter (HubSpot), and WeDance event listing from event details.

## Trigger

When the user mentions launching an event, promoting a class, creating event content, or says "event launch" for Montuno Club.

## Inputs

Gather from user (ask if not provided):

| Field | Required | Example |
|-------|----------|---------|
| Event name(s) | Yes | Salsa From Zero, Azucar |
| Date | Yes | April 12, 2026 |
| Time slot(s) | Yes | 6pm, 7pm, 8pm |
| Pricing per slot | Yes | Free/donations, EUR 40/month, EUR 10/class |
| Type per slot | Yes | Free taster, 8-week course, workshop |
| Registration links | Yes | WeDance URLs |
| Special notes | No | "First class", "new instructor" |

## Context (auto-loaded)

- **Venue:** Buena Vista Bar, Am Einlass 2A, Munich
- **Language:** English
- **Brand voice:** Casual, direct, bar-not-studio vibe. No corporate speak. Short punchy sentences.
- **Tagline energy:** "We meet in a bar, not a studio. Grab a drink, learn a step, meet new people."
- **Website:** montuno.club
- **Registration:** via WeDance.vip

Check `~/Orgs/MontunoClub/CLAUDE.md` for current schedule and pricing before generating.

## Process

### 1. Instagram Caption

- Start with attention-grabbing emoji + headline
- Key details: date, time, location, price
- One block per time slot if multiple
- End with CTA ("Tag someone who needs this") + question
- 15-25 relevant hashtags at the end
- Core hashtags: #SalsaMunich #SalsaCubana #MontunoClub #MunichEvents #CubanSalsa #MunichExpats #LearnSalsa #BuenaVistaBar

### 2. Email Newsletter (HubSpot)

- **Subject line:** Short, specific, urgency or curiosity
- **Preview text:** One-liner hook
- **Body structure:**
  - One intro paragraph (2-3 sentences max)
  - One block per time slot with: time, price, description, register link
  - Location + language footer
  - Sign-off: "See you [day]? Montuno Club"
- **Registration links:** Always append UTM parameters:
  ```
  ?utm_source=hubspot&utm_medium=email&utm_campaign=<event-slug>
  ```
  If the link already has query params, use `&` instead of `?`.
- **Subscribers:** 224 in HubSpot (synced from WeDance CSV at `~/Orgs/MontunoClub/inbox/Clients/subscribers-MontunoClub.csv`)
- **From:** montuno@wedance.vip via Resend

### 3. WeDance Event Listing

- **Title:** `<Event Name> — <Descriptor>` (e.g., "Salsa From Zero — 8-Week Beginner Course")
- **Description:** Plain text, no markdown. Include: what you'll learn, format (partner rotation, one move/class), prerequisites, schedule, location, price. End with brand line.

## Output Format

Present all three pieces clearly separated with headers. Each should be ready to copy-paste with no editing needed.

## Save

After user approves, save content to:
```
~/Orgs/MontunoClub/domains/community-growth/operations/YYYY-MM-DD-<event-slug>.md
```

Update `~/Orgs/MontunoClub/CLAUDE.md` schedule table if any times/prices changed.

## Lessons Learned

- Always present each time slot as a separate block — never merge them
- The 6pm slot is a free taster (funnel entry), not part of the paid course
- Course names matter — use group names (e.g., "Azucar") when they exist
- Users iterate on naming — present draft, expect corrections
- UTM campaign should be descriptive: `beginner_course_apr2026`, not generic
