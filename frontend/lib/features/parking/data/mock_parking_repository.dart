import '../domain/parking_repository.dart';
import '../domain/models/parking_models.dart';

class MockParkingRepository implements ParkingRepository {
  final List<ZoneWithStatus> _mockZones = [
    ZoneWithStatus(
      id: 'zone-1',
      name: 'North Parking',
      label: 'NP',
      capacity: 100,
      status: ZoneStatusEnum.available,
    ),
    ZoneWithStatus(
      id: 'zone-2',
      name: 'South Parking',
      label: 'SP',
      capacity: 50,
      status: ZoneStatusEnum.full,
    ),
  ];

  @override
  Future<List<ZoneWithStatus>> getZonesWithStatus() async {
    await Future.delayed(const Duration(milliseconds: 600));
    return _mockZones;
  }

  @override
  Future<ZoneStatus> updateZoneStatus(String zoneId, ZoneStatusEnum status) async {
    await Future.delayed(const Duration(milliseconds: 400));
    return ZoneStatus(
      id: 'mock-status-id',
      zoneId: zoneId,
      status: status,
      updatedAt: DateTime.now(),
    );
  }

  @override
  Future<NearestZoneRecommendation> getNearestZone(double lat, double lng) async {
    await Future.delayed(const Duration(milliseconds: 500));
    return NearestZoneRecommendation(
      recommendedZoneId: 'zone-1',
      rankedZones: [
        {'zoneId': 'zone-1', 'score': 0.95, 'walkDistanceM': 120, 'occupancyPct': 0.2},
        {'zoneId': 'zone-2', 'score': 0.40, 'walkDistanceM': 500, 'occupancyPct': 1.0},
      ],
    );
  }
}
