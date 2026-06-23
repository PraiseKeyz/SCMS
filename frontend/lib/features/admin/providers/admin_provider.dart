import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../domain/admin_repository.dart';
import '../../auth/domain/models/user_model.dart';
import '../domain/models/admin_models.dart';
import '../../../core/di.dart';

final adminRepositoryProvider = Provider<AdminRepository>((ref) {
  return getIt<AdminRepository>();
});

final usersProvider = FutureProvider<List<SafeUser>>((ref) async {
  return ref.watch(adminRepositoryProvider).getUsers();
});

final wardenDeploymentsProvider = FutureProvider<List<WardenDeployment>>((ref) async {
  return ref.watch(adminRepositoryProvider).getWardenDeployments();
});

class AdminNotifier extends StateNotifier<AsyncValue<void>> {
  final AdminRepository _repository;
  final Ref _ref;

  AdminNotifier(this._repository, this._ref) : super(const AsyncValue.data(null));

  Future<void> createUser(String name, String email, String role, String password) async {
    state = const AsyncValue.loading();
    try {
      await _repository.createUser(name, email, role, password);
      // Refresh the users list
      _ref.invalidate(usersProvider);
      state = const AsyncValue.data(null);
    } catch (e, stackTrace) {
      state = AsyncValue.error(e, stackTrace);
      rethrow;
    }
  }

  Future<void> deleteUser(String id) async {
    state = const AsyncValue.loading();
    try {
      await _repository.deleteUser(id);
      // Refresh the users list
      _ref.invalidate(usersProvider);
      state = const AsyncValue.data(null);
    } catch (e, stackTrace) {
      state = AsyncValue.error(e, stackTrace);
      rethrow;
    }
  }
}

final adminNotifierProvider = StateNotifierProvider<AdminNotifier, AsyncValue<void>>((ref) {
  return AdminNotifier(ref.read(adminRepositoryProvider), ref);
});
