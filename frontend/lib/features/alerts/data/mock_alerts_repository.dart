import '../domain/alerts_repository.dart';
import '../domain/models/alerts_models.dart';

class MockAlertsRepository implements AlertsRepository {
  final List<BroadcastAlert> _mockAlerts = [
    BroadcastAlert(
      id: 'alert-1',
      message: 'Road blocked near Library',
      radiusMeters: 50,
      centerLat: 6.45,
      centerLng: 3.25,
      active: true,
      expiresAt: DateTime.now().add(const Duration(hours: 1)),
    )
  ];

  @override
  Future<BroadcastAlert> broadcastAlert(String message, double radiusMeters, double lat, double lng, int durationMinutes) async {
    await Future.delayed(const Duration(milliseconds: 500));
    final newAlert = BroadcastAlert(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      message: message,
      radiusMeters: radiusMeters,
      centerLat: lat,
      centerLng: lng,
      active: true,
      expiresAt: DateTime.now().add(Duration(minutes: durationMinutes)),
    );
    _mockAlerts.add(newAlert);
    return newAlert;
  }

  @override
  Future<Incident> reportIncident(String type, String description, double lat, double lng) async {
    await Future.delayed(const Duration(milliseconds: 500));
    return Incident(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      type: type,
      description: description,
      latitude: lat,
      longitude: lng,
      resolved: false,
    );
  }

  @override
  Future<List<BroadcastAlert>> getActiveAlerts() async {
    await Future.delayed(const Duration(milliseconds: 300));
    return _mockAlerts.where((a) => a.active && a.expiresAt.isAfter(DateTime.now())).toList();
  }

  @override
  Future<Incident> resolveIncident(String id) async {
    await Future.delayed(const Duration(milliseconds: 300));
    return Incident(
      id: id,
      type: 'Resolved',
      description: 'Resolved incident',
      latitude: 0,
      longitude: 0,
      resolved: true,
    );
  }

  @override
  Future<void> checkin(String zoneId) async {
    await Future.delayed(const Duration(milliseconds: 200));
    // Mock checkin
  }
}
