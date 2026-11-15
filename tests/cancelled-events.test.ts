import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { cancelReason, isCancelled, schemaEventStatus, type SiteEvent } from '../app/utils/eventStatus'
import de from '../i18n/locales/de.json'
import en from '../i18n/locales/en.json'
import es from '../i18n/locales/es.json'
import ru from '../i18n/locales/ru.json'
import uk from '../i18n/locales/uk.json'

const event = (extra: Partial<SiteEvent> = {}): SiteEvent => ({
  id: 'e1',
  name: 'Salsa From Zero',
  type: 'class',
  startDate: '2026-11-15T18:00:00.000Z',
  endDate: null,
  timezone: 'Europe/Berlin',
  venueName: 'Buena Vista Bar',
  venueAddress: 'Am Einlass 2A',
  price: 'free',
  cover: null,
  styles: ['Salsa Cubana'],
  artists: [],
  url: 'https://2026.wedance.vip/events/e1',
  ...extra,
})

describe('cancelled events (RAZ-947)', () => {
  test('an event without the field is scheduled, so older WeDance feeds keep working', () => {
    expect(isCancelled(event())).toBe(false)
    expect(cancelReason(event())).toBe('')
    expect(schemaEventStatus(event())).toBe('https://schema.org/EventScheduled')
  })

  test('a cancelled event is marked cancelled for people and search engines', () => {
    const e = event({ cancelled: true, cancelReason: '  Tanzverbot today — public holiday.  ' })
    expect(isCancelled(e)).toBe(true)
    expect(cancelReason(e)).toBe('Tanzverbot today — public holiday.')
    expect(schemaEventStatus(e)).toBe('https://schema.org/EventCancelled')
  })

  test('a reason on an event that is not cancelled is ignored', () => {
    expect(cancelReason(event({ cancelled: false, cancelReason: 'stale' }))).toBe('')
  })

  test('every language has the cancelled label and the details link', () => {
    for (const locale of [en, de, es, ru, uk]) {
      expect(locale.schedule.cancelled.length).toBeGreaterThan(0)
      expect(locale.schedule.details.length).toBeGreaterThan(0)
    }
  })

  test('the schedule keeps cancelled dates in the list, crossed out, without a sign-up button', () => {
    const source = readFileSync(resolve(process.cwd(), 'app/components/site/SiteEvents.vue'), 'utf8')
    expect(source).toContain(':data-cancelled')
    expect(source).toContain("t('schedule.cancelled')")
    expect(source).toContain('e.reason')
    expect(source).toMatch(/v-if="e\.cancelled"[^>]*>\{\{ t\('schedule\.details'\) \}\}/)
  })

  test('the homepage structured data and the kiosk respect cancellations', () => {
    const index = readFileSync(resolve(process.cwd(), 'app/pages/index.vue'), 'utf8')
    expect(index).toContain('eventStatus: schemaEventStatus(e)')
    const join = readFileSync(resolve(process.cwd(), 'app/pages/join.vue'), 'utf8')
    expect(join).toContain('!isCancelled(e)')
  })
})
