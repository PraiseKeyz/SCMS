# SCMS — Team Responsibilities & Task Breakdown

> Companion to [`SCMS_Scaffold_Plan.md`](./SCMS_Scaffold_Plan.md). That document defines the
> overall architecture, Prisma schema, and API contracts — this document assigns ownership of
> each piece to a specific person and breaks each module into concrete tasks.

## Team

| Person | Area | Modules owned |
|--------|------|----------------|
| **Praise** | Backend — Auth, Users, Campus | `auth/`, `users/`, `campus/`, seed script |
| **Dipo** | Backend — Parking, Alerts, Real-time, Recommendations | `parking/`, `alerts/`, `recommendations/`, WebSocket gateways |
| **Tesals** | Frontend — Flutter app | Entire `scms-app/` |

---

## Already in place (shared foundation)

Both backend devs build on top of this — no need to redo any of it:

- `src/main.ts` — global `api` prefix, URI versioning (`/api/v1/...`), compression,
  cookie-parser, global `ValidationPipe`, global `HttpExceptionFilter` +
  `TransformInterceptor`, CORS allowlist
- `src/common/filters/http-exception.filter.ts` — every error returns
  `{ success: false, message, data: null, error: { statusCode, type, details, path }, timestamp }`
- `src/common/interceptors/transform.interceptor.ts` — every success response is wrapped as
  `{ success: true, message, data, error: null, timestamp }`.
  **Controllers/services must return `{ message?, data? }`** — the interceptor reads those keys.
- `src/common/decorators/public.decorator.ts` — `@Public()` + `IS_PUBLIC_KEY`
- `src/common/decorators/current-user.decorator.ts` — `@CurrentUser()` param decorator
- `src/common/decorators/roles.decorator.ts` — `@Roles(Role.WARDEN)` etc.
- `src/common/constants/safe-user.constant.ts` — `SafeUserSelect` (id, name, email, role,
  createdAt — **excludes password**) + `SafeUser` type
- `src/app.module.ts` — `ConfigModule`, `ScheduleModule`, `ThrottlerModule` (global rate
  limit), global `APP_GUARD` chain: `ThrottlerGuard → JwtAuthGuard → RolesGuard`
- `src/prisma/` — global `PrismaModule` + `PrismaService` (connect/disconnect lifecycle)
- `prisma/schema.prisma` — all models defined. **Confirmed design decisions:**
  - `Role` enum has only `WARDEN` and `ADMIN` — no `VISITOR` role
  - `User.email` is unique — used as the login identifier
  - `User.password` is required (argon2-hashed) — every user in the system is staff
  - Visitors are **anonymous** — no login, no `User` record; all public routes are open
  - `ADMIN` passes every role check automatically — no need to list it on guarded routes
- `tsconfig.json` — `@/*` path alias maps to `src/*`; ESM/nodenext module resolution
- `.env` / `.env.example` — `PORT`, `DATABASE_URL`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `FRONTEND_URL`
- **Seed script** (`prisma/seed.ts`) — already run. See credentials below.

### Seed credentials (dev only)

| Role | Email | Password |
|------|-------|----------|
| WARDEN | `alpha@scms.dev` | `Warden@123` |
| WARDEN | `beta@scms.dev` | `Warden@456` |
| ADMIN | `admin@scms.dev` | `Admin@9999` |

Re-run anytime with `pnpm prisma:seed` (it wipes and re-seeds).

---

## Praise — Auth, Users, Campus

### 1. Auth module (`src/auth/`) ✅ COMPLETE

All auth endpoints are implemented and building cleanly.

#### Endpoints

| Method | Path | Access | Request body | Response `data` |
|--------|------|--------|--------------|-----------------|
| `POST` | `/auth/login` | `@Public()` | `{ email, password }` | `{ user: SafeUser, accessToken }` |
| `GET` | `/auth/me` | JWT | — | `{ user: SafeUser }` |
| `PATCH` | `/auth/change-password` | JWT | `{ currentPassword, newPassword }` | — |

**Notes:**
- Single login endpoint for both WARDEN and ADMIN — role is encoded in the JWT payload
- `accessToken` is returned in the **response body** (not a cookie) — Flutter reads it and
  stores via `flutter_secure_storage`, then sends as `Authorization: Bearer <token>`
- `ADMIN` passes all `@Roles(...)` checks automatically — no need to add `Role.ADMIN` to
  every guard decorator

