import 'models/campus_models.dart';

abstract class CampusRepository {
  Future<Map<String, dynamic>> getMapBundle(); // Returns GeoJSON string and other data
  Future<List<Gate>> getGates();
  Future<List<Landmark>> getLandmarks();
}
