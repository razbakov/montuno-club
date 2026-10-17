/**
 * Montuno Club's events, read from the MontunoClub profile on WeDance — the one
 * source of truth (RAZ-412). Nothing on montuno.club lists an event by hand:
 * what MontunoClub publishes on WeDance shows here, and every class links back
 * to WeDance, where people sign up.
 */
export type WeDanceEvent = {
  id: string
  name: string
  type: string | null
  startDate: string
  endDate: string | null
  timezone: string | null
  venueName: string | null
  venueAddress: string | null
  price: string
  cover: string | null
  styles: string[]
  artists: { handle: string; name: string }[]
  url: string
}
type Feed = { profile: { username: string; name: string; url: string }; events: WeDanceEvent[] }

export const MONTUNO_PROFILE = 'montunoclub'
const TZ = 'Europe/Berlin'

export function useMontunoEvents(opts: { days?: number } = {}) {
  const base = useRuntimeConfig().public.wedanceUrl as string
  const { data, status } = useFetch<Feed>(`${base}/api/profiles/${MONTUNO_PROFILE}/events`, {
    key: `montuno-events-${opts.days ?? 35}`,
    query: { days: opts.days ?? 35 },
    // A WeDance hiccup must never break the page: an empty list + the profile link.
    default: () => ({ profile: { username: MONTUNO_PROFILE, name: 'MontunoClub', url: `${base}/@${MONTUNO_PROFILE}` }, events: [] }),
  })
  const events = computed(() => data.value?.events ?? [])
  const profileUrl = computed(() => data.value?.profile.url ?? `${base}/@${MONTUNO_PROFILE}`)
  return { events, profileUrl, status }
}

/** Sign-up link with campaign tags, so WeDance can tell where people came from. */
export function withUtm(url: string, medium: string) {
  const u = new URL(url)
  u.searchParams.set('utm_source', 'montuno.club')
  u.searchParams.set('utm_medium', medium)
  return u.toString()
}

export const isFree = (price: string) => /^(free|0|0 ?€|€ ?0|kostenlos|gratis)$/i.test(price.trim())

/** Date/time parts in Munich time, in the visitor's language. */
export function eventParts(e: WeDanceEvent, locale: string) {
  const tz = e.timezone || TZ
  const start = new Date(e.startDate)
  const fmt = (o: Intl.DateTimeFormatOptions, d = start) => new Intl.DateTimeFormat(locale, { timeZone: tz, ...o }).format(d)
  return {
    weekday: fmt({ weekday: 'long' }),
    date: fmt({ day: 'numeric', month: 'short' }),
    time: fmt({ hour: '2-digit', minute: '2-digit', hour12: false }),
    day: fmt({ year: 'numeric', month: '2-digit', day: '2-digit' }),
  }
}
