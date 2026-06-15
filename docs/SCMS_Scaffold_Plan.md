# SCMS — Smart Campus Mobility System
## Scaffold Plan for Coding Agent
> Stack: NestJS (TypeScript) · Flutter (Dart) · FastAPI (Python/ML) · PostgreSQL · Prisma ORM · Socket.IO · Mapbox GL

---

## 1. Repository Structure

```
scms/
├── scms-backend/          # NestJS REST + WebSocket API
├── scms-app/              # Flutter mobile app
├── scms-ml/               # FastAPI ML microservice
└── docs/                  # This document + GeoJSON assets
```

---

## 2. Backend — NestJS (`scms-backend/`)

### 2.1 Folder Structure

```
scms-backend/
├── prisma/
│   ├── schema.prisma                  # All models defined here
│   └── seed.ts                        # Seed script: zones, gates, landmarks, warden accounts
│
├── src/
│   ├── main.ts                        # Bootstrap: enable CORS, Socket.IO adapter
│   ├── app.module.ts                  # Root module
│   │
│   ├── prisma/
│   │   ├── prisma.module.ts           # Global Prisma module
│   │   └── prisma.service.ts          # PrismaClient wrapper (extends PrismaClient, onModuleInit/Destroy)
│   │
│   ├── config/
│   │   └── configuration.ts           # Typed env config via @nestjs/config
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.controller.ts     # POST /auth/login, POST /auth/warden-login, GET /auth/me
│   │   │   ├── auth.service.ts        # Validate credentials, sign JWT
│   │   │   ├── jwt.strategy.ts        # Passport JWT strategy
│   │   │   ├── jwt-auth.guard.ts      # Guard for protected routes
│   │   │   └── dto/
│   │   │       ├── login.dto.ts
│   │   │       └── warden-login.dto.ts
│   │   │
│   │   ├── users/
│   │   │   ├── users.module.ts
│   │   │   ├── users.service.ts       # findById, findByPin, create
│   │   │   └── dto/
│   │   │       └── create-user.dto.ts
│   │   │
│   │   ├── campus/
│   │   │   ├── campus.module.ts
│   │   │   ├── campus.controller.ts   # GET /campus/map, /zones, /gates, /landmarks
│   │   │   ├── campus.service.ts      # Read campus data from Prisma
│   │   │   └── dto/
│   │   │       └── campus-map.dto.ts  # Bundled response shape
│   │   │
│   │   ├── parking/
│   │   │   ├── parking.module.ts
│   │   │   ├── parking.controller.ts  # GET /parking/zones, PATCH /parking/zones/:id/status, GET /parking/nearest
│   │   │   ├── parking.service.ts     # Zone status CRUD + nearest-zone logic (Haversine formula)
│   │   │   ├── parking.gateway.ts     # @WebSocketGateway('/parking') — emit zone:status_updated
│   │   │   └── dto/
│   │   │       ├── update-zone-status.dto.ts
│   │   │       └── nearest-zone-query.dto.ts
│   │   │
│   │   └── alerts/
│   │       ├── alerts.module.ts
│   │       ├── alerts.controller.ts   # POST /alerts/broadcast, POST /alerts/incident, GET /alerts/active, PATCH /alerts/incident/:id/resolve
│   │       ├── alerts.service.ts
│   │       ├── alerts.gateway.ts      # @WebSocketGateway('/alerts') — emit alert:broadcast
│   │       ├── warden.controller.ts   # GET /wardens/deployment, POST /wardens/checkin
│   │       └── dto/
│   │           ├── broadcast-alert.dto.ts
│   │           └── create-incident.dto.ts
│   │
│   └── common/
│       ├── decorators/
│       │   └── current-user.decorator.ts
│       ├── guards/
│       │   └── roles.guard.ts
│       └── interceptors/
│           └── transform.interceptor.ts   # Wrap all responses: { data, statusCode, timestamp }
│
├── .env.example
├── nest-cli.json
├── package.json
└── tsconfig.json
```

---

### 2.2 Key Dependencies (`package.json`)

