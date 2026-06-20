import 'models/user_model.dart';

abstract class AuthRepository {
  Future<Map<String, dynamic>> login(String email, String password);
  Future<SafeUser> getCurrentUser();
  Future<void> logout();
}
