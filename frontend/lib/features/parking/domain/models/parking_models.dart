enum ZoneStatusEnum {
  available,
  limited,
  full,
}

class ZoneStatus {
  final String id;
  final String zoneId;
  final ZoneStatusEnum status;
  final DateTime updatedAt;

  ZoneStatus({
    required this.id,
    required this.zoneId,
    required this.status,
    required this.updatedAt,
  });

  factory ZoneStatus.fromJson(Map<String, dynamic> json) {
    ZoneStatusEnum parsedStatus;
    switch (json['status']) {
      case 'FULL':
        parsedStatus = ZoneStatusEnum.full;
        break;
      case 'LIMITED':
        parsedStatus = ZoneStatusEnum.limited;
        break;
      case 'AVAILABLE':
      default:
        parsedStatus = ZoneStatusEnum.available;
        break;
    }

    return ZoneStatus(
      id: json['id'],
      zoneId: json['zoneId'],
      status: parsedStatus,
      updatedAt: DateTime.parse(json['updatedAt']),
    );
  }
}

class ZoneWithStatus {
  final String id;
  final String name;
  final String label;
  final int capacity;
  final ZoneStatusEnum status;
  final double lat;
  final double lng;

  ZoneWithStatus({
    required this.id,
    required this.name,
    required this.label,
    required this.capacity,
    required this.status,
    this.lat = 6.8268,
    this.lng = 3.4622,
  });

  factory ZoneWithStatus.fromJson(Map<String, dynamic> json) {
    ZoneStatusEnum parsedStatus = ZoneStatusEnum.available;
    if (json['status'] != null) {
      switch (json['status']) {
        case 'FULL':
          parsedStatus = ZoneStatusEnum.full;
          break;
        case 'LIMITED':
          parsedStatus = ZoneStatusEnum.limited;
          break;
        case 'AVAILABLE':
        default:
          parsedStatus = ZoneStatusEnum.available;
          break;
      }
    }

    return ZoneWithStatus(
      id: json['id'],
      name: json['name'],
      label: json['label'],
      capacity: json['capacity'],
      status: parsedStatus,
      lat: json['lat'] ?? (6.8260 + (json['id'].hashCode % 10) * 0.0005),
      lng: json['lng'] ?? (3.4610 + (json['name'].hashCode % 10) * 0.0005),
    );
  }
}

class NearestZoneRecommendation {
  final String recommendedZoneId;
  final List<dynamic> rankedZones;

  NearestZoneRecommendation({
    required this.recommendedZoneId,
    required this.rankedZones,
  });

  factory NearestZoneRecommendation.fromJson(Map<String, dynamic> json) {
    return NearestZoneRecommendation(
      recommendedZoneId: json['recommendedZoneId'],
      rankedZones: json['rankedZones'],
    );
  }
}
