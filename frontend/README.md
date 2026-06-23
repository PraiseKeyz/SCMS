# SCMS Mobile App

Flutter app for SCMS — the visitor map, driver parking flow, warden tools, and admin
screens, all in one app gated by role.

See [docs/API_REFERENCE.md](../docs/API_REFERENCE.md) for the backend contract this app
talks to, and [docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md) for how it fits into the
overall system.

## Stack

- Flutter, Riverpod for state, GoRouter for navigation, get_it for dependency injection
- Dio for HTTP, flutter_secure_storage for the JWT
- socket_io_client for live parking/alert updates
- Mapbox GL for the campus map

## Setup

```bash
flutter pub get
```

### Pointing at the backend

Edit `lib/core/config.dart`:

```dart
class AppConfig {
  static const bool useMockData = true; // set to false to hit the real backend
  static const String apiBaseUrl = 'http://127.0.0.1:3000/api/v1';
  static const String mapboxAccessToken = String.fromEnvironment('MAPBOX_TOKEN', defaultValue: '');
}
```

- `useMockData: true` runs the app entirely on the `Mock*Repository` classes in each
  feature's `data/` folder, no backend required. Useful for UI work in isolation.
- `useMockData: false` switches to the `Api*Repository` classes, which call the real NestJS
  backend. Update `apiBaseUrl`:
  - `http://127.0.0.1:3000/api/v1` for an iOS simulator or running on the same machine
  - `http://10.0.2.2:3000/api/v1` for the Android emulator
  - Your machine's LAN IP (e.g. `http://192.168.x.x:3000/api/v1`) for a physical device
  - The deployed backend URL once it's hosted

### Mapbox token

Pass the token at build/run time rather than hardcoding it:

```bash
flutter run --dart-define=MAPBOX_TOKEN=your_token_here
```

## Running

```bash
flutter run
```

Or target a specific device:

```bash
flutter devices
flutter run -d <device-id>
```

## Building

```bash
flutter build apk          # Android
flutter build ios          # iOS
```

## Project Layout

```
lib/
├── core/
│   ├── config.dart           # API base URL, mock/live toggle, Mapbox token
│   ├── di.dart                # get_it service registration
│   ├── router.dart            # GoRouter routes
│   ├── theme.dart             # Brand colors and text theme
│   └── network/socket_service.dart
│
└── features/
    ├── auth/        # login, role select, splash, current-user state
    ├── campus/       # map home, landmark details, campus data
    ├── parking/      # zone list, recommended parking, availability
    ├── alerts/       # alert/incident state shared by warden screens
    ├── warden/       # broadcast alert, incident report, deployment, dashboard
    └── admin/        # user management, campus config, audit logs
```

Each feature follows the same shape: `domain/` (repository interface + models),
`data/` (a `Mock*Repository` and an `Api*Repository` implementing that interface),
`presentation/` (screens), and `providers/` (Riverpod state).

## Demo Credentials

Visitors need no login. For warden/admin screens, use the seeded accounts (see
[backend/README.md](../backend/README.md) for how to seed them):

| Role | Email | Password |
|------|-------|----------|
| Warden | `alpha@scms.dev` | `Warden@123` |
| Admin | `admin@scms.dev` | `Admin@9999` |
