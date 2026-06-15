# SCMS — Team Responsibilities & Task Breakdown

> Companion to [`SCMS_Scaffold_Plan.md`](./SCMS_Scaffold_Plan.md). That document defines the
> overall architecture, Prisma schema, and API/WebSocket contracts — this document assigns
> ownership of each piece to a specific person and breaks each module into concrete tasks.

## Team

| Person | Area | Modules owned |
|--------|------|----------------|
| **Praise** | Backend — Auth, Users, Campus | `auth/`, `users/`, `campus/`, seed script |
| **Dipo** | Backend — Parking, Alerts, Real-time, Recommendations | `parking/`, `alerts/`, `recommendations/`, WebSocket gateways |
| **Tesals** | Frontend — Flutter app | Entire `scms-app/` |

---

## Already in place (shared foundation)

Both backend devs build on top of this — no need to redo it:

- `src/main.ts` — global `api` prefix, URI versioning (`/api/v1/...`), compression,
  cookie-parser, global `ValidationPipe`, global `HttpExceptionFilter` +
  `TransformInterceptor`, CORS allowlist
- `src/common/filters/http-exception.filter.ts` — every error returns
  `{ success: false, message, data: null, error: { statusCode, type, details, path }, timestamp }`
- `src/common/interceptors/transform.interceptor.ts` — every success response is wrapped as
  `{ success: true, message, data, error: null, timestamp }`.
  **Controllers/services must return `{ message?, data? }`** — the interceptor reads those keys.
- `src/app.module.ts` — `ConfigModule`, `ScheduleModule`, `ThrottlerModule` (global rate limit)
- `src/prisma/` — global `PrismaModule` + `PrismaService` (connect/disconnect lifecycle)
- `prisma/schema.prisma` — all models from the scaffold plan already defined: `User`, `Zone`,
  `Gate`, `Landmark`, `ZoneStatus`, `BroadcastAlert`, `Incident`, `WardenCheckin`
- `tsconfig.json` — `@/*` path alias maps to `src/*`
- `.env` / `.env.example` — `PORT`, `DATABASE_URL`, `FRONTEND_URL`

If either backend dev needs a new env var (e.g. `JWT_SECRET`), add it to both `.env` and
`.env.example` and mention it in your PR so the other person picks it up.

---

## Praise — Auth, Users, Campus

### 1. Auth module (`src/auth/`)

Files to create:
- `auth.module.ts`
- `auth.controller.ts`
- `auth.service.ts`
- `strategies/jwt.strategy.ts`
- `guards/jwt-auth.guard.ts`
- `guards/roles.guard.ts`
- `dto/login.dto.ts`
- `dto/warden-login.dto.ts`

Decorators (in `src/common/decorators/`, shared with Dipo):
- `public.decorator.ts` — `@Public()` + `IS_PUBLIC_KEY`, read by `JwtAuthGuard` to skip auth
- `current-user.decorator.ts` — `@CurrentUser()` param decorator, pulls `request.user`
- `roles.decorator.ts` — `@Roles('WARDEN', 'ADMIN')`, read by `RolesGuard`

Add `JWT_SECRET` (and optionally `JWT_EXPIRES_IN`) to `.env` / `.env.example`, register
`@nestjs/jwt` + `@nestjs/passport` + `passport-jwt` in `auth.module.ts` (same pattern as
`@nestjs/config` is already registered in `app.module.ts`).

#### Endpoints

| Method | Path | Access | Request body | Response `data` | Notes |
|--------|------|--------|---------------|------------------|-------|
| `POST` | `/auth/login` | `@Public()` | `{ name: string }` | `{ user, accessToken }` | Visitor "login" — no password. Creates a `User` with `role: VISITOR` if one doesn't exist for that name/device, or reissues a token. **Decide and document the exact identity strategy** (e.g. device-generated UUID sent from the app) since visitors have no email/password in the schema. |
| `POST` | `/auth/warden-login` | `@Public()` | `{ id: string, pin: string }` (`WardenLoginDto`) | `{ user, accessToken }` | Look up `User` by `id`, compare `pin` with `bcrypt.compare`. Throw `UnauthorizedException` on mismatch. |
| `GET` | `/auth/me` | JWT | — | `{ user }` (the `SafeUser`, no `pin`) | Use `@CurrentUser()`. |