#### Files
- `auth.module.ts`, `auth.controller.ts`, `auth.service.ts`
- `strategies/jwt.strategy.ts` — Bearer token only (no cookie extractor)
- `guards/jwt-auth.guard.ts` — extends `AuthGuard('jwt')`, honours `@Public()`
- `guards/roles.guard.ts` — checks `@Roles(...)` metadata; ADMIN always passes
- `dto/login.dto.ts` — `@IsEmail() email`, `@IsString() password`
- `dto/change-password.dto.ts` — `currentPassword`, `@MinLength(8) newPassword`

---

### 2. Users module (`src/users/`) ✅ COMPLETE

All user management endpoints are implemented. All routes are ADMIN-only.

#### Endpoints

| Method | Path | Access | Request body | Response `data` |
|--------|------|--------|--------------|-----------------|
| `POST` | `/users` | `@Roles(ADMIN)` | `{ name, email, role, password }` | `{ user: SafeUser }` |
| `GET` | `/users` | `@Roles(ADMIN)` | — | `{ users: SafeUser[] }` |
| `GET` | `/users/:id` | `@Roles(ADMIN)` | — | `{ user: SafeUser }` |
| `DELETE` | `/users/:id` | `@Roles(ADMIN)` | — | — |

**Notes:**
- No public registration — admin creates all warden/admin accounts
- `password` min 8 characters; hashed with argon2 before storage
- `SafeUser` never includes the `password` field

#### Files
- `users.module.ts`, `users.controller.ts`, `users.service.ts`
- `dto/create-user.dto.ts` — `name`, `@IsEmail() email`, `@IsEnum(Role) role`,
  `@MinLength(8) password`

---

### 3. Campus module (`src/campus/`) ⬜ TODO

- `campus.module.ts`, `campus.controller.ts`, `campus.service.ts`

#### Endpoints

