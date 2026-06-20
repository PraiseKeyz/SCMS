import 'models/alerts_models.dart';

abstract class AlertsRepository {
  Future<BroadcastAlert> broadcastAlert(String message, double radiusMeters, double lat, double lng, int durationMinutes);
  Future<Incident> reportIncident(String type, String description, double lat, double lng);
  Future<List<BroadcastAlert>> getActiveAlerts();
  Future<Incident> resolveIncident(String id);
  Future<void> checkin(String zoneId);
}
