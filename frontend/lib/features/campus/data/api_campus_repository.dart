import 'package:dio/dio.dart';
import '../domain/campus_repository.dart';
import '../domain/models/campus_models.dart';
import '../../../core/config.dart';

class ApiCampusRepository implements CampusRepository {
  final Dio _dio;

  ApiCampusRepository(this._dio);

  @override
  Future<Map<String, dynamic>> getMapBundle() async {
    try {
      final response = await _dio.get('${AppConfig.apiBaseUrl}/campus/map');
      final data = response.data['data'];
      
      // Data contains zones (geojson), gates, landmarks
      return data;
    } on DioException catch (e) {
      throw Exception(e.response?.data['message'] ?? 'Failed to get campus map');
    }
  }

  @override
  Future<List<Gate>> getGates() async {
    try {
      final response = await _dio.get('${AppConfig.apiBaseUrl}/campus/gates');
      final List data = response.data['data'];
      return data.map((e) => Gate.fromJson(e)).toList();
    } on DioException catch (e) {
      throw Exception(e.response?.data['message'] ?? 'Failed to get gates');
    }
  }

  @override
  Future<List<Landmark>> getLandmarks() async {
    try {
      final response = await _dio.get('${AppConfig.apiBaseUrl}/campus/landmarks');
      final List data = response.data['data'];
      return data.map((e) => Landmark.fromJson(e)).toList();
    } on DioException catch (e) {
      throw Exception(e.response?.data['message'] ?? 'Failed to get landmarks');
    }
  }
}