| Method | Path | Access | Response `data` |
|--------|------|--------|-----------------|
| `GET` | `/campus/map` | `@Public()` | `{ zones: GeoJSON.FeatureCollection, gates: Gate[], landmarks: Landmark[] }` |
| `GET` | `/campus/zones` | `@Public()` | `GeoJSON.FeatureCollection` (each zone's `geojson` + `id`, `name`, `label`, `capacity`, `type` in `properties`) |
| `GET` | `/campus/gates` | `@Public()` | `Gate[]` |
| `GET` | `/campus/landmarks` | `@Public()` | `Landmark[]` |

#### Tasks checklist
- [ ] `CampusService.getMapBundle()` — single Prisma query per table, assembled into one object
- [ ] `CampusService.getZonesAsGeoJSON()` — map `Zone.geojson` + metadata into a `FeatureCollection`
- [ ] Mark all four routes `@Public()`
- [ ] Register `CampusModule` in `app.module.ts`

---

### 4. Seed script (`prisma/seed.ts`) ✅ COMPLETE

Already seeded — 3 users, 5 zones, 3 gates, 6 landmarks, initial zone statuses.
Re-run with `pnpm prisma:seed`.

---

## Dipo — Parking, Alerts, Real-time, Recommendations

### 1. Parking module (`src/parking/`) ⬜ TODO

- `parking.module.ts`, `parking.controller.ts`, `parking.service.ts`, `parking.gateway.ts`
- `dto/update-zone-status.dto.ts`, `dto/nearest-zone-query.dto.ts`

#### Endpoints

| Method | Path | Access | Request | Response `data` |
|--------|------|--------|---------|-----------------|
| `GET` | `/parking/zones` | JWT (any role) | — | `Zone[]` each with its latest `ZoneStatus` |
| `PATCH` | `/parking/zones/:id/status` | `@Roles(WARDEN)` | `{ status }` | updated `ZoneStatus`; also emits `zone:status_updated` on `/parking` socket namespace |
| `GET` | `/parking/nearest?lat=&lng=` | JWT | query params | `{ recommendedZoneId, rankedZones }` |

#### Tasks checklist
- [ ] `ParkingService.getZonesWithStatus()` — latest `ZoneStatus` per zone (order by `updatedAt desc`)
- [ ] `ParkingService.updateZoneStatus(zoneId, status, updatedById)` — creates a new `ZoneStatus`
      row then calls `ParkingGateway.emitZoneStatusUpdated(...)`
- [ ] `UpdateZoneStatusDto` — `status` validated as `@IsEnum(ZoneStatusEnum)`
- [ ] `NearestZoneQueryDto` — `lat`, `lng` as `@Type(() => Number) @IsNumber()`
- [ ] `ParkingGateway` (`@WebSocketGateway({ namespace: '/parking' })`):
  - `subscribe:zones` client → server handler
  - `emitZoneStatusUpdated({ zoneId, status, updatedAt })` broadcast
- [ ] `GET /parking/nearest` calls `RecommendationsService.recommendParkingZone(...)`

---

### 2. Alerts module (`src/alerts/`) ⬜ TODO

- `alerts.module.ts`, `alerts.controller.ts`, `alerts.service.ts`, `alerts.gateway.ts`,
  `warden.controller.ts`
- `dto/broadcast-alert.dto.ts`, `dto/create-incident.dto.ts`

#### Endpoints

| Method | Path | Access | Request body | Response `data` |
|--------|------|--------|--------------|-----------------|
| `POST` | `/alerts/broadcast` | `@Roles(WARDEN)` | `{ message, radiusMeters, centerLat, centerLng, expiresAt }` | created `BroadcastAlert`; emits `alert:broadcast` |
| `POST` | `/alerts/incident` | `@Roles(WARDEN)` | `{ type, description, latitude, longitude }` | created `Incident`; emits `alert:incident` |
| `GET` | `/alerts/active` | JWT | — | `BroadcastAlert[]` where `active: true AND expiresAt > now` |
| `PATCH` | `/alerts/incident/:id/resolve` | `@Roles(WARDEN)` | — | updated `Incident` |
| `GET` | `/wardens/deployment` | `@Roles(ADMIN)` | — | wardens + their latest `WardenCheckin` |
| `POST` | `/wardens/checkin` | `@Roles(WARDEN)` | `{ zoneId }` | created `WardenCheckin` |

#### Tasks checklist
- [ ] `AlertsService.broadcast(dto, createdById)` — persist + emit
- [ ] `AlertsService.createIncident(dto, reportedById)` — persist + emit
- [ ] `AlertsService.getActiveAlerts()` — filter `active: true AND expiresAt > now()`
- [ ] `AlertsService.resolveIncident(id)`
- [ ] `AlertsGateway` (`@WebSocketGateway({ namespace: '/alerts' })`):
  - `subscribe:alerts` handler
  - `emitBroadcast(alert)` → `alert:broadcast`
  - `emitIncident(incident)` → `alert:incident`
- [ ] `WardenController` — separate controller in the same alerts module
- [ ] `WardenService.checkin(wardenId, zoneId)` and `getDeployment()`

---

### 3. Recommendations module (`src/recommendations/`) ⬜ TODO

Plain TypeScript heuristics — no Python, no ML service.

- `recommendations.module.ts`, `recommendations.service.ts`
- `utils/geo.util.ts`

#### Tasks checklist
- [ ] `geo.util.ts`: `haversineDistanceMeters(a: {lat,lng}, b: {lat,lng}): number`
- [ ] `RecommendationsService.recommendParkingZone({ driverLat, driverLng, zones })`:
  - score = `0.6 × (1 − normalizedDistance) + 0.4 × (1 − occupancyRatio)`
  - return `{ recommendedZoneId, rankedZones: [{ zoneId, score, walkDistanceM, occupancyPct }] }`
- [ ] `RecommendationsService.estimateEta({ origin, destination, crowdLevel })`:
  - base speed 1.2 m/s × crowd multiplier (`light: 1.0, moderate: 1.4, heavy: 1.9`)
- [ ] `RecommendationsService.predictCrowd({ eventType, hoursAhead })` — lookup table by
      event type + time band
- [ ] `RecommendationsService.detectAnomaly({ zoneId, recentUpdateTimestamps })` — Z-score
      on update frequency; return `{ isAnomaly, reason, severity }`

### Cross-dependency with Praise
- `@Roles(Role.WARDEN)` / `@Roles(Role.ADMIN)` guards and `JwtAuthGuard` are **already in
  place globally** — no setup needed on your end. All protected routes just work.
- Use `@CurrentUser() user: SafeUser` from `src/common/decorators/current-user.decorator.ts`
  to get the logged-in user in any controller.

---

## Tesals — Flutter App (`scms-app/`)

Build in this order so each stage produces something demoable even if later stages slip.

### 1. Core shell
- `lib/core/constants.dart` — API base URL (`http://<host>:3000/api/v1`), Mapbox token
- `lib/core/theme.dart`, `lib/core/router.dart` (GoRouter), `lib/core/di.dart` (get_it)
- `lib/services/api_service.dart` — Dio client with two interceptors:
  1. **Request** — attach `Authorization: Bearer <token>` if token exists in storage
  2. **Response** — unwrap the `{ success, message, data, error }` envelope; on
     `success: false` throw a typed error using `error.message`
- `lib/services/auth_service.dart` — calls `POST /auth/login` with `{ email, password }`,
  stores returned `accessToken` via `flutter_secure_storage`
- `lib/providers/auth_provider.dart` — Riverpod auth state

#### Tasks checklist
- [ ] Models: `user.dart`, `zone.dart`, `gate.dart`, `landmark.dart`, `alert.dart`,
      `incident.dart` — match Prisma field names exactly
- [ ] `AuthService.login(email, password)` → `POST /auth/login` → store `accessToken`
- [ ] `AuthService.logout()` — clear token, redirect to role select
- [ ] `SplashScreen` — check stored token: valid → route to home, else → role select
- [ ] `RoleSelectScreen` — **Visitor** (anonymous, go straight to map) and **Staff** (go to
      login screen with email + password fields)
- [ ] `LoginScreen` — single screen for both wardens and admin (role is determined from the
      JWT after login, not chosen upfront)

### 2. Visitor flow
- `lib/services/campus_service.dart` — `GET /campus/map`
- `lib/providers/campus_provider.dart` — cached `FutureProvider`
- `lib/widgets/campus_map_widget.dart` — Mapbox GL + GeoJSON zone overlays

#### Tasks checklist
- [ ] Render `/campus/map` zones/gates/landmarks on the Mapbox map (use `Zone.type` to
      color polygons: parking vs venue vs road)
- [ ] Landmark search → filters `Landmark[]` by name/category
- [ ] Tapping a landmark → `NavigationScreen` with route overlay

### 3. Driver flow
- `lib/services/parking_service.dart` — `GET /parking/zones`, `GET /parking/nearest`
- `lib/services/location_service.dart` — Geolocator GPS stream

#### Tasks checklist
- [ ] `ZoneStatusBadge` widget — green/amber/red for `AVAILABLE`/`LIMITED`/`FULL`
- [ ] `DriverHomeScreen` — map with zone overlays colored by current status
- [ ] `ZoneListScreen` — list view with status badges
- [ ] "Find nearest" button → `GET /parking/nearest?lat=&lng=` → `RouteToZoneScreen`

### 4. Warden flow
- Screens: `warden_dashboard_screen.dart`, `zone_update_screen.dart`,
  `broadcast_alert_screen.dart`, `incident_report_screen.dart`
- `lib/services/alert_service.dart`

#### Tasks checklist
- [ ] `ZoneUpdateScreen` — one-tap `AVAILABLE`/`LIMITED`/`FULL` → `PATCH /parking/zones/:id/status`
- [ ] `BroadcastAlertScreen` — form → `POST /alerts/broadcast`
- [ ] `IncidentReportScreen` — form → `POST /alerts/incident`
- [ ] `WardenDashboardScreen` — `GET /wardens/deployment` (admin only; lower priority)

### 5. Real-time layer
- `lib/services/socket_service.dart` — Socket.IO client connecting to `/parking` and `/alerts`

#### Tasks checklist
- [ ] Emit `subscribe:zones` / `subscribe:alerts` on connect
- [ ] `zone:status_updated` → update `parkingProvider` → map recolors
- [ ] `alert:broadcast` → `alertProvider` → `AlertBanner` widget
- [ ] `alert:broadcast` → `flutter_local_notifications` push notification
- [ ] Confirm with Dipo whether sockets require JWT on connect (pass via `socket.io` `auth`
      option) or are public

---

## Coordination notes

- **Response envelope**: all backend responses are `{ success, message, data, error, timestamp }`.
  Tesals should unwrap `data` once in `ApiService`, not in every screen.
- **Auth**: JWT is returned as `accessToken` in the response body. Flutter stores it via
  `flutter_secure_storage` and sends it as `Authorization: Bearer <token>` on every request.
- **No ML microservice**: all recommendation logic lives in `src/recommendations/` inside the
  NestJS backend. Dipo owns it.
- **Running the backend locally**: `pnpm install` → `pnpm prisma:generate` →
  `pnpm prisma:migrate` → `pnpm prisma:seed` → `pnpm start:dev`
- **Database**: Neon PostgreSQL (cloud). `DATABASE_URL` is in `.env` — share it with Dipo.
