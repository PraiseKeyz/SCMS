import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mapbox_maps_flutter/mapbox_maps_flutter.dart' hide Size;
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../../core/utils/map_utils.dart';
import '../providers/parking_provider.dart';
import '../domain/models/parking_models.dart';

class ParkingAvailabilityScreen extends ConsumerStatefulWidget {
  const ParkingAvailabilityScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<ParkingAvailabilityScreen> createState() => _ParkingAvailabilityScreenState();
}

class _ParkingAvailabilityScreenState extends ConsumerState<ParkingAvailabilityScreen> {
  MapboxMap? mapboxMap;
  PointAnnotationManager? pointAnnotationManager;
  ZoneWithStatus? _selectedZone;

  @override
  void initState() {
    super.initState();
  }

  void _onMapCreated(MapboxMap mapboxMap) async {
    this.mapboxMap = mapboxMap;
    mapboxMap.location.updateSettings(LocationComponentSettings(
      enabled: true, 
      puckBearingEnabled: true,
      pulsingEnabled: true,
      pulsingColor: Colors.red.value,
    ));

    pointAnnotationManager = await mapboxMap.annotations.createPointAnnotationManager();
    _plotZones();
  }

  Future<void> _plotZones() async {
    if (pointAnnotationManager == null) return;
    final zonesAsync = ref.read(parkingZonesProvider);
    if (zonesAsync is! AsyncData) return;
    
    await pointAnnotationManager!.deleteAll();

    List<PointAnnotationOptions> options = [];
    double? firstLat;
    double? firstLng;

    for (var zone in zonesAsync.value!) {
      firstLat ??= zone.lat;
      firstLng ??= zone.lng;

      Color markerColor;
      if (zone.status == ZoneStatusEnum.full) {
        markerColor = AppTheme.error;
      } else if (zone.status == ZoneStatusEnum.limited) {
        markerColor = Colors.orange;
      } else {
        markerColor = AppTheme.primary;
      }

      final zoneImage = await MapUtils.getBytesFromIcon(Icons.local_parking, markerColor, 84);

      options.add(PointAnnotationOptions(
        geometry: Point(coordinates: Position(zone.lng, zone.lat)),
        image: zoneImage,
        textField: zone.name,
        textColor: Colors.black.value,
        textOffset: [0.0, 1.5],
      ));
    }

      // Always add current location
      final myLocImage = await MapUtils.getBytesFromIcon(Icons.my_location, Colors.red, 64);
      options.add(PointAnnotationOptions(
        geometry: Point(coordinates: Position(3.4622, 6.8268)),
        image: myLocImage,
        textField: 'You Are Here',
        textColor: Colors.red.value,
        textOffset: [0.0, -1.5],
      ));

      if (options.isNotEmpty) {
        await pointAnnotationManager!.createMulti(options);
      if (firstLat != null && firstLng != null && mapboxMap != null) {
        mapboxMap!.setCamera(CameraOptions(
          center: Point(coordinates: Position(firstLng!, firstLat!)),
          zoom: 16.0,
        ));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    ref.listen(parkingZonesProvider, (previous, next) {
      if (next is AsyncData) {
        _plotZones();
      }
    });

    final zonesAsync = ref.watch(parkingZonesProvider);

    return ResponsiveScaffold(
      title: 'Parking Availability',
      subtitle: 'Central Hub',
      isWarden: false,
      currentIndex: 2,
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/role-select'),
        AppNavigationDestination(label: 'Map', icon: Icons.map, route: '/map'),
        AppNavigationDestination(label: 'Parking', icon: Icons.local_parking, route: '/zone-list'),
        AppNavigationDestination(label: 'Profile', icon: Icons.person, route: '/role-select'),
      ],
      body: Stack(
        children: [
          // Real Mapbox Map
          Positioned.fill(
            child: MapWidget(
              cameraOptions: CameraOptions(
                center: Point(coordinates: Position(3.4622, 6.8268)),
                zoom: 15.0,
              ),
              onMapCreated: _onMapCreated,
            ),
          ),

          // Legend
          if (MediaQuery.of(context).size.width > 768)
            Positioned(
              top: 32,
              right: 32,
              child: Container(
                width: 200,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: AppTheme.surface.withOpacity(0.9),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: AppTheme.outlineVariant),
                  boxShadow: [
                    BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 16, offset: const Offset(0, 4)),
                  ],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Parking Status', style: AppTheme.lightTheme.textTheme.titleMedium),
                    const SizedBox(height: 12),
                    _buildLegendItem(AppTheme.primary, 'Available'),
                    const SizedBox(height: 8),
                    _buildLegendItem(Colors.orange, 'Limited (>80%)'),
                    const SizedBox(height: 8),
                    _buildLegendItem(AppTheme.error, 'Full / Closed'),
                  ],
                ),
              ),
            ),

          // Floating Action Button
          Positioned(
            bottom: 32,
            left: 0,
            right: 0,
            child: Center(
              child: ElevatedButton.icon(
                onPressed: () => context.push('/zone-list/recommended'),
                icon: const Icon(Icons.near_me),
                label: const Text('Find Nearest Parking'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.secondary,
                  foregroundColor: AppTheme.onSecondary,
                  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(32)),
                  elevation: 8,
                ),
              ),
            ),
          ),
          
          if (zonesAsync is AsyncLoading)
            const Center(child: CircularProgressIndicator()),
        ],
      ),
    );
  }

  Widget _buildLegendItem(Color color, String text) {
    return Row(
      children: [
        Container(width: 12, height: 12, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
        const SizedBox(width: 8),
        Text(text, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
      ],
    );
  }
}
