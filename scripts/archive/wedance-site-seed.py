#!/usr/bin/env python3
"""
ARCHIVED: ran once on 2026-10-16 against the locale files as they were before
the homepage keys (hero, about, schedule, rueda, havanaCrawl, havanaBeach,
expect, instructor, video, faq, location, cta, seo, nav) were removed. It no
longer works on today's i18n/locales/*.json; it's kept as the record of how the
content got onto WeDance. Run it from a checkout of commit 3ad024e if ever needed.

One-off (RAZ-412): turn montuno.club's homepage copy (i18n/locales/*.json, 5
languages) into the MontunoClub website on WeDance (profile_sites.content,
see wedance-2026 shared/types/profileSite.ts). After this, the page is edited
on 2026.wedance.vip/business/network/montunoclub/website, not here.

  python3 scripts/archive/wedance-site-seed.py > site.json
"""
import json, os, sys

ROOT = os.path.join(os.path.dirname(__file__), '..', '..', 'i18n', 'locales')
LOCALES = ['en', 'de', 'es', 'ru', 'uk']
L = {l: json.load(open(os.path.join(ROOT, f'{l}.json'))) for l in LOCALES}
WA_GROUP = 'https://chat.whatsapp.com/JlJrGUi89yj57GocNzRTCt'
WA_RUEDA = 'https://chat.whatsapp.com/JXYyHPe1oBsBkLPJRLHq1A'


def t(path, join=None):
    """{locale: text} for a dotted key; several keys joined into paragraphs."""
    keys = path if isinstance(path, list) else [path]
    out = {}
    for l in LOCALES:
        parts = []
        for k in keys:
            v = L[l]
            for p in k.split('.'):
                v = v.get(p) if isinstance(v, dict) else None
            if isinstance(v, str) and v:
                parts.append(v)
        if parts:
            out[l] = (join or '\n\n').join(parts)
    return out


n = 0
def i():
    global n
    n += 1
    return f's{n}'


