# SCMS — Smart Campus Mobility System
## Scaffold Plan
> Stack: NestJS 11 (TypeScript) · Flutter (Dart) · PostgreSQL · Prisma ORM · Socket.IO · Mapbox GL

---

## 1. Repository Structure

```
scms/
├── backend/               # NestJS REST + WebSocket API
├── scms-app/              # Flutter mobile app
└── docs/                  # This document + team responsibilities
```

> The FastAPI ML microservice originally planned has been replaced by a plain TypeScript
> `recommendations` module inside the NestJS backend. No Python service needed.

---

## 2. Backend — NestJS (`backend/`)

### 2.1 Folder Structure

```
backend/
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│       └── 20260616222119_init_scms_schema/
│           └── migration.sql
│
├── generated/
│   └── prisma/            # Prisma Client output (gitignored)
│
└── src/
    ├── main.ts
    ├── app.module.ts
    ├── app.controller.ts  # GET /health (public)
    ├── app.service.ts
    │
    ├── prisma/
    │   ├── prisma.module.ts   # @Global()
    │   └── prisma.service.ts
    │
    ├── auth/
    │   ├── auth.module.ts
    │   ├── auth.controller.ts
    │   ├── auth.service.ts
    │   ├── strategies/
    │   │   └── jwt.strategy.ts
    │   ├── guards/
    │   │   ├── jwt-auth.guard.ts
    │   │   └── roles.guard.ts
    │   └── dto/
    │       ├── login.dto.ts
    │       └── change-password.dto.ts
    │
    ├── users/
    │   ├── users.module.ts
    │   ├── users.controller.ts
    │   ├── users.service.ts
    │   └── dto/
    │       └── create-user.dto.ts
    │
    ├── campus/
    │   ├── campus.module.ts
    │   ├── campus.controller.ts
    │   └── campus.service.ts
    │
    ├── parking/
    │   ├── parking.module.ts
    │   ├── parking.controller.ts
    │   ├── parking.service.ts
    │   ├── parking.gateway.ts
    │   └── dto/
    │       ├── update-zone-status.dto.ts
    │       └── nearest-zone-query.dto.ts
    │
    ├── alerts/
    │   ├── alerts.module.ts
    │   ├── alerts.controller.ts
    │   ├── alerts.service.ts
    │   ├── alerts.gateway.ts
    │   ├── warden.controller.ts
    │   └── dto/
    │       ├── broadcast-alert.dto.ts
    │       └── create-incident.dto.ts
    │
    ├── recommendations/
    │   ├── recommendations.module.ts
    │   ├── recommendations.service.ts
    │   └── utils/
    │       └── geo.util.ts
    │
    └── common/
        ├── constants/
        │   └── safe-user.constant.ts    # SafeUserSelect + SafeUser type
        ├── decorators/
        │   ├── public.decorator.ts      # @Public()
        │   ├── current-user.decorator.ts # @CurrentUser()
        │   └── roles.decorator.ts       # @Roles(Role.WARDEN)
        ├── filters/
        │   └── http-exception.filter.ts
        ├── interceptors/
        │   └── transform.interceptor.ts
        └── interfaces/
            └── request-with-user.interface.ts
```

---

### 2.2 Key Dependencies

```json
{
  "dependencies": {
    "@nestjs/common": "^11",
    "@nestjs/config": "^4",
    "@nestjs/core": "^11",
    "@nestjs/jwt": "^11",
    "@nestjs/passport": "^11",
    "@nestjs/platform-express": "^11",
    "@nestjs/schedule": "^6",
    "@nestjs/throttler": "^6",
    "@prisma/client": "^6",
    "argon2": "^0.44",
    "class-transformer": "^0.5",
    "class-validator": "^0.15",
    "compression": "^1",
    "cookie-parser": "^1",
    "passport": "^0.7",
    "passport-jwt": "^4"
  },
  "devDependencies": {
    "prisma": "^6",
    "tsc-alias": "^1",
    "tsx": "^4",
    "typescript": "^5"
  }
}
```

---

### 2.3 Prisma Schema (`prisma/schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  WARDEN
  ADMIN
}

enum ZoneType {
  PARKING
  VENUE
  ROAD
}

enum ZoneStatusEnum {
  AVAILABLE
  LIMITED
  FULL
}

enum GateDirection {
  ENTRY
  EXIT
  BOTH
}

enum LandmarkCategory {
  HALL
  CLINIC
  TOILET
  ADMIN
  FOOD
}

enum IncidentType {
  MEDICAL
  FIRE
  CROWD
  SECURITY
  OTHER
}

model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  role      Role     @default(WARDEN)
  password  String   // argon2-hashed
  createdAt DateTime @default(now())

  zoneStatuses    ZoneStatus[]
  broadcastAlerts BroadcastAlert[]
  incidents       Incident[]
  checkins        WardenCheckin[]
}

model Zone {
  id       String   @id @default(uuid())
  name     String
  label    String
  capacity Int
  type     ZoneType
  geojson  Json     // GeoJSON Polygon geometry

  statuses ZoneStatus[]
  checkins WardenCheckin[]
}

