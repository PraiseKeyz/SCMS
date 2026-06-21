import '../domain/campus_repository.dart';
import '../domain/models/campus_models.dart';

class MockCampusRepository implements CampusRepository {
  @override
  Future<Map<String, dynamic>> getMapBundle() async {
    await Future.delayed(const Duration(milliseconds: 800));
    
    // Simulate GeoJSON
    final mockGeoJson = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "id": "zone-1",
            "name": "North Parking",
            "label": "NP",
            "capacity": 100,
            "type": "PARKING"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[0.0, 0.0], [0.0, 1.0], [1.0, 1.0], [1.0, 0.0], [0.0, 0.0]]]
          }
        }
      ]
    };

    return {
      'zones': mockGeoJson,
      'gates': await getGates(),
      'landmarks': await getLandmarks(),
    };
  }

  @override
  Future<List<Gate>> getGates() async {
    await Future.delayed(const Duration(milliseconds: 300));
    return [
      Gate(id: 'gate-1', name: 'Main Gate', lat: 6.5, lng: 3.3),
      Gate(id: 'gate-2', name: 'South Gate', lat: 6.4, lng: 3.2),
    ];
  }

  @override
  Future<List<Landmark>> getLandmarks() async {
    await Future.delayed(const Duration(milliseconds: 300));
    return [
      Landmark(id: 'lm-1', name: 'Library', category: 'Academic', lat: 6.45, lng: 3.25),
      Landmark(id: 'lm-2', name: 'Cafeteria', category: 'Food', lat: 6.46, lng: 3.26),
    ];
  }
}