#### Tasks checklist
- [ ] `LoginDto` / `WardenLoginDto` with `class-validator` decorators
- [ ] `JwtStrategy` — verify token, load user via `PrismaService`, exclude `pin` from the
      returned object (define a `SafeUserSelect` constant in `src/common/constants/`)
- [ ] `JwtAuthGuard` extending `AuthGuard('jwt')`, honoring `@Public()`
- [ ] `RolesGuard` reading `@Roles(...)` metadata + `request.user.role`
- [ ] Register `JwtAuthGuard` as a **global guard** in `app.module.ts` (`APP_GUARD`) once it's
      ready — coordinate with Dipo since this affects every route, including his
- [ ] `AuthService.signToken(user)` — signs `{ sub: user.id, role: user.role }`
- [ ] Hash warden PINs with `argon2` or `bcrypt` (pick one, add to `package.json`)
- [ ] Unit tests for `AuthService` (PIN check, token shape)

### 2. Users module (`src/users/`)

- `users.module.ts`, `users.service.ts`
- `dto/create-user.dto.ts`

#### Tasks checklist
- [ ] `UsersService.findById(id)`
- [ ] `UsersService.findByName(name)` (for visitor login lookup)
- [ ] `UsersService.create(dto)` — used by both visitor and warden creation paths
- [ ] Export `UsersService` so `AuthModule` can use it (or fold directly into
      `AuthService` if you'd rather keep it minimal — your call, document the choice)

### 3. Campus module (`src/campus/`)

- `campus.module.ts`, `campus.controller.ts`, `campus.service.ts`
- `dto/campus-map.dto.ts` (response shape only, no input validation needed — all GET)

#### Endpoints

| Method | Path | Access | Response `data` |
|--------|------|--------|------------------|
| `GET` | `/campus/map` | `@Public()` | `{ zones: GeoJSON.FeatureCollection, gates: Gate[], landmarks: Landmark[] }` — bundled for one initial app load |
| `GET` | `/campus/zones` | `@Public()` | `GeoJSON.FeatureCollection` (each `Zone.geojson` as a Feature with `id`, `name`, `label`, `capacity`, `type` in `properties`) |
| `GET` | `/campus/gates` | `@Public()` | `Gate[]` |
| `GET` | `/campus/landmarks` | `@Public()` | `Landmark[]` |

#### Tasks checklist
- [ ] `CampusService.getMapBundle()` — single Prisma call per table, assembled into one object
- [ ] `CampusService.getZonesAsGeoJSON()` — map `Zone.geojson` + metadata into a
      `FeatureCollection`
- [ ] Mark all four routes `@Public()` (no login required to view the map)
- [ ] Make sure `/campus/*` is usable **before** the global `JwtAuthGuard` lands — coordinate
      timing with the auth rollout

### 4. Seed script (`prisma/seed.ts`)

This unblocks Tesals early — get this done first if possible.

#### Tasks checklist
- [ ] Add `"prisma": { "seed": "ts-node prisma/seed.ts" }` to `package.json` (or equivalent
      for the ESM setup — check how fulltiime's seed script is wired if unsure)
- [ ] Seed a handful of `Zone` records (mix of `PARKING`/`VENUE`/`ROAD`) with real GeoJSON
      polygons traced from the campus map (coordinate with whoever produces
      `assets/map/campus_geojson.json` for the frontend so IDs/names line up)
- [ ] Seed `Gate` records (entry/exit points)
- [ ] Seed `Landmark` records (halls, clinic, toilets, admin, food)
- [ ] Seed 1–2 `User` records with `role: WARDEN` and a known PIN (e.g. `1234`) for demo
      logins — print the credentials to console when the seed runs
- [ ] Seed 1 `User` with `role: ADMIN`
- [ ] Document seed credentials in this file or a `SEED_DATA.md` once done

---

## Dipo — Parking, Alerts/Wardens, Real-time, Recommendations

### 1. Parking module (`src/parking/`)

- `parking.module.ts`, `parking.controller.ts`, `parking.service.ts`, `parking.gateway.ts`
- `dto/update-zone-status.dto.ts`, `dto/nearest-zone-query.dto.ts`

#### Endpoints

| Method | Path | Access | Request | Response `data` |
|--------|------|--------|---------|------------------|
| `GET` | `/parking/zones` | JWT (any role) | — | `Zone[]` each with its latest `ZoneStatus` joined in |
| `PATCH` | `/parking/zones/:id/status` | `@Roles('WARDEN')` | `{ status: 'AVAILABLE' \| 'LIMITED' \| 'FULL' }` | updated `ZoneStatus`, plus emits `zone:status_updated` on the `/parking` socket namespace |
| `GET` | `/parking/nearest?lat=&lng=&landmarkId=` | JWT | query params | `{ recommendedZoneId, rankedZones: [...] }` — delegates scoring to the `recommendations` module |

#### Tasks checklist
- [ ] `ParkingService.getZonesWithStatus()` — latest `ZoneStatus` per `Zone` (use
      `findFirst` ordered by `updatedAt desc`, or a raw query if needed for performance)
- [ ] `ParkingService.updateZoneStatus(zoneId, status, updatedById)` — creates a new
      `ZoneStatus` row, then calls `ParkingGateway.emitZoneStatusUpdated(...)`
- [ ] `UpdateZoneStatusDto` — `status` validated against `ZoneStatusEnum` via
      `class-validator`'s `IsEnum`
- [ ] `NearestZoneQueryDto` — `lat`, `lng` as numbers (`@Type(() => Number)` +
      `@IsNumber()`), optional `landmarkId` as string
- [ ] `ParkingGateway` (`@WebSocketGateway({ namespace: '/parking' })`):
  - `subscribe:zones` handler (client → server, can be a no-op / room join for now)
  - `emitZoneStatusUpdated({ zoneId, status, updatedAt })` broadcast method called from
    `ParkingService`
- [ ] `GET /parking/nearest` calls `RecommendationsService.recommendParkingZone(...)`

### 2. Alerts module (`src/alerts/`)

- `alerts.module.ts`, `alerts.controller.ts`, `alerts.service.ts`, `alerts.gateway.ts`,
  `warden.controller.ts`
- `dto/broadcast-alert.dto.ts`, `dto/create-incident.dto.ts`

#### Endpoints

| Method | Path | Access | Request | Response `data` |
|--------|------|--------|---------|------------------|
| `POST` | `/alerts/broadcast` | `@Roles('WARDEN')` | `{ message, radiusMeters, centerLat, centerLng, expiresAt }` (`BroadcastAlertDto`) | created `BroadcastAlert`, emits `alert:broadcast` on `/alerts` |
| `POST` | `/alerts/incident` | `@Roles('WARDEN')` | `{ type, description, latitude, longitude }` (`CreateIncidentDto`) | created `Incident`, emits `alert:incident` on `/alerts` |
| `GET` | `/alerts/active` | JWT | — | `BroadcastAlert[]` where `active: true` and `expiresAt > now` |
| `PATCH` | `/alerts/incident/:id/resolve` | `@Roles('WARDEN')` | — | updated `Incident` with `resolved: true` |
| `GET` | `/wardens/deployment` | `@Roles('ADMIN')` | — | active wardens + their latest `WardenCheckin` per zone |
| `POST` | `/wardens/checkin` | `@Roles('WARDEN')` | `{ zoneId }` | created `WardenCheckin` |

#### Tasks checklist
- [ ] `AlertsService.broadcast(dto, createdById)` — persist + call
      `AlertsGateway.emitBroadcast(...)`
- [ ] `AlertsService.createIncident(dto, reportedById)` — persist + call
      `AlertsGateway.emitIncident(...)` (incident events should probably only go to
      `WARDEN`/`ADMIN` clients — see gateway notes below)
- [ ] `AlertsService.getActiveAlerts()` — filter `active: true AND expiresAt > now()`
- [ ] `AlertsService.resolveIncident(id)`
- [ ] `AlertsGateway` (`@WebSocketGateway({ namespace: '/alerts' })`):
  - `subscribe:alerts` handler — accepts `{ lat, lng }`, join a room (or just broadcast to
    all for MVP — radius filtering can be a stretch goal)
  - `emitBroadcast(alert)` → `alert:broadcast`
  - `emitIncident(incident)` → `alert:incident` (consider a separate room/namespace for
    warden/admin-only events if time allows; otherwise document it as a known MVP gap)
- [ ] `WardenController` — separate controller, same module, for the two `/wardens/*` routes
- [ ] `WardenCheckinService.checkin(wardenId, zoneId)` and a simple "deployment" query
      (latest checkin per warden)

### 3. Recommendations / heuristics module (`src/recommendations/`)

This is the plain-TS replacement for the FastAPI ML service discussed earlier — no Python,
no model training, just deterministic scoring functions per `SCMS_Scaffold_Plan.md` §3.5.

- `recommendations.module.ts`, `recommendations.service.ts`
- `utils/geo.util.ts` — Haversine distance helper (shared, no module dependency)

#### Tasks checklist
- [ ] `geo.util.ts`: `haversineDistanceMeters(a: {lat,lng}, b: {lat,lng}): number`
- [ ] `RecommendationsService.recommendParkingZone({ driverLat, driverLng, zones })`:
  - score = `0.6 * (1 - normalizedDistance) + 0.4 * (1 - occupancyRatio)`
  - return `{ recommendedZoneId, rankedZones: [{ zoneId, score, walkDistanceM, occupancyPct }] }`
  - exported and consumed by `ParkingService.getNearestZone(...)`
- [ ] `RecommendationsService.estimateEta({ origin, destination, crowdLevel })`:
  - base speed 1.2 m/s × crowd multiplier table (`light: 1.0, moderate: 1.4, heavy: 1.9` —
    confirm/adjust multipliers, document wherever they end up)
- [ ] `RecommendationsService.predictCrowd({ eventType, hoursAhead })` — simple lookup
      table by event type + time band (stub with a couple of hardcoded event types for demo)
- [ ] `RecommendationsService.detectAnomaly({ zoneId, recentUpdateTimestamps })` —
      Z-score on update frequency vs. a baseline; return `{ isAnomaly, reason, severity }`
- [ ] Optional: wire `detectAnomaly` into a `@Cron()` job (via `ScheduleModule`, already
      registered) that runs every 5 minutes over recent `ZoneStatus` updates and pushes an
      `alert:incident`-style event if anomalous — stretch goal, only if time permits

### Cross-dependency with Praise
- `@Roles('WARDEN')` / `@Roles('ADMIN')` guards and the global `JwtAuthGuard` are Praise's
  deliverables. Until those land, stub a local `FakeUser` via a request header or a temporary
  `@CurrentUser()` that returns a hardcoded warden so you're not blocked — replace with the
  real guard once available.
- `SafeUserSelect` / `CurrentUser` decorator live in `src/common/` — once Praise adds them,
  import from there rather than duplicating.

---

## Tesals — Flutter App (`scms-app/`)

Build in this order so each stage produces something demoable even if later stages slip.

### 1. Core shell
- `lib/core/constants.dart` — API base URL (`http://<host>:3000/api/v1`), Mapbox token
- `lib/core/theme.dart`, `lib/core/router.dart` (GoRouter), `lib/core/di.dart` (get_it)
- `lib/services/api_service.dart` — Dio client; add a response interceptor that unwraps the
  backend's envelope (`{ success, message, data, error, timestamp }`) so the rest of the app
  only ever deals with `data` (or throws using `error.message` on `success: false`)
- `lib/services/auth_service.dart` — calls `/auth/login` / `/auth/warden-login`, stores JWT
  via `flutter_secure_storage`, attaches `Authorization: Bearer <token>` (or relies on the
  cookie if the backend sets one — confirm with Praise which mechanism is active)
- `lib/providers/auth_provider.dart` — Riverpod auth state
- Screens: `splash_screen.dart` (check stored token → route), `role_select_screen.dart`,
  `warden_login_screen.dart`

#### Tasks checklist
- [ ] Models: `lib/models/user.dart`, `zone.dart`, `gate.dart`, `landmark.dart`, `alert.dart`,
      `incident.dart` — match the Prisma model fields in `prisma/schema.prisma`
      (`Zone.type` ↔ `ZoneType`, `Zone` status comes from `ZoneStatus.status`, etc.)
- [ ] `ApiService` base + interceptor, error handling that surfaces
      `error.details`/`message` from the envelope
- [ ] `AuthService.login(name)`, `AuthService.wardenLogin(id, pin)`, `AuthService.logout()`
- [ ] `SplashScreen` → checks stored token → routes to role-select or home
- [ ] `RoleSelectScreen` (Visitor / Driver / Warden)

### 2. Visitor flow — maps to MVP criterion "visitor navigates gate → landmark"
- `lib/services/campus_service.dart` — `GET /campus/map`
- `lib/providers/campus_provider.dart` — cached `FutureProvider`
- `lib/widgets/campus_map_widget.dart` — Mapbox GL + GeoJSON zone overlays from
  `/campus/zones`
- Screens: `visitor_home_screen.dart`, `landmark_search_screen.dart`,
  `navigation_screen.dart`

#### Tasks checklist
- [ ] Render `/campus/map` zones/gates/landmarks on the Mapbox map (use `Zone.type` to color
      polygons: parking vs venue vs road)
- [ ] Landmark search → filters `Landmark[]` by name/category
- [ ] Tapping a landmark routes to `NavigationScreen` with a basic route overlay (turn-by-turn
      can be simplified to "draw a line to destination" for MVP)

### 3. Driver flow — maps to "driver gets nearest available zone"
- `lib/services/parking_service.dart` — `GET /parking/zones`, `GET /parking/nearest`
- `lib/services/location_service.dart` — Geolocator GPS stream
- `lib/providers/parking_provider.dart` — REST-hydrated, later socket-updated
- Screens: `driver_home_screen.dart`, `zone_list_screen.dart`, `route_to_zone_screen.dart`

#### Tasks checklist
- [ ] `ZoneStatusBadge` widget — green/amber/red for `AVAILABLE`/`LIMITED`/`FULL`
- [ ] `driver_home_screen.dart` — map with zone overlays colored by current status
- [ ] `zone_list_screen.dart` — list view, same data, sortable/filterable
- [ ] "Find nearest" button → `GET /parking/nearest?lat=&lng=&landmarkId=` →
      `route_to_zone_screen.dart`

### 4. Warden flow — maps to "warden marks zone full" + "warden broadcasts alert"
- Screens: `warden_dashboard_screen.dart`, `zone_update_screen.dart`,
  `broadcast_alert_screen.dart`, `incident_report_screen.dart`
- `lib/services/alert_service.dart` — `/alerts/*`, `/wardens/*`

#### Tasks checklist
- [ ] `zone_update_screen.dart` — one-tap `AVAILABLE`/`LIMITED`/`FULL` buttons →
      `PATCH /parking/zones/:id/status`
- [ ] `broadcast_alert_screen.dart` — form → `POST /alerts/broadcast`
- [ ] `incident_report_screen.dart` — form (type, description, tap-to-set location) →
      `POST /alerts/incident`
- [ ] `warden_dashboard_screen.dart` — `GET /wardens/deployment` (ADMIN-only; can be a
      lower-priority screen)

### 5. Real-time layer — wire in last
- `lib/services/socket_service.dart` — Socket.IO client, connects to `/parking` and
  `/alerts` namespaces
- Emits `subscribe:zones` / `subscribe:alerts` on connect
- On `zone:status_updated` → update `parkingProvider` → map recolors
- On `alert:broadcast` → `alertProvider` → `AlertBanner` widget shows on screen
- `lib/widgets/alert_banner.dart` — dismissible top banner

#### Tasks checklist
- [ ] Socket connects after login (needs JWT if the gateway requires auth — confirm with
      Dipo whether `/parking` and `/alerts` sockets are gated or public)
- [ ] `zone:status_updated` updates the same provider the REST `GET /parking/zones` call
      hydrates, so UI doesn't need separate state for "live" vs "initial"
- [ ] `alert:broadcast` → local push notification via `flutter_local_notifications`

---

## Coordination notes

- **Response envelope**: all backend responses are `{ success, message, data, error, timestamp }`.
  Tesals should unwrap `data` once in `ApiService`, not in every screen.
- **Auth mechanism**: Praise should confirm early whether the JWT is returned as a JSON field
  (`accessToken`) for the app to store, or set as an httpOnly cookie (fulltiime's pattern) —
  Flutter apps generally can't read httpOnly cookies, so for a mobile client returning
  `accessToken` in the response body is simpler. Document the final decision here once made.
- **WebSocket auth**: decide whether `/parking` and `/alerts` namespaces require a JWT on
  connect (pass via `socket.io` `auth` option) or are open — affects both Dipo's gateways and
  Tesals's `socket_service.dart`.
- **GeoJSON source of truth**: the `campus_geojson.json` asset (frontend) and the seeded
  `Zone.geojson` / `Gate` / `Landmark` records (backend, Praise's seed script) must use the
  same IDs and coordinates — coordinate directly on this rather than building both in
  isolation.
- **Running the backend locally**: `pnpm install` → `pnpm prisma:generate` →
  `pnpm prisma:migrate` (requires Postgres matching `DATABASE_URL` in `.env`) →
  `pnpm prisma:studio` (optional, for seed verification) → `pnpm start:dev`.