```json
{
  "dependencies": {
    "@nestjs/common": "^10",
    "@nestjs/core": "^10",
    "@nestjs/platform-express": "^10",
    "@nestjs/websockets": "^10",
    "@nestjs/platform-socket.io": "^10",
    "@nestjs/jwt": "^10",
    "@nestjs/passport": "^10",
    "@nestjs/config": "^3",
    "@prisma/client": "^5",
    "passport": "^0.7",
    "passport-jwt": "^4",
    "socket.io": "^4",
    "class-validator": "^0.14",
    "class-transformer": "^0.5",
    "bcrypt": "^5"
  },
  "devDependencies": {
    "prisma": "^5",
    "@types/bcrypt": "^5",
    "@types/passport-jwt": "^4",
    "ts-node": "^10",
    "typescript": "^5"
  }
}
```

---

### 2.3 Prisma Schema (`prisma/schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  VISITOR
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
  role      Role     @default(VISITOR)
  pin       String?                        // bcrypt-hashed; wardens only
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
  geojson  Json                            // GeoJSON Polygon geometry

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
  id          String   @id @default(uuid())
  message     String
  radiusMeters Int
  centerLat   Decimal
  centerLng   Decimal
  createdBy   User     @relation(fields: [createdById], references: [id])
  createdById String
  expiresAt   DateTime
  active      Boolean  @default(true)
  createdAt   DateTime @default(now())
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

### 2.4 PrismaService (`src/prisma/prisma.service.ts`)

```typescript
// Extend PrismaClient; connect on module init, disconnect on destroy
// Mark as @Injectable() and register as @Global() module
// Inject into any service with: constructor(private prisma: PrismaService)
```

---

### 2.5 REST API Endpoints

#### Auth
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| POST | `/auth/login` | Public | Visitor login → JWT |
| POST | `/auth/warden-login` | Public | Warden ID + PIN → JWT |
| GET | `/auth/me` | JWT | Current user profile |

#### Campus
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| GET | `/campus/map` | Public | Full map bundle (zones + gates + landmarks) |
| GET | `/campus/zones` | Public | All zones as GeoJSON FeatureCollection |
| GET | `/campus/gates` | Public | All gates |
| GET | `/campus/landmarks` | Public | All landmarks |

#### Parking
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| GET | `/parking/zones` | JWT | All parking zones with current status |
| PATCH | `/parking/zones/:id/status` | WARDEN | Update zone status |
| GET | `/parking/nearest?lat=&lng=&landmarkId=` | JWT | Nearest available zone (calls ML service internally) |

#### Alerts
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| POST | `/alerts/broadcast` | WARDEN | Broadcast push alert |
| POST | `/alerts/incident` | WARDEN | Log incident |
| GET | `/alerts/active` | JWT | Active alerts |
| PATCH | `/alerts/incident/:id/resolve` | WARDEN | Resolve incident |

#### Wardens
| Method | Path | Access | Description |
|--------|------|--------|-------------|
| GET | `/wardens/deployment` | ADMIN | Active wardens + zone assignments |
| POST | `/wardens/checkin` | WARDEN | Check in at a zone |

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
| Server → Client | `alert:incident` | `{ type, location }` — wardens/admin only |
| Client → Server | `subscribe:alerts` | `{ lat, lng }` |

---

