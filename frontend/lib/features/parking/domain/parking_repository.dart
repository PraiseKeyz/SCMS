import 'models/parking_models.dart';

abstract class ParkingRepository {
  Future<List<ZoneWithStatus>> getZonesWithStatus();
  Future<ZoneStatus> updateZoneStatus(String zoneId, ZoneStatusEnum status);
  Future<NearestZoneRecommendation> getNearestZone(double lat, double lng);
}
