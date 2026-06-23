# SCMS — System Architecture

> Smart Campus Mobility System · Kingdom Hack 3.0 · Smart City Innovation Track

## 1. High-Level System Diagram

```mermaid
graph TB
    subgraph Client["Flutter Mobile App"]
        Visitor["Visitor<br/>(anonymous)"]
        Driver["Driver<br/>(anonymous)"]
        Warden["Warden<br/>(authenticated)"]
        Admin["Admin<br/>(authenticated)"]
    end

    subgraph API["NestJS Backend — /api/v1"]
        Guard["Global Guard Chain<br/>Throttler → JwtAuth → Roles"]
        Auth["Auth Module<br/>login · me · change-password"]
        Users["Users Module<br/>ADMIN-only CRUD"]
        Campus["Campus Module<br/>map · zones · gates · landmarks"]
        Parking["Parking Module<br/>zones · status · nearest"]
        Alerts["Alerts Module<br/>broadcast · incidents · checkin"]
        Rec["Recommendations Module<br/>distance + occupancy heuristics"]
        WSParking["Parking Gateway<br/>/parking namespace"]
        WSAlerts["Alerts Gateway<br/>/alerts namespace"]
    end

    subgraph Data["Data Layer"]
        Prisma["Prisma ORM"]
        DB[("PostgreSQL — Neon")]
    end

    Visitor -- "HTTP REST (public)" --> Campus
    Visitor -. "WebSocket" .-> WSAlerts

    Driver -- "HTTP REST + JWT" --> Parking
    Driver -. "WebSocket" .-> WSParking

    Warden -- "HTTP REST + JWT" --> Auth
    Warden -- "HTTP REST + JWT" --> Parking
    Warden -- "HTTP REST + JWT" --> Alerts

    Admin -- "HTTP REST + JWT" --> Users
    Admin -- "HTTP REST + JWT" --> Alerts

    Guard -.protects.-> Users
    Guard -.protects.-> Parking
    Guard -.protects.-> Alerts

    Parking --> Rec
    Parking --> WSParking
    Alerts --> WSAlerts

    Auth --> Prisma
    Users --> Prisma
    Campus --> Prisma
    Parking --> Prisma
    Alerts --> Prisma
    Prisma --> DB
```

## 2. Real-Time Flow — Warden Marks a Zone Full

This is the core MVP demo flow: a warden updates a zone's status, and every connected
client sees the change within seconds, with no manual refresh.

```mermaid
sequenceDiagram
    participant W as Warden (Flutter)
    participant API as NestJS API
    participant DB as PostgreSQL
    participant GW as Parking Gateway
    participant D as Driver (Flutter)

    D->>GW: connect + subscribe:zones
    W->>API: PATCH /parking/zones/:id/status { status: "FULL" }
    API->>API: JwtAuthGuard + RolesGuard(WARDEN)
    API->>DB: INSERT ZoneStatus
    DB-->>API: new status row
    API->>GW: emitZoneStatusUpdated(zoneId, status, updatedAt)
    GW-->>D: zone:status_updated event
    D->>D: recolor zone on map (red)
    API-->>W: 200 { status }
```

## 3. Auth Flow

```mermaid
sequenceDiagram
    participant U as Warden/Admin (Flutter)
    participant API as NestJS API
    participant DB as PostgreSQL

    U->>API: POST /auth/login { email, password }
    API->>DB: findUnique(User by email)
    DB-->>API: user + hashed password
    API->>API: argon2.verify(password)
    API->>API: sign JWT { sub: id, role }
    API-->>U: { user, accessToken }
    U->>U: store accessToken (flutter_secure_storage)

    Note over U,API: Every subsequent request
    U->>API: GET /parking/zones<br/>Authorization: Bearer <token>
    API->>API: JwtAuthGuard validates token
    API->>API: RolesGuard checks @Roles(...)
    API-->>U: 200 { data }
```

## 4. Data Model

```mermaid
erDiagram
    User ||--o{ ZoneStatus : updates
    User ||--o{ BroadcastAlert : creates
    User ||--o{ Incident : reports
    User ||--o{ WardenCheckin : checks_in
    Zone ||--o{ ZoneStatus : has
    Zone ||--o{ WardenCheckin : located_at

    User {
        string id
        string name
        string email
        Role role
        string password
        datetime createdAt
    }
    Zone {
        string id
        string name
        string label
        int capacity
        ZoneType type
        json geojson
    }
    Gate {
        string id
        string name
        string label
        decimal latitude
        decimal longitude
        GateDirection direction
    }
    Landmark {
        string id
        string name
        LandmarkCategory category
        decimal latitude
        decimal longitude
        boolean accessibleRoute
    }
    ZoneStatus {
        string id
        ZoneStatusEnum status
        datetime updatedAt
    }
    BroadcastAlert {
        string id
        string message
        int radiusMeters
        datetime expiresAt
        boolean active
    }
    Incident {
        string id
        IncidentType type
        string description
        boolean resolved
    }
    WardenCheckin {
        string id
        datetime checkedIn
    }
```

## 5. Stack Summary

| Layer | Technology |
|-------|-----------|
| Mobile app | Flutter, Riverpod, GoRouter, Dio, Mapbox GL, Socket.IO client |
| API | NestJS 11, class-validator, Passport JWT, argon2 |
| Real-time | Socket.IO (`/parking`, `/alerts` namespaces) |
| Database | PostgreSQL (Neon, serverless) via Prisma ORM |
| Recommendation logic | Plain TypeScript heuristics (Haversine distance + occupancy-by-status scoring) — no separate ML service |

## 6. Key Design Decisions

- **No `VISITOR` role** — visitors and drivers are fully anonymous; only `WARDEN` and `ADMIN`
  have accounts, since they're vetted campus staff.
- **No public signup** — admin provisions warden accounts through `POST /users`.
- **Response envelope** — every API response is `{ success, message, data, error, timestamp }`,
  enforced globally via `TransformInterceptor` and `HttpExceptionFilter`.
- **ADMIN bypasses all role checks** — any route gated by `@Roles(WARDEN)` is also reachable
  by an `ADMIN` token.
- **JWT in response body, not a cookie** — Flutter can't read httpOnly cookies, so the access
  token is returned in the JSON body and stored client-side via `flutter_secure_storage`.