### 2.7 Environment Variables (`.env.example`)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/scms_db
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
PORT=3000
NODE_ENV=development
ML_SERVICE_URL=http://localhost:8000
ALLOWED_ORIGINS=http://localhost:3000,http://10.0.2.2:3000
```

---

## 3. ML Microservice — FastAPI (`scms-ml/`)

### 3.1 Purpose

The ML service sits between the NestJS backend and the intelligence layer. It is called internally by NestJS — the Flutter app never talks to it directly.

### 3.2 What It Does

| Feature | Description |
|---------|-------------|
| **Smart Parking Recommendation** | Given a driver's lat/lng and destination landmark, returns ranked parking zones — factoring in current occupancy, historical fill patterns, and walking distance to the landmark |
| **Crowd-Level ETA** | Given origin → destination + current zone occupancy data, returns estimated walking time with crowd multiplier (light / moderate / heavy) |
| **Crowd Density Prediction** | Given an event type and time-of-day, predicts expected crowd density per zone for the next 1–2 hours |
| **Incident Anomaly Detection** | Flags unusual spikes in zone occupancy updates or back-to-back incident reports from the same zone as anomalies — triggers an alert to ADMIN |

### 3.3 Folder Structure

```
scms-ml/
├── app/
│   ├── main.py                        # FastAPI entry, CORS, route registration
│   ├── routers/
│   │   ├── parking.py                 # POST /ml/parking/recommend
│   │   ├── navigation.py              # POST /ml/navigation/eta
│   │   ├── crowd.py                   # POST /ml/crowd/predict
│   │   └── anomaly.py                 # POST /ml/anomaly/detect
│   │
│   ├── models/
│   │   ├── parking_model.py           # Zone ranking logic (Haversine + occupancy weight)
│   │   ├── eta_model.py               # ETA = base_time × crowd_multiplier
│   │   ├── crowd_model.py             # Time-series zone density estimator
│   │   └── anomaly_model.py           # Z-score anomaly detection on zone update frequency
│   │
│   ├── schemas/
│   │   ├── parking_schema.py          # Pydantic request/response models
│   │   ├── navigation_schema.py
│   │   ├── crowd_schema.py
│   │   └── anomaly_schema.py
│   │
│   └── utils/
│       ├── geo.py                     # Haversine distance, bearing, bounding box helpers
│       └── data_loader.py             # Load campus GeoJSON for spatial calculations
│
├── requirements.txt
├── .env.example
└── Dockerfile
```

---

### 3.4 API Endpoints

#### `POST /ml/parking/recommend`
**Called by:** `parking.service.ts` → `GET /parking/nearest`

Request:
```json
{
  "driver_lat": 6.4654,
  "driver_lng": 3.4064,
  "destination_landmark_id": "uuid",
  "zone_statuses": [
    { "zone_id": "uuid", "status": "AVAILABLE", "capacity": 200, "current_count": 80, "lat": 6.465, "lng": 3.407 }
  ]
}
```
Response:
```json
{
  "recommended_zone_id": "uuid",
  "ranked_zones": [
    { "zone_id": "uuid", "score": 0.92, "walk_distance_m": 180, "occupancy_pct": 40 }
  ]
}
```

#### `POST /ml/navigation/eta`
**Called by:** NestJS navigation route

Request:
```json
{
  "origin": { "lat": 6.4654, "lng": 3.4064 },
  "destination": { "lat": 6.4660, "lng": 3.4071 },
  "crowd_level": "moderate"
}
```
Response:
```json
{
  "estimated_seconds": 420,
  "crowd_multiplier": 1.4,
  "crowd_level": "moderate"
}
```

#### `POST /ml/crowd/predict`
**Called by:** NestJS on event start (cron or manual trigger)

Request:
```json
{
  "event_type": "HOLY_GHOST_CONGRESS",
  "event_start_iso": "2025-10-10T18:00:00Z",
  "hours_ahead": 2
}
```
Response:
```json
{
  "predictions": [
    { "zone_id": "uuid", "predicted_density": "heavy", "confidence": 0.87 }
  ]
}
```

#### `POST /ml/anomaly/detect`
**Called by:** NestJS periodically (every 5 min) or on zone update

Request:
```json
{
  "zone_id": "uuid",
  "recent_update_timestamps": ["2025-10-10T18:00:00Z", "2025-10-10T18:00:45Z"]
}
```
Response:
```json
{
  "is_anomaly": true,
  "reason": "Update frequency 8× above baseline",
  "severity": "HIGH"
}
```

---

### 3.5 ML Approach (MVP — No Training Data Needed)

For the hackathon, all models use **rule-based + heuristic** logic that can be upgraded to trained models post-hackathon.

| Model | MVP Approach | Post-Hack Upgrade |
|-------|-------------|-------------------|
| Parking Recommendation | Weighted score: 60% distance + 40% occupancy | Collaborative filtering on historical park choices |
| ETA | Base walking speed (1.2 m/s) × crowd multiplier table | LSTM on real event crowd flow data |
| Crowd Prediction | Lookup table by event type + time band | Time-series forecasting (Prophet / LSTM) |
| Anomaly Detection | Z-score on update frequency per zone | Isolation Forest on multi-variate zone signals |

### 3.6 Dependencies (`requirements.txt`)

```
fastapi==0.111.0
uvicorn==0.30.0
pydantic==2.7.0
numpy==1.26.4
scipy==1.13.0          # Z-score for anomaly detection
python-dotenv==1.0.1
httpx==0.27.0          # If ML service needs to call back to NestJS
```

---

## 4. Frontend — Flutter (`scms-app/`)

### 4.1 Folder Structure

```
scms-app/
├── pubspec.yaml
├── lib/
│   ├── main.dart                          # App entry, theme, router setup
│   │
│   ├── core/
│   │   ├── constants.dart                 # API base URL, Mapbox token, zone colours
│   │   ├── theme.dart                     # Colour palette, text styles
│   │   ├── router.dart                    # GoRouter route definitions
│   │   └── di.dart                        # Service locator (get_it)
│   │
│   ├── models/
│   │   ├── user.dart
│   │   ├── zone.dart                      # Zone + ZoneStatus enum (AVAILABLE, LIMITED, FULL)
│   │   ├── gate.dart
│   │   ├── landmark.dart
│   │   ├── alert.dart
│   │   └── incident.dart
│   │
│   ├── services/
│   │   ├── api_service.dart               # Dio HTTP client + auth header interceptor
│   │   ├── auth_service.dart              # Login, warden login, JWT storage (flutter_secure_storage)
│   │   ├── campus_service.dart            # Fetch campus map bundle
│   │   ├── parking_service.dart           # Zone statuses, update status, nearest zone
│   │   ├── alert_service.dart             # Alerts, incidents
│   │   ├── socket_service.dart            # Socket.IO client (connect, subscribe, listen)
│   │   └── location_service.dart          # Geolocator GPS stream
│   │
│   ├── providers/                         # Riverpod state
│   │   ├── auth_provider.dart             # Auth state (current user, login, logout)
│   │   ├── campus_provider.dart           # Campus map data (cached FutureProvider)
│   │   ├── parking_provider.dart          # Zone statuses — REST hydrated + socket live-updated
│   │   └── alert_provider.dart            # Active alerts — socket live-updated
│   │
│   ├── screens/
│   │   ├── splash/
│   │   │   └── splash_screen.dart         # Auth check → route to login or home
│   │   │
│   │   ├── auth/
│   │   │   ├── role_select_screen.dart    # Visitor / Driver / Warden picker
│   │   │   ├── visitor_login_screen.dart  # Optional (guest access allowed)
│   │   │   └── warden_login_screen.dart   # Warden ID + PIN
│   │   │
│   │   ├── visitor/
│   │   │   ├── visitor_home_screen.dart   # Campus map + landmark search bar
│   │   │   ├── landmark_search_screen.dart
│   │   │   └── navigation_screen.dart     # Turn-by-turn overlay on Mapbox map
│   │   │
│   │   ├── driver/
│   │   │   ├── driver_home_screen.dart    # Map with parking zone overlays + status colours
│   │   │   ├── zone_list_screen.dart      # List view of zones with status badges
│   │   │   └── route_to_zone_screen.dart  # Routed path to recommended zone
│   │   │
│   │   └── warden/
│   │       ├── warden_dashboard_screen.dart
│   │       ├── zone_update_screen.dart    # One-tap AVAILABLE / LIMITED / FULL
│   │       ├── broadcast_alert_screen.dart
│   │       └── incident_report_screen.dart
│   │
│   └── widgets/
│       ├── campus_map_widget.dart         # Mapbox GL + GeoJSON zone overlays
│       ├── zone_status_badge.dart         # Green / Amber / Red chip
│       ├── alert_banner.dart              # Dismissable top-of-screen alert
│       ├── landmark_card.dart
│       └── warden_zone_tile.dart          # Zone row + one-tap status buttons
│
└── assets/
    ├── map/
    │   └── campus_geojson.json            # Hand-traced Redemption City GeoJSON
    └── icons/
