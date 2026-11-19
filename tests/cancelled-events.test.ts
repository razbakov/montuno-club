import { describe, expect, test } from 'bun:test'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Cancelled classes come from wedance-site-kit since v0.2.3 (RAZ-968, RAZ-971):
// the kit's SiteEvents draws them, its helpers mark them for search engines and
// the kiosk. These tests check montuno.club still relies on the kit for it.
import { siteCopy } from 'wedance-site-kit/app/utils/siteCopy'
import { cancelReason, isCancelled, schemaEventStatus, type WeDanceEvent } from 'wedance-site-kit/app/utils/wedanceSite'

const read = (path: string) => readFileSync(resolve(process.cwd(), path), 'utf8')

const event = (extra: Partial<WeDanceEvent> = {}): WeDanceEvent => ({
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

describe('cancelled events (RAZ-971)', () => {
  test('the site pins wedance-site-kit v0.2.3 or later and has no copy of its schedule', () => {
    const pin = JSON.parse(read('package.json')).dependencies['wedance-site-kit'] as string
    const [, major, minor, patch] = pin.match(/^github:razbakov\/wedance-site-kit#v(\d+)\.(\d+)\.(\d+)$/)!.map(Number)
    expect(major * 1e6 + minor * 1e3 + patch).toBeGreaterThanOrEqual(2003)
    expect(existsSync(resolve(process.cwd(), 'app/components/site/SiteEvents.vue'))).toBe(false)
    expect(existsSync(resolve(process.cwd(), 'app/utils/eventStatus.ts'))).toBe(false)
  })

  test('the kit marks a cancelled class for people and search engines', () => {
    expect(isCancelled(event())).toBe(false)
    expect(schemaEventStatus(event())).toBe('https://schema.org/EventScheduled')
    const e = event({ cancelled: true, cancelReason: '  Tanzverbot today — public holiday.  ' })
    expect(isCancelled(e)).toBe(true)
    expect(cancelReason(e)).toBe('Tanzverbot today — public holiday.')
    expect(schemaEventStatus(e)).toBe('https://schema.org/EventCancelled')
  })

  test("the kit's schedule keeps cancelled dates, crossed out, with the reason and no sign-up button", () => {
    const source = read('node_modules/wedance-site-kit/app/components/site/SiteEvents.vue')
    expect(source).toContain(':data-cancelled')
    expect(source).toContain("'line-through'")
    expect(source).toContain("st('schedule.cancelled')")
    expect(source).toContain('e.reason')
    expect(source).toMatch(/v-if="e\.cancelled"[^>]*>\{\{ st\('schedule\.details'\) \}\}/)
  })

  test('every site language has the cancelled label and the details link in the kit', () => {
    for (const lang of ['en', 'de', 'es', 'ru', 'uk']) {
      expect(siteCopy[lang]!.schedule.cancelled!.length).toBeGreaterThan(0)
      expect(siteCopy[lang]!.schedule.details!.length).toBeGreaterThan(0)
    }
    expect(siteCopy.de!.schedule.cancelled).toBe('Fällt aus')
  })

  test('the homepage structured data and the kiosk respect cancellations', () => {
    expect(read('app/pages/index.vue')).toContain('eventStatus: schemaEventStatus(e)')
    expect(read('app/pages/join.vue')).toContain('!isCancelled(e)')
  })
})
