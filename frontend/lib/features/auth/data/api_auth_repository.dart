import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import '../domain/auth_repository.dart';
import '../domain/models/user_model.dart';
import '../../../core/config.dart';

class ApiAuthRepository implements AuthRepository {
  final Dio _dio;
  final FlutterSecureStorage _storage;

  ApiAuthRepository(this._dio, this._storage);

  @override
  Future<Map<String, dynamic>> login(String email, String password) async {
    try {
      final response = await _dio.post(
        '${AppConfig.apiBaseUrl}/auth/login',
        data: {'email': email, 'password': password},
      );
      
      final data = response.data;
      final String accessToken = data['accessToken'];
      final user = SafeUser.fromJson(data['user']);
      
      await _storage.write(key: 'accessToken', value: accessToken);
      
      return {'user': user, 'accessToken': accessToken};
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Login failed');
    }
  }

  @override
  Future<SafeUser> getCurrentUser() async {
    try {
      final token = await _storage.read(key: 'accessToken');
      if (token == null) throw Exception('No token found');

      final response = await _dio.get(
        '${AppConfig.apiBaseUrl}/auth/me',
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );

      return SafeUser.fromJson(response.data['user']);
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to get current user');
    }
  }

  @override
  Future<void> changePassword(String currentPassword, String newPassword) async {
    try {
      final token = await _storage.read(key: 'accessToken');
      if (token == null) throw Exception('No token found');

      await _dio.patch(
        '${AppConfig.apiBaseUrl}/auth/change-password',
        data: {
          'currentPassword': currentPassword,
          'newPassword': newPassword,
        },
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to change password');
    }
  }

  @override
  Future<void> logout() async {
    await _storage.delete(key: 'accessToken');
  }
}