```

---

### 4.2 Key Dependencies (`pubspec.yaml`)

```yaml
dependencies:
  flutter:
    sdk: flutter
  go_router: ^13.0.0
  flutter_riverpod: ^2.5.0
  riverpod_annotation: ^2.3.0
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

---

### 4.3 App Navigation (GoRouter)

```
/                            → SplashScreen
/role-select                 → RoleSelectScreen
/visitor
  /home                      → VisitorHomeScreen
  /search                    → LandmarkSearchScreen
  /navigate/:landmarkId      → NavigationScreen
/driver
  /home                      → DriverHomeScreen
  /zones                     → ZoneListScreen
  /route/:zoneId             → RouteToZoneScreen
/warden
  /login                     → WardenLoginScreen
  /dashboard                 → WardenDashboardScreen
  /zone-update               → ZoneUpdateScreen
  /broadcast                 → BroadcastAlertScreen
  /incident                  → IncidentReportScreen
```

---

### 4.4 Real-Time Flow

1. App launches → connects to `/parking` and `/alerts` Socket.IO namespaces
2. Emits `subscribe:zones` and `subscribe:alerts` with current GPS coords
3. `zone:status_updated` → `parkingProvider` updates → map zone recolours instantly
4. `alert:broadcast` → `alertProvider` adds alert → `AlertBanner` appears on screen

