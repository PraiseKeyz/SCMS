import '../domain/auth_repository.dart';
import '../domain/models/user_model.dart';

class MockAuthRepository implements AuthRepository {
  SafeUser? _currentUser;

  @override
  Future<Map<String, dynamic>> login(String email, String password) async {
    await Future.delayed(const Duration(seconds: 1)); // Simulate network latency

    if (email == 'admin@scms.dev' && password == 'Admin@9999') {
      _currentUser = SafeUser(
        id: 'mock-admin-id',
        name: 'Super Admin',
        email: email,
        role: Role.admin,
        createdAt: DateTime.now(),
      );
      return {'user': _currentUser, 'accessToken': 'mock-jwt-admin-token'};
    } else if (email == 'alpha@scms.dev' && password == 'Warden@123') {
      _currentUser = SafeUser(
        id: 'mock-warden-id',
        name: 'Alpha Warden',
        email: email,
        role: Role.warden,
        createdAt: DateTime.now(),
      );
      return {'user': _currentUser, 'accessToken': 'mock-jwt-warden-token'};
    }

    throw Exception('Invalid credentials');
  }

  @override
  Future<SafeUser> getCurrentUser() async {
    await Future.delayed(const Duration(milliseconds: 500));
    if (_currentUser == null) {
      throw Exception('Not logged in');
    }
    return _currentUser!;
  }

  @override
  Future<void> logout() async {
    await Future.delayed(const Duration(milliseconds: 300));
    _currentUser = null;
  }
}