sections = [
    dict(id=i(), kind='hero', eyebrow=t('hero.subtitle'), title=t('hero.title1'), titleAccent=t('hero.title2'),
         body=t('hero.description'), image='/images/group.jpg',
         buttons=[dict(label=t('form.submit'), url='#join'), dict(label=t('hero.learnMore'), url='#schedule')]),
    dict(id=i(), kind='text', anchor='about', navLabel=t('nav.about'), eyebrow=t('about.label'),
         title=t('about.title1'), titleAccent=t('about.title2'), body=t(['about.p1', 'about.p2']),
         items=[dict(id=f'a{k}', title=t(f'about.{k}'), body=t(f'about.{k}Desc')) for k in ['free', 'lang', 'solo', 'exp']]),
    dict(id=i(), kind='events', anchor='schedule', navLabel=t('nav.schedule'), eyebrow=t('schedule.label'),
         title=t('schedule.title1'), titleAccent=t('schedule.title2'), body=t('schedule.description'), days=35,
         callout=dict(title=t('schedule.djWhatsappTitle'), body=t('schedule.djWhatsappDesc'),
                      button=dict(label=t('schedule.djWhatsappCta'), url=WA_GROUP))),
    dict(id=i(), kind='cards', anchor='rueda', navLabel=t('nav.rueda'), eyebrow=t('rueda.label'),
         title=t('rueda.headline1'), titleAccent=t('rueda.headline2'), body=t('rueda.sub'),
         video='https://www.youtube.com/watch?v=0QnN2mTix9g',
         items=[dict(id=f'r{k}', tag=t(f'rueda.{k}Tag'), title=t(f'rueda.{k}Title'), body=t(f'rueda.{k}Desc')) for k in ['bigOne', 'weekly', 'flash']],
         callout=dict(title=t('rueda.ctaTitle'), body=t('rueda.ctaDesc'), button=dict(label=t('rueda.ctaButton'), url=WA_RUEDA))),
    dict(id=i(), kind='cards', anchor='havana', navLabel=t('nav.havana'), eyebrow=t('havanaCrawl.label'),
         title=t('havanaCrawl.title1'), titleAccent=t('havanaCrawl.title2'),
         body={l: '\n\n'.join([L[l]['havanaCrawl']['hook'],
                               f"{L[l]['havanaCrawl']['whenLabel']}: {L[l]['havanaCrawl']['when']} · {L[l]['havanaCrawl']['whereLabel']}: {L[l]['havanaCrawl']['where']} · {L[l]['havanaCrawl']['priceLabel']}: {L[l]['havanaCrawl']['price']}"])
               for l in LOCALES if 'havanaCrawl' in L[l]},
         items=[dict(id=f'h{k}', tag={l: str(k) for l in LOCALES}, title=t(f'havanaCrawl.stop{k}Title'), body=t(f'havanaCrawl.stop{k}Desc')) for k in range(1, 6)],
         callout=dict(title=t('havanaCrawl.ctaTitle'), body=t('havanaCrawl.ctaDesc'), button=dict(label=t('havanaCrawl.ctaButton'), url=WA_RUEDA))),
    # Open-air summer edition: hidden until it runs again (and then it's an event on WeDance).
    dict(id=i(), kind='text', hidden=True, anchor='events', navLabel=t('nav.events'), eyebrow=t('havanaBeach.label'),
         title=t('havanaBeach.title1'), titleAccent=t('havanaBeach.title2'),
         body=t(['havanaBeach.subtitle', 'havanaBeach.description', 'havanaBeach.date', 'havanaBeach.time', 'havanaBeach.venue', 'havanaBeach.organizer']),
         image='/images/havana-beach-party.png'),
    dict(id=i(), kind='cards', anchor='expect', eyebrow=t('expect.label'), title=t('expect.title1'), titleAccent=t('expect.title2'),
         items=[dict(id=f'e{k}', tag={l: str(k) for l in LOCALES}, title=t(f'expect.step{k}Title'), body=t(f'expect.step{k}Text')) for k in range(1, 4)]),
    dict(id=i(), kind='person', eyebrow=t('instructor.label'), title=t('instructor.title'), titleAccent=t('instructor.name'),
         body=t(['instructor.p1', 'instructor.p2']), image='/images/alex-dancing.jpg'),
    dict(id=i(), kind='video', eyebrow=t('video.label'), title=t('video.title1'), titleAccent=t('video.title2'),
         video='https://www.youtube.com/watch?v=SO9xKjwqMX0'),
    dict(id=i(), kind='faq', anchor='faq', navLabel=t('nav.faq'), eyebrow=t('faq.label'), title=t('faq.title1'), titleAccent=t('faq.title2'),
         items=[dict(id=f'q{k}', title=t(f'faq.q{k}'), body=t(f'faq.a{k}')) for k in range(1, 7)]),
    dict(id=i(), kind='location', anchor='location', navLabel=t('nav.location'), eyebrow=t('location.label'),
         title=t('location.title1'), titleAccent=t('location.title2'), body=t('location.description'), address=t('location.address'),
         mapUrl='https://maps.google.com/?q=Buena+Vista+Bar,+Am+Einla%C3%9F+2A,+80469+M%C3%BCnchen',
         items=[dict(id='l1', title=t('location.time')), dict(id='l2', title=t('location.price'))]),
    dict(id=i(), kind='signup', anchor='join', title=t('cta.title1'), titleAccent={l: v + '?' for l, v in t('cta.title2').items()},
         body=t(['cta.description', 'cta.descLine2'], '\n')),
]

site = dict(
    domain='https://montuno.club',
    locales=LOCALES,
    seo=dict(title=t('seo.title'), description=t('seo.description'), image='https://montuno.club/og.jpg'),
    welcome=dict(
        subject={'en': 'Welcome to Montuno Club, {name}!'},
        body={'en': "Hi {name},\n\nThanks for joining Montuno Club! We're excited to have you.\n\nEvery class and party is on WeDance — pick a date and sign up there: https://2026.wedance.vip/@montunoclub\n\nNo partner needed, no experience required. Each class teaches one Salsa Cubana move from scratch, and we rotate partners so everyone dances with everyone.\n\nJoin our WhatsApp group for news: " + WA_GROUP + "\n\nSee you on the dance floor!\nAlösha"},
    ),
    sections=sections,
)
json.dump(site, sys.stdout, ensure_ascii=False, indent=1)
