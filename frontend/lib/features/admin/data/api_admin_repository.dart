import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import '../../../core/config.dart';
import '../../auth/domain/models/user_model.dart';
import '../domain/admin_repository.dart';
import '../domain/models/admin_models.dart';

class ApiAdminRepository implements AdminRepository {
  final Dio _dio;
  final FlutterSecureStorage _storage;

  ApiAdminRepository(this._dio, this._storage);

  Future<Options> _getAuthOptions() async {
    final token = await _storage.read(key: 'accessToken');
    return Options(headers: {'Authorization': 'Bearer $token'});
  }

  @override
  Future<List<SafeUser>> getUsers() async {
    try {
      final response = await _dio.get(
        '${AppConfig.apiBaseUrl}/users',
        options: await _getAuthOptions(),
      );
      final List data = response.data['users'];
      return data.map((e) => SafeUser.fromJson(e)).toList();
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to get users');
    }
  }

  @override
  Future<SafeUser> getUser(String id) async {
    try {
      final response = await _dio.get(
        '${AppConfig.apiBaseUrl}/users/$id',
        options: await _getAuthOptions(),
      );
      return SafeUser.fromJson(response.data['user']);
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to get user');
    }
  }

  @override
  Future<SafeUser> createUser(String name, String email, String role, String password) async {
    try {
      final response = await _dio.post(
        '${AppConfig.apiBaseUrl}/users',
        data: {
          'name': name,
          'email': email,
          'role': role,
          'password': password,
        },
        options: await _getAuthOptions(),
      );
      return SafeUser.fromJson(response.data['user']);
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to create user');
    }
  }

  @override
  Future<void> deleteUser(String id) async {
    try {
      await _dio.delete(
        '${AppConfig.apiBaseUrl}/users/$id',
        options: await _getAuthOptions(),
      );
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to delete user');
    }
  }

  @override
  Future<List<WardenDeployment>> getWardenDeployments() async {
    try {
      final response = await _dio.get(
        '${AppConfig.apiBaseUrl}/wardens/deployment',
        options: await _getAuthOptions(),
      );
      final List data = response.data['wardens'];
      return data.map((e) => WardenDeployment.fromJson(e)).toList();
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to get warden deployments');
    }
  }
}
