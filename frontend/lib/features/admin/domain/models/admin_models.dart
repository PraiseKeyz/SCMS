import '../../../parking/domain/models/parking_models.dart';

class WardenDeployment {
  final String id;
  final String name;
  final String email;
  final ZoneWithStatus? currentZone;
  final DateTime? checkedInAt;

  WardenDeployment({
    required this.id,
    required this.name,
    required this.email,
    this.currentZone,
    this.checkedInAt,
  });

  factory WardenDeployment.fromJson(Map<String, dynamic> json) {
    return WardenDeployment(
      id: json['id'],
      name: json['name'],
      email: json['email'],
      currentZone: json['currentZone'] != null 
          ? ZoneWithStatus.fromJson(json['currentZone']) 
          : null,
      checkedInAt: json['checkedInAt'] != null 
          ? DateTime.parse(json['checkedInAt']) 
          : null,
    );
  }
}
