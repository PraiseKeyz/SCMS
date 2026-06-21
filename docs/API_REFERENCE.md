# SCMS Backend — API Reference for Frontend Integration

> For Tesals (Flutter). This documents the **actual, current state** of the backend — every
> endpoint listed here is implemented, builds cleanly, and is ready to call.
>
> Base URL: `http://<host>:3000/api/v1`
> (`<host>` = `localhoste)

---

## 1. Response Envelope

**Every** response, success or failure, has this shape — never expect a bare object back:

```json
{
  "success": true,
  "message": "Login successful",
  "data": { "...": "..." },
  "error": null,
  "timestamp": "2026-06-17T10:00:00.000Z"
}
```

On failure:

```json
{
  "success": false,
  "message": "Invalid credentials",
  "data": null,
  "error": {
    "statusCode": 401,
    "type": "UnauthorizedException",
    "details": "Invalid credentials",
    "path": "/api/v1/auth/login"
  },
  "timestamp": "2026-06-17T10:00:00.000Z"
}
```

**Build your Dio response interceptor to unwrap `data` once** and throw using `error.message`
on `success: false`. Every screen should only ever see `data`, never the envelope.

---

## 2. Auth

JWT is returned as `accessToken` in the response body — **not** a cookie (Flutter can't read
httpOnly cookies). Store it with `flutter_secure_storage` and attach it to every subsequent
request as `Authorization: Bearer <token>`.

### `POST /auth/login` — public

```json
// Request
{ "email": "alpha@scms.dev", "password": "Warden@123" }
```

```json
// Response data
{
  "user": { "id": "uuid", "name": "Warden Alpha", "email": "alpha@scms.dev", "role": "WARDEN", "createdAt": "..." },
  "accessToken": "eyJhbGciOi..."
}
```

Throws `401` on wrong email/password.

### `GET /auth/me` — requires JWT

No body. Returns `{ user }` (same shape as above, no password field ever included).

### `PATCH /auth/change-password` — requires JWT

```json
{ "currentPassword": "Warden@123", "newPassword": "NewPass@456" }
```

`newPassword` must be 8+ characters. Throws `401` if `currentPassword` is wrong.

---

## 3. Users (ADMIN only — not for general app use)

These exist for an admin management screen, not the regular driver/warden flow. Every route
below requires the JWT to belong to an `ADMIN` user — a `WARDEN` token gets `403`.

| Method | Path | Body | Response `data` |
|--------|------|------|-----------------|
| `POST` | `/users` | `{ name, email, role: "WARDEN"\|"ADMIN", password }` (password 8+ chars) | `{ user }` |
| `GET` | `/users` | — | `{ users: [...] }` |
| `GET` | `/users/:id` | — | `{ user }` |
| `DELETE` | `/users/:id` | — | — |

There is **no public signup**. Wardens are provisioned by an admin through this module.

---

## 4. Parking

### `GET /parking/zones` — requires JWT (any role)

Returns every zone with its latest status.

```json
// Response data
{
  "zones": [
    {
      "id": "uuid",
      "name": "Main Car Park",
      "label": "P-A",
      "capacity": 500,
      "type": "PARKING",          // PARKING | VENUE | ROAD
      "geojson": { "type": "Polygon", "coordinates": [[[lng, lat], ...]] },
      "status": "AVAILABLE",      // AVAILABLE | LIMITED | FULL
      "statusUpdatedAt": "2026-06-17T10:00:00.000Z"
    }
  ]
}
```

> **Note:** `geojson.coordinates` is `[longitude, latitude]` order (GeoJSON standard) — flip
> when feeding into Mapbox if it expects `LatLng(lat, lng)`.

### `PATCH /parking/zones/:id/status` — requires `@Roles(WARDEN)` (ADMIN also passes)

```json
{ "status": "FULL" }  // AVAILABLE | LIMITED | FULL
```

Response `data`: `{ status: ZoneStatus }` (the newly created status row). Also emits
`zone:status_updated` on the `/parking` socket namespace — see §6.

### `GET /parking/nearest?lat=&lng=` — requires JWT

Query params `lat`, `lng` (numbers). Only considers `PARKING`-type zones; ranks by a 60%
distance / 40% occupancy-by-status heuristic.

```json
// Response data
{
  "recommendedZoneId": "uuid",
  "rankedZones": [
    { "zoneId": "uuid", "score": 0.842, "walkDistanceM": 180, "occupancyPct": 15 }
  ]
}
```

`recommendedZoneId` is `null` if there are no parking zones at all. `FULL` zones are
deprioritized but still returned as a fallback if every zone is full.

---

## 5. Alerts & Wardens

### `POST /alerts/broadcast` — requires `@Roles(WARDEN)`

```json
{
  "message": "Flooding near Gate 2, use Gate 1",
  "radiusMeters": 300,
  "centerLat": 6.8271,
  "centerLng": 3.4650,
  "expiresAt": "2026-06-17T18:00:00.000Z"   // ISO date string, must be in the future
}
```

Response `data`: `{ alert: BroadcastAlert }`. Emits `alert:broadcast` on `/alerts` socket
namespace (see §6).

### `POST /alerts/incident` — requires `@Roles(WARDEN)`

```json
{
  "type": "MEDICAL",   // MEDICAL | FIRE | CROWD | SECURITY | OTHER
  "description": "Person fainted near food court",
  "latitude": 6.8268,
  "longitude": 3.4622
}
```

Response `data`: `{ incident: Incident }`. Emits `alert:incident` on `/alerts` socket.

### `GET /alerts/active` — requires JWT

No params. Returns only alerts where `active: true` and `expiresAt` is in the future.

```json
{ "alerts": [ { "id": "uuid", "message": "...", "expiresAt": "...", "...": "..." } ] }
```

### `PATCH /alerts/incident/:id/resolve` — requires `@Roles(WARDEN)`

No body. Marks an incident `resolved: true`. Idempotent (resolving twice is a no-op, not
an error). Returns `404` if the incident doesn't exist.

### `POST /wardens/checkin` — requires `@Roles(WARDEN)`

```json
{ "zoneId": "uuid" }
```

Logs that the current warden checked in at a zone. Returns `404` if `zoneId` doesn't exist.

### `GET /wardens/deployment` — requires `@Roles(ADMIN)`

Returns every warden with their most recent check-in.

```json
{
  "wardens": [
    {
      "id": "uuid", "name": "Warden Alpha", "email": "alpha@scms.dev",
      "currentZone": { "id": "uuid", "name": "Main Car Park", "...": "..." },
      "checkedInAt": "2026-06-17T09:00:00.000Z"
    }
  ]
}
```

`currentZone` and `checkedInAt` are `null` if the warden has never checked in.

---

## 6. WebSocket (Socket.IO)

Two namespaces, both currently **open with no auth** (`cors: { origin: '*' }`, no JWT check
on connect — keep this in mind, it may be locked down later).

### Namespace `/parking`

| Direction | Event | Payload |
|-----------|-------|---------|
| Client → Server | `subscribe:zones` | (no payload needed — just emit it) |
| Server → Client | `zone:status_updated` | `{ zoneId, status, updatedAt }` |

Flow: connect to `/parking` → emit `subscribe:zones` → listen for `zone:status_updated` →
patch your local zone list / recolor the map.

### Namespace `/alerts`

| Direction | Event | Payload |
|-----------|-------|---------|
| Client → Server | `subscribe:alerts` | `{ lat, lng }` (accepted but **not currently used for radius filtering** — server broadcasts to everyone subscribed; filter client-side by distance if you want radius behavior before judging) |
| Server → Client | `alert:broadcast` | `{ id, message, expiresAt }` |
| Server → Client | `alert:incident` | `{ type, location: { lat, lng } }` |

```dart
// socket_io_client example
final socket = IO.io('http://<host>:3000/parking', <String, dynamic>{
  'transports': ['websocket'],
});
socket.onConnect((_) => socket.emit('subscribe:zones'));
socket.on('zone:status_updated', (data) => /* update provider */);
```

---

## 7. Campus (public — no JWT required)

The visitor map screen's data source. All four routes are `@Public()`.

### `GET /campus/map`

One bundled call for the initial map load.

```json
// Response data
{
  "zones": { "type": "FeatureCollection", "features": [ /* see /campus/zones */ ] },
  "gates": [ /* see /campus/gates */ ],
  "landmarks": [ /* see /campus/landmarks */ ]
}
```

### `GET /campus/zones`

Same `FeatureCollection` shape used inside the bundle above, standalone:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": { "type": "Polygon", "coordinates": [[[3.4605, 6.8252], "..."]] },
      "properties": { "id": "uuid", "name": "Main Car Park", "label": "P-A", "capacity": 500, "type": "PARKING" }
    }
  ]
}
```

### `GET /campus/gates`

```json
// Response data
{
  "gates": [
    { "id": "uuid", "name": "Main Entrance Gate", "label": "Gate 1", "latitude": "6.8254", "longitude": "3.4612", "direction": "ENTRY" }
  ]
}
```

`direction` is `ENTRY` | `EXIT` | `BOTH`.

### `GET /campus/landmarks`

```json
// Response data
{
  "landmarks": [
    { "id": "uuid", "name": "Holy Ghost Auditorium", "category": "HALL", "latitude": "6.8275", "longitude": "3.4630", "accessibleRoute": true }
  ]
}
```

`category` is `HALL` | `CLINIC` | `TOILET` | `ADMIN` | `FOOD`.

> **Confirmed live and tested** against the seeded DB — 5 zones, 3 gates, 6 landmarks all
> return correctly with no auth required.

---

## 8. What's NOT built yet — do not call these

No visitor-facing endpoints are missing anymore. Everything in this doc is implemented and
tested. The only thing not built is anything beyond what's documented above (e.g. there's no
search endpoint for landmarks — filter client-side on the array `/campus/landmarks` returns).

