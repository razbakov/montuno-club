# Montuno Club Website

Nuxt application for the public `montuno.club` website.

- Production: `https://montuno.club/`
- Deployment: Vercel
- Package manager: `bun`
- Registration platform: [WeDance.vip](https://wedance.vip)
- Org workspace: `~/Orgs/MontunoClub`

## Scope

This repository contains only website source code, assets, deployment config, and tests.

Governance, roles, domains, coordination, inbox material, and agent definitions live in `~/Orgs/MontunoClub`.

## Development

```bash
bun install
bun run dev
```

## Main Directories

- `app/` — Nuxt pages, components, styles, plugins
- `server/` — server routes
- `public/` — static assets
- `i18n/locales/` — translations
- `tests/` — Bun tests
