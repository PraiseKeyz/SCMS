import 'package:go_router/go_router.dart';
import '../features/auth/presentation/splash_screen.dart';
import '../features/auth/presentation/role_select_screen.dart';
import '../features/auth/presentation/login_screen.dart';
import '../features/campus/presentation/map_home_screen.dart';
import '../features/campus/presentation/landmark_details_screen.dart';
import '../features/parking/presentation/zone_list_screen.dart';
import '../features/parking/presentation/parking_availability_screen.dart';
import '../features/parking/presentation/recommended_parking_screen.dart';
import '../features/warden/presentation/warden_dashboard_screen.dart';
import '../features/warden/presentation/warden_deployment_screen.dart';
import '../features/warden/presentation/broadcast_alert_screen.dart';
import '../features/warden/presentation/incident_report_screen.dart';
import '../features/admin/presentation/campus_config_screen.dart';
import '../features/admin/presentation/admin_audit_logs_screen.dart';
import '../features/admin/presentation/user_management_screen.dart';

final goRouter = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const SplashScreen(),
    ),
    GoRoute(
      path: '/role-select',
      builder: (context, state) => const RoleSelectScreen(),
    ),
    GoRoute(
      path: '/login',
      builder: (context, state) => LoginScreen(role: state.uri.queryParameters['role']),
    ),
    GoRoute(
      path: '/map',
      builder: (context, state) => const MapHomeScreen(),
      routes: [
        GoRoute(
          path: 'landmark',
          builder: (context, state) => const LandmarkDetailsScreen(),
        ),
      ]
    ),
    GoRoute(
      path: '/zone-list',
      builder: (context, state) => const ZoneListScreen(),
      routes: [
        GoRoute(
          path: 'availability',
          builder: (context, state) => const ParkingAvailabilityScreen(),
        ),
        GoRoute(
          path: 'recommended',
          builder: (context, state) => const RecommendedParkingScreen(),
        ),
      ]
    ),
    GoRoute(
      path: '/warden-dashboard',
      builder: (context, state) => const WardenDashboardScreen(),
      routes: [
        GoRoute(
          path: 'deployment',
          builder: (context, state) => const WardenDeploymentScreen(),
        ),
      ]
    ),
    GoRoute(
      path: '/incident-report',
      builder: (context, state) => const IncidentReportScreen(),
    ),
    GoRoute(
      path: '/broadcast-alert',
      builder: (context, state) => const BroadcastAlertScreen(),
    ),
    GoRoute(
      path: '/admin/campus-config',
      builder: (context, state) => const CampusConfigScreen(),
    ),
    GoRoute(
      path: '/admin/audit-logs',
      builder: (context, state) => const AdminAuditLogsScreen(),
    ),
    GoRoute(
      path: '/admin/user-management',
      builder: (context, state) => const UserManagementScreen(),
    ),
  ],
);
