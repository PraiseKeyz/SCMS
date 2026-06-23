import '../../auth/domain/models/user_model.dart';
import '../domain/admin_repository.dart';
import '../domain/models/admin_models.dart';

class MockAdminRepository implements AdminRepository {
  final List<SafeUser> _users = [
    SafeUser(id: '1', name: 'Admin User', email: 'admin@scms.dev', role: Role.admin, createdAt: DateTime.now()),
    SafeUser(id: '2', name: 'Warden Alpha', email: 'alpha@scms.dev', role: Role.warden, createdAt: DateTime.now()),
  ];

  @override
  Future<List<SafeUser>> getUsers() async {
    await Future.delayed(const Duration(milliseconds: 800));
    return _users;
  }

  @override
  Future<SafeUser> getUser(String id) async {
    await Future.delayed(const Duration(milliseconds: 500));
    return _users.firstWhere((u) => u.id == id, orElse: () => throw Exception('User not found'));
  }

  @override
  Future<SafeUser> createUser(String name, String email, String role, String password) async {
    await Future.delayed(const Duration(seconds: 1));
    final newUser = SafeUser(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      name: name,
      email: email,
      role: role == 'ADMIN' ? Role.admin : Role.warden,
      createdAt: DateTime.now(),
    );
    _users.add(newUser);
    return newUser;
  }

  @override
  Future<void> deleteUser(String id) async {
    await Future.delayed(const Duration(milliseconds: 800));
    _users.removeWhere((u) => u.id == id);
  }

  @override
  Future<List<WardenDeployment>> getWardenDeployments() async {
    await Future.delayed(const Duration(milliseconds: 800));
    return [
      WardenDeployment(
        id: '2',
        name: 'Warden Alpha',
        email: 'alpha@scms.dev',
        checkedInAt: DateTime.now().subtract(const Duration(hours: 1)),
      )
    ];
  }
}