---

## 9. Roles & Access Quick Reference

| Role | Can call |
|------|----------|
| *(no token)* | `POST /auth/login` only |
| `WARDEN` | Everything requiring JWT, plus `@Roles(WARDEN)` routes (update zone status, broadcast, incidents, checkin) |
| `ADMIN` | Everything a WARDEN can, **plus** `@Roles(ADMIN)` routes (users CRUD, wardens deployment) — ADMIN automatically passes every `@Roles(...)` check, no matter which role is listed |

A request with no token to a non-public route returns `401`. A request with a valid token
but the wrong role returns `403`.

---

## 10. Known data quirks to handle client-side

- **`geojson.coordinates`** on zones is `[lng, lat]` order, not `[lat, lng]`.
- **`latitude`/`longitude`/`centerLat`/`centerLng`** fields come back from Postgres as
  `Decimal` — in JSON they serialize as plain numbers, but if you see them as strings in any
  edge case, `double.parse()` defensively.
- **Zone occupancy is not a real number** — the backend only stores a status enum
  (`AVAILABLE`/`LIMITED`/`FULL`). The "nearest zone" `occupancyPct` is a heuristic
  approximation (`AVAILABLE→15%, LIMITED→60%, FULL→97%`), not a live count.

---

## 11. Seed credentials (dev/demo only)

| Role | Email | Password |
|------|-------|----------|
| WARDEN | `alpha@scms.dev` | `Warden@123` |
| WARDEN | `beta@scms.dev` | `Warden@456` |
| ADMIN | `admin@scms.dev` | `Admin@9999` |

5 zones, 3 gates, 6 landmarks are seeded and all fetchable through `/campus/*` (§7).
