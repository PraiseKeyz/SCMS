# SCMS — Smart Campus Mobility System

> Kingdom Hack 3.0 · Smart City Innovation Track

SCMS is a real-time navigation, parking, and safety platform built for **Redemption City**,
the RCCG camp ground on the Lagos–Ibadan Expressway (6.825889°N, 3.462819°E). It gives
visitors an anonymous map to find their way around, drivers live parking zone status, and
wardens a way to broadcast alerts and log incidents, all synced in real time across the app.

## Repository Structure

```
SCMS/
├── backend/    # NestJS REST + WebSocket API, Prisma + PostgreSQL (Neon)
├── frontend/   # Flutter mobile app
└── docs/       # Architecture, business design, pitch deck, API reference, team docs
```

## Quick Links

| Doc | What's in it |
|-----|---------------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System diagrams, real-time flow, auth flow, data model |
| [docs/API_REFERENCE.md](docs/API_REFERENCE.md) | Every backend endpoint and WebSocket event, with request/response shapes |
| [docs/BUSINESS_DESIGN.md](docs/BUSINESS_DESIGN.md) | The problem, business model, and go-to-market plan |
| [docs/TEAM_RESPONSIBILITIES.md](docs/TEAM_RESPONSIBILITIES.md) | Who owns which module and the task breakdown |
| [docs/SCMS_Scaffold_Plan.md](docs/SCMS_Scaffold_Plan.md) | Original scaffold plan and build order |
| [docs/PITCH_DECK.pptx](docs/PITCH_DECK.pptx) | Hackathon pitch deck |

## Getting Started

Each part of the project has its own README with setup instructions:

- [backend/README.md](backend/README.md) — NestJS API setup, environment variables, running migrations and the seed script
- [frontend/README.md](frontend/README.md) — Flutter app setup, pointing it at the backend, running on a device or emulator

## Team

| Name | Role | Owns |
|------|------|------|
| Praise Adebayo | Backend Engineer | Auth, Users, Campus modules, database seed |
| Olamidipupo Agboola | System Architect | Parking, Alerts, Recommendations modules, real-time gateways |
| Olorunfunminiyi Akinlua | Frontend Engineer | Flutter app |

## Tech Stack

NestJS 11 · Prisma · PostgreSQL (Neon) · Socket.IO · Flutter · Riverpod · Mapbox GL