---

## 5. GeoJSON Campus Map (`assets/map/campus_geojson.json`)

Hand-trace from satellite imagery at **6.4654° N, 3.4064° E** using [geojson.io](https://geojson.io).

### Required Feature Layers

| Layer | Geometry | Required Properties |
|-------|----------|---------------------|
| Parking zones | Polygon | `id`, `name`, `label`, `capacity`, `type: "PARKING"` |
| Venue zones | Polygon | `id`, `name`, `type: "VENUE"` |
| Roads / paths | LineString | `id`, `name`, `type: "ROAD"`, `accessible: true/false` |
| Gates | Point | `id`, `name`, `direction: "ENTRY/EXIT/BOTH"` |
| Landmarks | Point | `id`, `name`, `category`, `accessible: true/false` |

---

## 6. Service Communication Map

```
Flutter App
    │
    ├──[REST + JWT]──────────────→ NestJS Backend (port 3000)
    │                                   │
    └──[Socket.IO]───────────────→      ├──[Prisma]──→ PostgreSQL
                                        │
                                        └──[HTTP]────→ FastAPI ML Service (port 8000)
```

The Flutter app **never** calls the ML service directly. NestJS proxies all ML calls internally.

---

## 7. MVP Success Criteria Mapping

| Hackathon Criterion | Implementation |
|---------------------|----------------|
| Visitor navigates gate → landmark | `NavigationScreen` + Mapbox directions + campus GeoJSON |
| Warden marks zone Full → map updates in <5s | `PATCH /parking/zones/:id/status` → `zone:status_updated` socket → `parkingProvider` → map recolour |
| Driver gets nearest available zone | `GET /parking/nearest` → NestJS calls `POST /ml/parking/recommend` → `RouteToZoneScreen` |
| Warden broadcasts alert → push notification | `POST /alerts/broadcast` → `alert:broadcast` socket → `flutter_local_notifications` |

---

## 8. Recommended Build Order

1. **DB + Prisma** — run `prisma migrate dev`, seed zones/gates/landmarks
2. **NestJS auth + campus endpoints** — login, JWT guard, campus map routes
3. **NestJS parking endpoints + WebSocket gateway** — zone status CRUD + socket emit
4. **NestJS alerts endpoints + gateway** — broadcast + incident
5. **FastAPI ML service** — `/recommend` and `/eta` endpoints (heuristic logic first)
6. **Flutter core** — API service, auth flow, Mapbox map with GeoJSON overlay
7. **Visitor flow** — landmark search + navigation screen
8. **Driver flow** — zone overlay + live colours + nearest zone route
9. **Warden flow** — zone update + broadcast + incident form
10. **End-to-end demo run** — test all 4 success criteria live

---

*SCMS · Kingdom Hack 3.0 · Smart City Innovation Track*
