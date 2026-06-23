import 'package:flutter/material.dart';
import 'package:mapbox_maps_flutter/mapbox_maps_flutter.dart';
import '../../../core/theme.dart';

class MapSelectionScreen extends StatefulWidget {
  final double initialLat;
  final double initialLng;

  const MapSelectionScreen({
    Key? key,
    this.initialLat = 6.8268,
    this.initialLng = 3.4622,
  }) : super(key: key);

  @override
  State<MapSelectionScreen> createState() => _MapSelectionScreenState();
}

class _MapSelectionScreenState extends State<MapSelectionScreen> {
  MapboxMap? mapboxMap;
  CircleAnnotationManager? circleAnnotationManager;
  CircleAnnotation? selectedMarker;

  double _selectedLat = 0;
  double _selectedLng = 0;
  bool _locationSelected = false;

  @override
  void initState() {
    super.initState();
    _selectedLat = widget.initialLat;
    _selectedLng = widget.initialLng;
  }

  Future<void> _addMarker(Position position) async {
    if (circleAnnotationManager == null) return;

    if (selectedMarker != null) {
      await circleAnnotationManager!.delete(selectedMarker!);
    }

    selectedMarker = await circleAnnotationManager!.create(
      CircleAnnotationOptions(
        geometry: Point(coordinates: position),
        circleColor: 0xFFD32F2F, // AppTheme.error
        circleRadius: 8.0,
        circleStrokeWidth: 2.0,
        circleStrokeColor: 0xFFFFFFFF,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Select Location'),
        backgroundColor: AppTheme.surfaceBright,
      ),
      body: Stack(
        children: [
          MapWidget(
            cameraOptions: CameraOptions(
              center: Point(coordinates: Position(widget.initialLng, widget.initialLat)),
              zoom: 16.0,
            ),
            onMapCreated: (map) async {
              mapboxMap = map;
              map.location.updateSettings(LocationComponentSettings(
                enabled: true,
                puckBearingEnabled: true,
              ));
              circleAnnotationManager = await map.annotations.createCircleAnnotationManager();
              if (_selectedLat != 0) {
                 _addMarker(Position(_selectedLng, _selectedLat));
                 _locationSelected = true;
              }
            },
            onTapListener: (mapContentGestureContext) {
              final point = mapContentGestureContext.point;
              setState(() {
                _selectedLng = point.coordinates.lng as double;
                _selectedLat = point.coordinates.lat as double;
                _locationSelected = true;
              });
              _addMarker(point.coordinates);
            },
          ),
          if (!_locationSelected) 
             Positioned(
               top: 16, 
               left: 16, 
               right: 16, 
               child: Container(
                 padding: const EdgeInsets.all(12), 
                 decoration: BoxDecoration(
                   color: AppTheme.surfaceBright,
                   borderRadius: BorderRadius.circular(8),
                   boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 4)],
                 ),
                 child: Row(
                   children: [
                     const Icon(Icons.info_outline, color: AppTheme.secondary),
                     const SizedBox(width: 8),
                     const Expanded(child: Text('Tap anywhere on the map to drop a pin.')),
                   ],
                 ),
               ),
             ),
          Positioned(
            bottom: 32,
            left: 32,
            right: 32,
            child: ElevatedButton(
              onPressed: () {
                Navigator.pop(context, {'lat': _selectedLat, 'lng': _selectedLng});
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: AppTheme.primary,
                foregroundColor: AppTheme.onPrimary,
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text('Confirm Location', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            ),
          ),
        ],
      ),
    );
  }
}
