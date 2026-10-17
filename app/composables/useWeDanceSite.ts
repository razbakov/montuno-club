/**
 * montuno.club's homepage, managed on WeDance (RAZ-412): WeDance is the CMS
 * (every section, in every language) and the CRM (the sign-up form posts to
 * the profile's contacts). The page only renders what
 * GET /api/profiles/montunoclub/site returns — events included, so the
 * homepage makes one request. Contract: wedance-2026 shared/types/profileSite.ts.
 */
import { MONTUNO_PROFILE, type WeDanceEvent } from './useMontunoEvents'

export type SiteButton = { label: string; url: string }
export type SiteItem = { id: string; tag?: string; title?: string; body?: string; image?: string; url?: string }
export type SiteCallout = { title?: string; body?: string; button?: SiteButton }
export type SiteSection = {
  id: string
  kind: string
  anchor?: string
  navLabel?: string
  eyebrow?: string
  title?: string
  titleAccent?: string
  body?: string
  image?: string
  video?: string
  address?: string
  mapUrl?: string
  days?: number
  buttons?: SiteButton[]
  items?: SiteItem[]
  callout?: SiteCallout
}
export type WeDanceSite = {
  profile: { username: string; name: string; url: string }
  lang: string
  locales: string[]
  domain: string | null
  seo: { title?: string; description?: string; image?: string }
  sections: SiteSection[]
  updatedAt: string | null
  events: WeDanceEvent[]
  contactsUrl: string
}

export function useWeDanceSite() {
  const base = useRuntimeConfig().public.wedanceUrl as string
  const { locale } = useI18n()
  // One cache entry per language: the header and the page share it, and a
  // language switch fetches that language's copy.
  const { data, error, status } = useFetch<WeDanceSite>(`${base}/api/profiles/${MONTUNO_PROFILE}/site`, {
    key: computed(() => `wedance-site-${locale.value}`),
    query: { lang: locale },
  })

  const site = computed(() => (data.value && Array.isArray(data.value.sections) ? data.value : null))
  const sections = computed(() => site.value?.sections ?? [])
  const events = computed(() => site.value?.events ?? [])
  const profileUrl = computed(() => site.value?.profile?.url || `${base}/@${MONTUNO_PROFILE}`)
  const contactsUrl = computed(() => site.value?.contactsUrl || `${base}/api/profiles/${MONTUNO_PROFILE}/contacts`)
  return { site, sections, events, profileUrl, contactsUrl, error, status }
}

/** Paragraphs are separated by a blank line; single newlines stay line breaks. */
export const paragraphs = (body?: string) => (body ?? '').split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)

/** In-page anchors stay in the tab; anything else opens a new one. */
export function linkAttrs(url: string) {
  return url.startsWith('#') ? { href: url } : { href: url, target: '_blank', rel: 'noopener' }
}

/** A YouTube watch/short/share URL as an embed URL. */
export function youtubeEmbed(url?: string) {
  if (!url) return ''
  try {
    const u = new URL(url)
    const id = u.hostname.includes('youtu.be')
      ? u.pathname.slice(1)
      : u.searchParams.get('v') || u.pathname.match(/\/(?:embed|shorts|live)\/([^/?]+)/)?.[1]
    return id ? `https://www.youtube.com/embed/${id}` : ''
  } catch {
    return ''
  }
}

export const isWhatsApp = (url?: string) => !!url && /(^|\.)(whatsapp\.com|wa\.me)/.test(url.replace(/^https?:\/\//, ''))
