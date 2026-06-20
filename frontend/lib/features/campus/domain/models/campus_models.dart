class Zone {
  final String id;
  final String name;
  final String label;
  final int capacity;
  final String type; // e.g., 'PARKING', 'VENUE', 'ROAD'

  Zone({
    required this.id,
    required this.name,
    required this.label,
    required this.capacity,
    required this.type,
  });

  factory Zone.fromJson(Map<String, dynamic> json) {
    return Zone(
      id: json['id'],
      name: json['name'],
      label: json['label'],
      capacity: json['capacity'],
      type: json['type'],
    );
  }
}

class Gate {
  final String id;
  final String name;
  final double lat;
  final double lng;

  Gate({
    required this.id,
    required this.name,
    required this.lat,
    required this.lng,
  });

  factory Gate.fromJson(Map<String, dynamic> json) {
    return Gate(
      id: json['id'],
      name: json['name'],
      lat: (json['lat'] ?? 0).toDouble(),
      lng: (json['lng'] ?? 0).toDouble(),
    );
  }
}

class Landmark {
  final String id;
  final String name;
  final String category;
  final double lat;
  final double lng;

  Landmark({
    required this.id,
    required this.name,
    required this.category,
    required this.lat,
    required this.lng,
  });

  factory Landmark.fromJson(Map<String, dynamic> json) {
    return Landmark(
      id: json['id'],
      name: json['name'],
      category: json['category'],
      lat: (json['lat'] ?? 0).toDouble(),
      lng: (json['lng'] ?? 0).toDouble(),
    );
  }
}
