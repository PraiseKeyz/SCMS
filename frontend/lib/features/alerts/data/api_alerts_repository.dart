import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import '../domain/alerts_repository.dart';
import '../domain/models/alerts_models.dart';
import '../../../core/config.dart';

class ApiAlertsRepository implements AlertsRepository {
  final Dio _dio;
  final FlutterSecureStorage _storage;

  ApiAlertsRepository(this._dio, this._storage);

  Future<Options> _getAuthOptions() async {
    final token = await _storage.read(key: 'accessToken');
    return Options(headers: {'Authorization': 'Bearer $token'});
  }

  @override
  Future<BroadcastAlert> broadcastAlert(String message, double radiusMeters, double lat, double lng, int durationMinutes) async {
    try {
      final response = await _dio.post(
        '${AppConfig.apiBaseUrl}/alerts/broadcast',
        data: {
          'message': message,
          'radiusMeters': radiusMeters,
          'centerLat': lat,
          'centerLng': lng,
          'expiresAt': DateTime.now().add(Duration(minutes: durationMinutes)).toIso8601String()
        },
        options: await _getAuthOptions(),
      );
      return BroadcastAlert.fromJson(response.data['alert']);
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to broadcast alert');
    }
  }

  @override
  Future<Incident> reportIncident(String type, String description, double lat, double lng) async {
    try {
      final response = await _dio.post(
        '${AppConfig.apiBaseUrl}/alerts/incident',
        data: {
          'type': type,
          'description': description,
          'latitude': lat,
          'longitude': lng,
        },
        options: await _getAuthOptions(),
      );
      return Incident.fromJson(response.data['incident']);
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to report incident');
    }
  }

  @override
  Future<List<BroadcastAlert>> getActiveAlerts() async {
    try {
      final response = await _dio.get(
        '${AppConfig.apiBaseUrl}/alerts/active',
        options: await _getAuthOptions(),
      );
      final List data = response.data['alerts'];
      return data.map((e) => BroadcastAlert.fromJson(e)).toList();
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to get active alerts');
    }
  }

  @override
  Future<Incident> resolveIncident(String id) async {
    try {
      final response = await _dio.patch(
        '${AppConfig.apiBaseUrl}/alerts/incident/$id/resolve',
        options: await _getAuthOptions(),
      );
      return Incident.fromJson(response.data['incident']);
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to resolve incident');
    }
  }

  @override
  Future<void> checkin(String zoneId) async {
    try {
      await _dio.post(
        '${AppConfig.apiBaseUrl}/wardens/checkin',
        data: {'zoneId': zoneId},
        options: await _getAuthOptions(),
      );
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to check in');
    }
  }
}