model Gate {
  id        String        @id @default(uuid())
  name      String
  label     String
  latitude  Decimal
  longitude Decimal
  direction GateDirection
}

model Landmark {
  id              String           @id @default(uuid())
  name            String
  category        LandmarkCategory
  latitude        Decimal
  longitude       Decimal
  accessibleRoute Boolean          @default(false)
}

model ZoneStatus {
  id          String         @id @default(uuid())
  zone        Zone           @relation(fields: [zoneId], references: [id])
  zoneId      String
  status      ZoneStatusEnum @default(AVAILABLE)
  updatedBy   User           @relation(fields: [updatedById], references: [id])
  updatedById String
  updatedAt   DateTime       @default(now()) @updatedAt
}

model BroadcastAlert {
  id           String   @id @default(uuid())
  message      String
  radiusMeters Int
  centerLat    Decimal
  centerLng    Decimal
  createdBy    User     @relation(fields: [createdById], references: [id])
  createdById  String
  expiresAt    DateTime
  active       Boolean  @default(true)
  createdAt    DateTime @default(now())
}

model Incident {
  id           String       @id @default(uuid())
  type         IncidentType
  description  String
  latitude     Decimal
  longitude    Decimal
  reportedBy   User         @relation(fields: [reportedById], references: [id])
  reportedById String
  timestamp    DateTime     @default(now())
  resolved     Boolean      @default(false)
}

model WardenCheckin {
  id        String   @id @default(uuid())
  warden    User     @relation(fields: [wardenId], references: [id])
  wardenId  String
  zone      Zone     @relation(fields: [zoneId], references: [id])
  zoneId    String
  checkedIn DateTime @default(now())
}
```

---

### 2.4 Response Envelope

Every response — success or error — follows the same shape:

**Success** (`TransformInterceptor`):
```json
{
  "success": true,
  "message": "Login successful",
  "data": { "user": {}, "accessToken": "..." },
  "error": null,
  "timestamp": "2026-06-16T..."
}
```

**Error** (`HttpExceptionFilter`):
```json
{
  "success": false,
  "message": "Invalid credentials",
  "data": null,
  "error": { "statusCode": 401, "type": "UnauthorizedException", "details": null, "path": "/api/v1/auth/login" },
  "timestamp": "2026-06-16T..."
}
```

Controllers return `{ message?, data? }` — the interceptor wraps it. Never return a raw object.

---

### 2.5 REST API Endpoints

All routes are prefixed `/api/v1/`.

#### Auth ✅
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `POST` | `/auth/login` | Public | `{ email, password }` → `{ user, accessToken }` |
| `GET` | `/auth/me` | JWT | Current user profile (no password field) |
| `PATCH` | `/auth/change-password` | JWT | `{ currentPassword, newPassword }` |

#### Users ✅ (ADMIN only)
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `POST` | `/users` | ADMIN | Create a warden or admin account |
| `GET` | `/users` | ADMIN | List all users |
| `GET` | `/users/:id` | ADMIN | Get a specific user |
| `DELETE` | `/users/:id` | ADMIN | Remove a user |

#### Campus ⬜
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/campus/map` | Public | Full map bundle (zones + gates + landmarks) |
| `GET` | `/campus/zones` | Public | All zones as GeoJSON FeatureCollection |
| `GET` | `/campus/gates` | Public | All gates |
| `GET` | `/campus/landmarks` | Public | All landmarks |

#### Parking ⬜
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `GET` | `/parking/zones` | JWT | All parking zones with current status |
| `PATCH` | `/parking/zones/:id/status` | WARDEN | Update zone status + emit socket event |
| `GET` | `/parking/nearest?lat=&lng=` | JWT | Nearest available zone (heuristic scoring) |

#### Alerts ⬜
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| `POST` | `/alerts/broadcast` | WARDEN | Broadcast alert + emit socket event |
| `POST` | `/alerts/incident` | WARDEN | Log incident + emit socket event |
| `GET` | `/alerts/active` | JWT | Active alerts (not expired) |
| `PATCH` | `/alerts/incident/:id/resolve` | WARDEN | Resolve incident |
| `GET` | `/wardens/deployment` | ADMIN | Active wardens + zone assignments |
| `POST` | `/wardens/checkin` | WARDEN | Check in at a zone |

---

### 2.6 WebSocket Events

#### Namespace: `/parking`
| Direction | Event | Payload |
|-----------|-------|---------|
| Server → Client | `zone:status_updated` | `{ zoneId, status, updatedAt }` |
| Client → Server | `subscribe:zones` | `{}` |

#### Namespace: `/alerts`
| Direction | Event | Payload |
|-----------|-------|---------|
| Server → Client | `alert:broadcast` | `{ id, message, expiresAt }` |
| Server → Client | `alert:incident` | `{ type, location }` |
| Client → Server | `subscribe:alerts` | `{ lat, lng }` |

---

