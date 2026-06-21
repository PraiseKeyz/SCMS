import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../domain/campus_repository.dart';
import '../domain/models/campus_models.dart';
import '../../../core/di.dart';

final campusRepositoryProvider = Provider<CampusRepository>((ref) {
  return getIt<CampusRepository>();
});

final mapBundleProvider = FutureProvider<Map<String, dynamic>>((ref) async {
  final repo = ref.watch(campusRepositoryProvider);
  return repo.getMapBundle();
});

final gatesProvider = FutureProvider<List<Gate>>((ref) async {
  final repo = ref.watch(campusRepositoryProvider);
  return repo.getGates();
});

final landmarksProvider = FutureProvider<List<Landmark>>((ref) async {
  final repo = ref.watch(campusRepositoryProvider);
  return repo.getLandmarks();
});
