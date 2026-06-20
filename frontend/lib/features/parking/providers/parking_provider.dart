import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../domain/parking_repository.dart';
import '../domain/models/parking_models.dart';
import '../../../core/di.dart';

final parkingRepositoryProvider = Provider<ParkingRepository>((ref) {
  return getIt<ParkingRepository>();
});

final parkingZonesProvider = FutureProvider<List<ZoneWithStatus>>((ref) async {
  final repo = ref.watch(parkingRepositoryProvider);
  return repo.getZonesWithStatus();
});

class NearestZoneNotifier extends StateNotifier<AsyncValue<NearestZoneRecommendation?>> {
  final ParkingRepository _repository;

  NearestZoneNotifier(this._repository) : super(const AsyncValue.data(null));

  Future<void> findNearestZone(double lat, double lng) async {
    state = const AsyncValue.loading();
    try {
      final result = await _repository.getNearestZone(lat, lng);
      state = AsyncValue.data(result);
    } catch (e, stackTrace) {
      state = AsyncValue.error(e, stackTrace);
    }
  }
}

final nearestZoneProvider = StateNotifierProvider<NearestZoneNotifier, AsyncValue<NearestZoneRecommendation?>>((ref) {
  return NearestZoneNotifier(ref.read(parkingRepositoryProvider));
});
