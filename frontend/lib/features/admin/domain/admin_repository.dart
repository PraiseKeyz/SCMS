import '../../auth/domain/models/user_model.dart';
import 'models/admin_models.dart';

abstract class AdminRepository {
  Future<List<SafeUser>> getUsers();
  Future<SafeUser> getUser(String id);
  Future<SafeUser> createUser(String name, String email, String role, String password);
  Future<void> deleteUser(String id);
  
  Future<List<WardenDeployment>> getWardenDeployments();
}
