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
      radiusMeters: double.tryParse(json['radiusMeters']?.toString() ?? '0') ?? 0.0,
      centerLat: double.tryParse(json['centerLat']?.toString() ?? '0') ?? 0.0,
      centerLng: double.tryParse(json['centerLng']?.toString() ?? '0') ?? 0.0,
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
      latitude: double.tryParse(json['latitude']?.toString() ?? '0') ?? 0.0,
      longitude: double.tryParse(json['longitude']?.toString() ?? '0') ?? 0.0,
      resolved: json['resolved'] ?? false,
    );
  }
}
