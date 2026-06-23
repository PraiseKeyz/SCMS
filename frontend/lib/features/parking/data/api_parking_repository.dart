import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import '../domain/parking_repository.dart';
import '../domain/models/parking_models.dart';
import '../../../core/config.dart';

class ApiParkingRepository implements ParkingRepository {
  final Dio _dio;
  final FlutterSecureStorage _storage;

  ApiParkingRepository(this._dio, this._storage);

  Future<Options> _getAuthOptions() async {
    final token = await _storage.read(key: 'accessToken');
    return Options(headers: {'Authorization': 'Bearer $token'});
  }

  @override
  Future<List<ZoneWithStatus>> getZonesWithStatus() async {
    try {
      final response = await _dio.get(
        '${AppConfig.apiBaseUrl}/parking/zones',
        options: await _getAuthOptions(),
      );
      final List data = response.data['zones'];
      return data.map((e) => ZoneWithStatus.fromJson(e)).toList();
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to get parking zones');
    }
  }

  @override
  Future<ZoneStatus> updateZoneStatus(String zoneId, ZoneStatusEnum status) async {
    try {
      final String statusString = status == ZoneStatusEnum.available 
          ? 'AVAILABLE' 
          : status == ZoneStatusEnum.limited 
              ? 'LIMITED' 
              : 'FULL';

      final response = await _dio.patch(
        '${AppConfig.apiBaseUrl}/parking/zones/$zoneId/status',
        data: {'status': statusString},
        options: await _getAuthOptions(),
      );
      return ZoneStatus.fromJson(response.data['status']);
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to update zone status');
    }
  }

  @override
  Future<NearestZoneRecommendation> getNearestZone(double lat, double lng) async {
    try {
      final response = await _dio.get(
        '${AppConfig.apiBaseUrl}/parking/nearest',
        queryParameters: {'lat': lat, 'lng': lng},
        options: await _getAuthOptions(),
      );
      return NearestZoneRecommendation.fromJson(response.data);
    } on DioException catch (e) {
      throw Exception(e.message ?? 'Failed to get nearest zone');
    }
  }
}
