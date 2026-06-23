import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mapbox_maps_flutter/mapbox_maps_flutter.dart';
import '../providers/campus_provider.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../../core/utils/map_utils.dart';
import '../../../core/config.dart';

class MapHomeScreen extends ConsumerStatefulWidget {
  const MapHomeScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<MapHomeScreen> createState() => _MapHomeScreenState();
}

class _MapHomeScreenState extends ConsumerState<MapHomeScreen> {
  MapboxMap? mapboxMap;
  PointAnnotationManager? pointAnnotationManager;
  String _selectedFilter = 'All';
  
  _onMapCreated(MapboxMap mapboxMap) async {
    this.mapboxMap = mapboxMap;
    mapboxMap.location.updateSettings(LocationComponentSettings(
      enabled: true, 
      puckBearingEnabled: true,
      pulsingEnabled: true,
      pulsingColor: Colors.red.value,
    ));

    pointAnnotationManager = await mapboxMap.annotations.createPointAnnotationManager();
    _plotData();
  }

  Future<void> _plotData() async {
    if (pointAnnotationManager == null) return;
    
    final mapBundleAsync = ref.read(mapBundleProvider);
    if (mapBundleAsync is AsyncData) {
      final bundle = mapBundleAsync.value!;
      final gates = bundle['gates'] as List<dynamic>? ?? [];
      final landmarks = bundle['landmarks'] as List<dynamic>? ?? [];
      final zonesGeoJson = bundle['zones'] as Map<String, dynamic>?;
      final zoneFeatures = zonesGeoJson?['features'] as List<dynamic>? ?? [];
      
      await pointAnnotationManager!.deleteAll();
      
      final gateImage = await MapUtils.getBytesFromIcon(Icons.meeting_room, AppTheme.primary, 84);
      final landmarkImage = await MapUtils.getBytesFromIcon(Icons.place, AppTheme.secondary, 84);
      final zoneImage = await MapUtils.getBytesFromIcon(Icons.local_parking, AppTheme.primaryContainer, 84);
      
      List<PointAnnotationOptions> options = [];

      if (_selectedFilter == 'All' || _selectedFilter == 'Gates') {
        for (var g in gates) {
          if (g['latitude'] != null && g['longitude'] != null) {
            final lat = double.tryParse(g['latitude'].toString()) ?? 0.0;
            final lng = double.tryParse(g['longitude'].toString()) ?? 0.0;
            options.add(PointAnnotationOptions(
              geometry: Point(coordinates: Position(lng, lat)),
              image: gateImage,
            ));
          }
        }
      }
      
      if (_selectedFilter == 'All' || _selectedFilter == 'Landmarks') {
        for (var l in landmarks) {
          if (l['latitude'] != null && l['longitude'] != null) {
            final lat = double.tryParse(l['latitude'].toString()) ?? 0.0;
            final lng = double.tryParse(l['longitude'].toString()) ?? 0.0;
            options.add(PointAnnotationOptions(
              geometry: Point(coordinates: Position(lng, lat)),
              image: landmarkImage,
            ));
          }
        }
      }

      if (_selectedFilter == 'All' || _selectedFilter == 'Zones') {
        for (var f in zoneFeatures) {
          final geometry = f['geometry'];
          if (geometry != null && geometry['type'] == 'Polygon') {
            final coords = geometry['coordinates'] as List<dynamic>?;
            if (coords != null && coords.isNotEmpty) {
              final ring = coords[0] as List<dynamic>;
              if (ring.isNotEmpty) {
                final point = ring[0] as List<dynamic>;
                final lng = (point[0] as num).toDouble();
                final lat = (point[1] as num).toDouble();
                options.add(PointAnnotationOptions(
                  geometry: Point(coordinates: Position(lng, lat)),
                  image: zoneImage,
                ));
              }
            }
          }
        }
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
        pointAnnotationManager!.createMulti(options);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    ref.listen(mapBundleProvider, (previous, next) {
      if (next is AsyncData) {
        _plotData();
      }
    });

    // Determine screen size for responsive padding
    final isDesktop = MediaQuery.of(context).size.width >= 768;
    final mapBundleAsync = ref.watch(mapBundleProvider);

    return ResponsiveScaffold(
      title: 'Campus Map',
      subtitle: 'Central Hub',
      actions: [
        IconButton(
          icon: const Icon(Icons.refresh),
          onPressed: () {
            ref.invalidate(mapBundleProvider);
          },
        ),
      ],
      isWarden: false,
      currentIndex: 1, // Map index
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/role-select'),
        AppNavigationDestination(label: 'Map', icon: Icons.map, route: '/map'),
        AppNavigationDestination(label: 'Parking', icon: Icons.local_parking, route: '/zone-list'),
        AppNavigationDestination(label: 'Profile', icon: Icons.person, route: '/role-select'),
      ],
      body: Stack(
        children: [
          Positioned.fill(
            child: MapWidget(
              key: const ValueKey("mapWidget"),
              cameraOptions: CameraOptions(
                center: Point(coordinates: Position(3.4622, 6.8268)),
                zoom: 15.0,
              ),
              onMapCreated: _onMapCreated,
            ),
          ),

          // Floating Search & Filters
          Positioned(
            top: isDesktop ? 32 : 16,
            left: isDesktop ? 32 : 16,
            right: isDesktop ? null : 16,
            width: isDesktop ? 384 : null, // 384 = 96 * 4 (w-96 in tailwind)
            child: Container(
              decoration: BoxDecoration(
                color: AppTheme.surface.withOpacity(0.85),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: Colors.white.withOpacity(0.3)),
                boxShadow: [
                  BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 16),
                ],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: BackdropFilter(
                  filter: ColorFilter.mode(AppTheme.surface.withOpacity(0.1), BlendMode.srcOver),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      // Search Bar
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                        child: Row(
                          children: [
                            const Icon(Icons.search, color: AppTheme.onSurfaceVariant),
                            const SizedBox(width: 12),
                            Expanded(
                              child: TextField(
                                decoration: InputDecoration.collapsed(
                                  hintText: 'Search campus...',
                                  hintStyle: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(
                                    color: AppTheme.onSurfaceVariant.withOpacity(0.5),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Divider(height: 1, color: AppTheme.outlineVariant.withOpacity(0.2)),
                      // Filters
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        padding: const EdgeInsets.all(12),
                        child: Row(
                          children: [
                            _buildFilterChip(icon: Icons.all_inclusive, label: 'All', isSelected: _selectedFilter == 'All', onSelected: () => _updateFilter('All')),
                            const SizedBox(width: 8),
                            _buildFilterChip(icon: Icons.local_parking, label: 'Zones', isSelected: _selectedFilter == 'Zones', onSelected: () => _updateFilter('Zones')),
                            const SizedBox(width: 8),
                            _buildFilterChip(icon: Icons.meeting_room, label: 'Gates', isSelected: _selectedFilter == 'Gates', onSelected: () => _updateFilter('Gates')),
                            const SizedBox(width: 8),
                            _buildFilterChip(icon: Icons.place, label: 'Landmarks', isSelected: _selectedFilter == 'Landmarks', onSelected: () => _updateFilter('Landmarks')),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),

          // Example Map Markers Overlay
          mapBundleAsync.when(
            data: (bundle) {
              final gates = bundle['gates'] as List<dynamic>? ?? [];
              final landmarks = bundle['landmarks'] as List<dynamic>? ?? [];
              return Positioned(
                bottom: 32,
                left: isDesktop ? 32 : 16,
                right: isDesktop ? null : 16,
                child: Container(
                  width: isDesktop ? 384 : null,
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: AppTheme.surface.withOpacity(0.95),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: AppTheme.outlineVariant),
                    boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 16)],
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text('Campus Data Loaded', style: AppTheme.lightTheme.textTheme.titleMedium),
                      const SizedBox(height: 8),
                      Text('${gates.length} Gates, ${landmarks.length} Landmarks', style: AppTheme.lightTheme.textTheme.bodyMedium),
                    ],
                  ),
                ),
              );
            },
            loading: () => const Positioned(
              bottom: 32, left: 32,
              child: CircularProgressIndicator(),
            ),
            error: (e, st) => Positioned(
              bottom: 32, left: 32,
              child: Text('Error loading map data: $e', style: TextStyle(color: Colors.red)),
            ),
          ),
        ],
      ),
    );
  }

  void _updateFilter(String filter) {
    setState(() => _selectedFilter = filter);
    _plotData();
  }

  Widget _buildFilterChip({required IconData icon, required String label, required bool isSelected, required VoidCallback onSelected}) {
    return GestureDetector(
      onTap: onSelected,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: isSelected ? AppTheme.secondary : AppTheme.surfaceContainerHigh,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: isSelected ? AppTheme.secondary : AppTheme.outlineVariant.withOpacity(0.2)),
          boxShadow: isSelected ? [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 2)] : null,
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 18, color: isSelected ? AppTheme.onSecondary : AppTheme.onSurface),
            const SizedBox(width: 6),
            Text(
              label,
              style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(
                color: isSelected ? AppTheme.onSecondary : AppTheme.onSurface,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
