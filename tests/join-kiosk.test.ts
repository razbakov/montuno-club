import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import en from '../i18n/locales/en.json'

describe('join kiosk', () => {
  test('english copy is aimed at first-time bar visitors and keeps check-in secondary', () => {
    expect(en.join.eyebrow).toContain('Saw us dancing')
    expect(en.join.primaryTitle).toContain('Scan')
    expect(en.join.primarySub).toContain('new')
    expect(en.join.checkInEyebrow).toContain('Already')
    expect(en.join.checkInSub).toContain('asked')
  })

  test('discover QR appears before student check-in on the kiosk page', () => {
    const source = readFileSync(resolve(process.cwd(), 'app/pages/join.vue'), 'utf8')
    const discoverIndex = source.indexOf('data-kiosk-role="discover"')
    const checkInIndex = source.indexOf('data-kiosk-role="check-in"')

    expect(discoverIndex).toBeGreaterThanOrEqual(0)
    expect(checkInIndex).toBeGreaterThan(discoverIndex)
    expect(source).not.toContain('max-w-5xl flex flex-col lg:flex-row')
  })

  test('kiosk layout is compact enough for ipad portrait', () => {
    const source = readFileSync(resolve(process.cwd(), 'app/pages/join.vue'), 'utf8')

    expect(source).toContain('md:grid-cols-')
    expect(source).not.toContain("{{ $t('join.everySunday') }}")
    expect(source).not.toContain("{{ $t('join.englishFriendly') }}")
    expect(source).not.toContain("{{ $t('join.tonight') }}: {{ $t(`join.classes.${currentClass.key}`) }}")
  })

  test('kiosk page includes a language switcher', () => {
    const source = readFileSync(resolve(process.cwd(), 'app/pages/join.vue'), 'utf8')

    expect(source).toContain('<LangSwitcher variant="buttons"')
  })

  test('kiosk hero uses the bigger salsa from zero title and floating schedule', () => {
    const source = readFileSync(resolve(process.cwd(), 'app/pages/join.vue'), 'utf8')

    expect(source).toContain("$t('hero.title1')")
    expect(source).toContain("$t('hero.title2')")
    expect(source).toContain('currentClassIndex')
    expect(source).toContain('upcomingClasses')
    expect(source).toContain('data-kiosk-role="schedule"')
    expect(source).toContain('/images/group.jpg')
    expect(source).toContain('flex items-center justify-between')
  })
})
