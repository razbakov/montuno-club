import type { WeDanceEvent } from '#wedance-site'

/**
 * Cancelled events (RAZ-947). WeDance's profile feed (/site, /events) is
 * expected to keep a cancelled event in the list with `cancelled: true` and
 * the organiser's optional `cancelReason`, so the site can show it crossed
 * out instead of letting it silently vanish. Both fields are optional: until
 * WeDance sends them, every event counts as scheduled.
 */
export type SiteEvent = WeDanceEvent & {
  cancelled?: boolean | null
  cancelReason?: string | null
}

export const isCancelled = (e: SiteEvent) => e.cancelled === true

/** The organiser's reason, trimmed; empty when there is none. */
export const cancelReason = (e: SiteEvent) =>
  isCancelled(e) ? (e.cancelReason ?? '').trim() : ''

/** schema.org eventStatus, so search engines mark the date as cancelled too. */
export const schemaEventStatus = (e: SiteEvent) =>
  isCancelled(e) ? 'https://schema.org/EventCancelled' : 'https://schema.org/EventScheduled'
