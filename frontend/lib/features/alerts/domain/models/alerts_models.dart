class BroadcastAlert {
  final String id;
  final String message;
  final double radiusMeters;
  final double centerLat;
  final double centerLng;
  final bool active;
  final DateTime expiresAt;

  BroadcastAlert({
    required this.id,
    required this.message,
    required this.radiusMeters,
    required this.centerLat,
    required this.centerLng,
    required this.active,
    required this.expiresAt,
  });

  factory BroadcastAlert.fromJson(Map<String, dynamic> json) {
    return BroadcastAlert(
      id: json['id'],
      message: json['message'],
      radiusMeters: (json['radiusMeters'] ?? 0).toDouble(),
      centerLat: (json['centerLat'] ?? 0).toDouble(),
      centerLng: (json['centerLng'] ?? 0).toDouble(),
      active: json['active'] ?? true,
      expiresAt: DateTime.parse(json['expiresAt']),
    );
  }
}

class Incident {
  final String id;
  final String type;
  final String description;
  final double latitude;
  final double longitude;
  final bool resolved;

  Incident({
    required this.id,
    required this.type,
    required this.description,
    required this.latitude,
    required this.longitude,
    required this.resolved,
  });

  factory Incident.fromJson(Map<String, dynamic> json) {
    return Incident(
      id: json['id'],
      type: json['type'],
      description: json['description'],
      latitude: (json['latitude'] ?? 0).toDouble(),
      longitude: (json['longitude'] ?? 0).toDouble(),
      resolved: json['resolved'] ?? false,
    );
  }
}
