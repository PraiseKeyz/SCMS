import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../domain/alerts_repository.dart';
import '../domain/models/alerts_models.dart';
import '../../../core/di.dart';

final alertsRepositoryProvider = Provider<AlertsRepository>((ref) {
  return getIt<AlertsRepository>();
});

final activeAlertsProvider = FutureProvider<List<BroadcastAlert>>((ref) async {
  final repo = ref.watch(alertsRepositoryProvider);
  return repo.getActiveAlerts();
});

class AlertsNotifier extends StateNotifier<AsyncValue<void>> {
  final AlertsRepository _repository;

  AlertsNotifier(this._repository) : super(const AsyncValue.data(null));

  Future<void> broadcastAlert(String message, double radiusMeters, double lat, double lng, int durationMinutes) async {
    state = const AsyncValue.loading();
    try {
      await _repository.broadcastAlert(message, radiusMeters, lat, lng, durationMinutes);
      state = const AsyncValue.data(null);
    } catch (e, stackTrace) {
      state = AsyncValue.error(e, stackTrace);
      rethrow;
    }
  }

  Future<void> reportIncident(String type, String description, double lat, double lng) async {
    state = const AsyncValue.loading();
    try {
      await _repository.reportIncident(type, description, lat, lng);
      state = const AsyncValue.data(null);
    } catch (e, stackTrace) {
      state = AsyncValue.error(e, stackTrace);
      rethrow;
    }
  }
}

final alertsNotifierProvider = StateNotifierProvider<AlertsNotifier, AsyncValue<void>>((ref) {
  return AlertsNotifier(ref.read(alertsRepositoryProvider));
});