### 2.7 Environment Variables (`.env.example`)

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@host:5432/scms_db
JWT_SECRET=change-this-in-production
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:3000
```

---

### 2.8 Guard Chain

Registered globally in `app.module.ts` via `APP_GUARD` in this order:

```
ThrottlerGuard → JwtAuthGuard → RolesGuard
```

- Routes marked `@Public()` skip JWT verification entirely
- All other routes require a valid Bearer token
- Routes marked `@Roles(Role.WARDEN)` require that role — ADMIN always passes
- Routes with no `@Roles(...)` decorator pass any authenticated user through

---

## 3. Recommendations — TypeScript Heuristics (`src/recommendations/`)

All "ML" logic lives here as deterministic scoring functions. No external service.

| Function | Logic |
|----------|-------|
| `recommendParkingZone` | score = `0.6 × (1 − dist) + 0.4 × (1 − occupancy)` |
| `estimateEta` | base 1.2 m/s × crowd multiplier (`light: 1.0, moderate: 1.4, heavy: 1.9`) |
| `predictCrowd` | lookup table by event type + time band |
| `detectAnomaly` | Z-score on zone update frequency; return `{ isAnomaly, reason, severity }` |

---

## 4. Frontend — Flutter (`scms-app/`)

### 4.1 Key Dependencies (`pubspec.yaml`)

```yaml
dependencies:
  go_router: ^13.0.0
  flutter_riverpod: ^2.5.0
  dio: ^5.4.0
  socket_io_client: ^2.0.3
  mapbox_maps_flutter: ^2.0.0
  geolocator: ^12.0.0
  flutter_secure_storage: ^9.0.0
  flutter_local_notifications: ^17.0.0
  freezed_annotation: ^2.4.0
  json_annotation: ^4.9.0

dev_dependencies:
  build_runner: ^2.4.0
  freezed: ^2.4.0
  json_serializable: ^6.8.0
  riverpod_generator: ^2.4.0
```

### 4.2 Auth Flow

1. App launches → `SplashScreen` checks `flutter_secure_storage` for token
2. No token → `RoleSelectScreen` (Visitor = anonymous, Staff = login)
3. Staff picks login → `LoginScreen` — email + password form → `POST /auth/login`
4. On success → store `accessToken`, decode role from JWT, route to appropriate home screen
5. All subsequent Dio requests attach `Authorization: Bearer <token>` automatically

### 4.3 App Navigation (GoRouter)

```
/                            → SplashScreen
/role-select                 → RoleSelectScreen
/login                       → LoginScreen (warden + admin)
/visitor
  /home                      → VisitorHomeScreen
  /search                    → LandmarkSearchScreen
  /navigate/:landmarkId      → NavigationScreen
/driver
  /home                      → DriverHomeScreen
  /zones                     → ZoneListScreen
  /route/:zoneId             → RouteToZoneScreen
/warden
  /dashboard                 → WardenDashboardScreen
  /zone-update               → ZoneUpdateScreen
  /broadcast                 → BroadcastAlertScreen
  /incident                  → IncidentReportScreen
```

### 4.4 Real-Time Flow

1. App connects to `/parking` and `/alerts` Socket.IO namespaces after login
2. Emits `subscribe:zones` and `subscribe:alerts`
3. `zone:status_updated` → `parkingProvider` updates → map zone recolours instantly
4. `alert:broadcast` → `alertProvider` adds alert → `AlertBanner` + push notification

---

## 5. Campus Coordinates

Campus center: **6.8259° N, 3.4628° E** (Redemption City, Lagos-Ibadan Expressway, Ogun State)

All zone/gate/landmark coordinates in the seed script are approximate placeholders around
this confirmed location. No manual GeoJSON tracing required — data is fetched from the
database via `GET /campus/map`.

---

## 6. MVP Success Criteria

| Hackathon Criterion | Implementation |
|---------------------|----------------|
| Visitor navigates gate → landmark | `NavigationScreen` + Mapbox + `/campus/map` data |
| Warden marks zone Full → map updates in <5s | `PATCH /parking/zones/:id/status` → `zone:status_updated` socket → `parkingProvider` → recolour |
| Driver gets nearest available zone | `GET /parking/nearest` → `RecommendationsService` → `RouteToZoneScreen` |
| Warden broadcasts alert → push notification | `POST /alerts/broadcast` → `alert:broadcast` socket → `flutter_local_notifications` |

---

## 7. Build Order

1. ✅ DB + Prisma — schema migrated, seed data in Neon
2. ✅ Auth module — login, JWT guard, change-password
3. ✅ Users module — CRUD (ADMIN only)
4. ⬜ Campus module — map bundle endpoints
5. ⬜ Parking module — zone status CRUD + WebSocket gateway
6. ⬜ Alerts module — broadcast + incident + warden checkin
7. ⬜ Recommendations module — heuristic scoring functions
8. ⬜ Flutter core — API service, auth flow, Mapbox map
9. ⬜ Flutter visitor flow — landmark search + navigation
10. ⬜ Flutter driver flow — zone overlay + nearest zone
11. ⬜ Flutter warden flow — zone update + broadcast + incident
12. ⬜ Flutter real-time layer — Socket.IO integration
13. ⬜ End-to-end demo run

---

*SCMS · Kingdom Hack 3.0 · Smart City Innovation Track*
