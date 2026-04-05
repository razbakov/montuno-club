# Montuno Club — Domain Map

## Organizational Structure

```
                    ┌─────────────────────┐
                    │   Montuno Club       │
                    │   (Primary Driver)   │
                    └─────────┬───────────┘
                              │
              ┌───────────────┼───────────────┐
              │                               │
    ┌─────────▼─────────┐          ┌──────────▼──────────┐
    │     Teaching       │          │  Community & Growth  │
    │                    │◄─────────│                      │
    │  Keeper: Alex      │ provides │  Keeper: AI agent    │
    │                    │ new      │                      │
    └────────────────────┘ attendees└──────────────────────┘
              │                               │
              │ provides raw                  │ needs raw
              │ content (photos/videos)       │ content
              └───────────────────────────────┘
```

## Domains

| Domain | Purpose | Team/Roles |
|--------|---------|------------|
| Teaching | Deliver weekly beginner Salsa Cubana class | Alex (Instructor & Founder) |
| Community & Growth | Make the class discoverable and keep community engaged | Content & Growth Lead (AI) |

## Roles

| Role | Keeper | Domain(s) |
|------|--------|-----------|
| Instructor & Founder | Alex | Teaching (keeper) + Community & Growth (delegator) |
| Content & Growth Lead | Content & Growth Lead (AI) | Community & Growth (keeper) |
| Coordinator | Coordinator (AI) | Cross-domain (operational coordination) |

## Dependencies

| From | To | What |
|------|----|------|
| Community & Growth | Teaching | New attendees through online discovery |
| Teaching | Community & Growth | Raw photos/videos, event details, content briefs |
| WeDance.vip (external) | Both | Registration platform, event visibility |
| Buena Vista Bar (external) | Teaching | Venue space |

## Coordination Mechanism

| Mechanism | Participants | Frequency |
|-----------|-------------|-----------|
| Coordination report | Coordinator synthesizes status, recommends priorities | On demand (before dispatch decisions) |
| Content handoff | Alex provides raw material to Content & Growth Lead's backlog | Weekly (after Sunday class) |
| Content approval | Content & Growth Lead submits PR, Alex reviews | Per content piece (48h turnaround) |
| Quarterly review | Alex reviews all governance docs + agent performance | Quarterly |

---

*Review date: 2026-07-05*
