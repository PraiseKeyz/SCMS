import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mapbox_maps_flutter/mapbox_maps_flutter.dart';
import '../../../core/theme.dart';
import '../../../core/utils/map_utils.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class RouteMapScreen extends StatefulWidget {
  final double destinationLat;
  final double destinationLng;
  final String destinationName;

  const RouteMapScreen({
    Key? key,
    required this.destinationLat,
    required this.destinationLng,
    required this.destinationName,
  }) : super(key: key);

  @override
  State<RouteMapScreen> createState() => _RouteMapScreenState();
}

class _RouteMapScreenState extends State<RouteMapScreen> {
  MapboxMap? mapboxMap;
  PointAnnotationManager? pointAnnotationManager;
  PolylineAnnotationManager? polylineAnnotationManager;

  // Mock user location for demo purposes (e.g., Campus Entrance)
  final double originLat = 6.8220;
  final double originLng = 3.4580;

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'Navigate to ${widget.destinationName}',
      subtitle: 'Visitor Portal',
      isWarden: false,
      currentIndex: -1, // Not in bottom nav
      destinations: const [], // No bottom nav items
      body: Stack(
        children: [
          Positioned.fill(
            child: MapWidget(
              cameraOptions: CameraOptions(
                center: Point(coordinates: Position(
                  (originLng + widget.destinationLng) / 2,
                  (originLat + widget.destinationLat) / 2,
                )),
                zoom: 13.5, // Fit both points roughly
              ),
              onMapCreated: _onMapCreated,
            ),
          ),
          
          Positioned(
            top: 16,
            left: 16,
            right: 16,
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: AppTheme.surfaceBright,
                borderRadius: BorderRadius.circular(12),
                boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 4)],
              ),
              child: Row(
                children: [
                  const Icon(Icons.directions_car, color: AppTheme.primary),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text('Routing to ${widget.destinationName}', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold)),
                        const SizedBox(height: 4),
                        Text('Follow the suggested path on the map.', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  void _onMapCreated(MapboxMap mapboxMap) async {
    this.mapboxMap = mapboxMap;
    mapboxMap.location.updateSettings(LocationComponentSettings(
      enabled: true, 
      puckBearingEnabled: true,
    ));

    pointAnnotationManager = await mapboxMap.annotations.createPointAnnotationManager();
    polylineAnnotationManager = await mapboxMap.annotations.createPolylineAnnotationManager();

    _plotRoute();
  }

  Future<void> _plotRoute() async {
    if (pointAnnotationManager == null || polylineAnnotationManager == null) return;

    final originImage = await MapUtils.getBytesFromIcon(Icons.person_pin_circle, AppTheme.secondary, 84);
    final destinationImage = await MapUtils.getBytesFromIcon(Icons.place, AppTheme.primary, 84);

    // Plot Origin
    await pointAnnotationManager!.create(PointAnnotationOptions(
      geometry: Point(coordinates: Position(originLng, originLat)),
      image: originImage,
    ));

    // Plot Destination
    await pointAnnotationManager!.create(PointAnnotationOptions(
      geometry: Point(coordinates: Position(widget.destinationLng, widget.destinationLat)),
      image: destinationImage,
    ));

    // Draw Line
    await polylineAnnotationManager!.create(PolylineAnnotationOptions(
      geometry: LineString(coordinates: [
        Position(originLng, originLat),
        Position(widget.destinationLng, widget.destinationLat),
      ]),
      lineColor: AppTheme.primary.value,
      lineWidth: 5.0,
      lineJoin: LineJoin.ROUND,
    ));
  }
}
