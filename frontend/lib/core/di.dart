import 'package:get_it/get_it.dart';
import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'config.dart';

// Auth Imports
import '../features/auth/domain/auth_repository.dart';
import '../features/auth/data/mock_auth_repository.dart';
import '../features/auth/data/api_auth_repository.dart';

// Campus Imports
import '../features/campus/domain/campus_repository.dart';
import '../features/campus/data/mock_campus_repository.dart';
import '../features/campus/data/api_campus_repository.dart';

// Parking Imports
import '../features/parking/domain/parking_repository.dart';
import '../features/parking/data/mock_parking_repository.dart';
import '../features/parking/data/api_parking_repository.dart';

// Alerts Imports
import '../features/alerts/domain/alerts_repository.dart';
import '../features/alerts/data/mock_alerts_repository.dart';
import '../features/alerts/data/api_alerts_repository.dart';

final getIt = GetIt.instance;

void setupDependencies() {
  // Core Services
  getIt.registerLazySingleton<Dio>(() => Dio());
  getIt.registerLazySingleton<FlutterSecureStorage>(() => const FlutterSecureStorage());

  // Repositories
  if (AppConfig.useMockData) {
    getIt.registerLazySingleton<AuthRepository>(() => MockAuthRepository());
    getIt.registerLazySingleton<CampusRepository>(() => MockCampusRepository());
    getIt.registerLazySingleton<ParkingRepository>(() => MockParkingRepository());
    getIt.registerLazySingleton<AlertsRepository>(() => MockAlertsRepository());
  } else {
    getIt.registerLazySingleton<AuthRepository>(() => ApiAuthRepository(getIt<Dio>(), getIt<FlutterSecureStorage>()));
    getIt.registerLazySingleton<CampusRepository>(() => ApiCampusRepository(getIt<Dio>()));
    getIt.registerLazySingleton<ParkingRepository>(() => ApiParkingRepository(getIt<Dio>(), getIt<FlutterSecureStorage>()));
    getIt.registerLazySingleton<AlertsRepository>(() => ApiAlertsRepository(getIt<Dio>(), getIt<FlutterSecureStorage>()));
  }
}
