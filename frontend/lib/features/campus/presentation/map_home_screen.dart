import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mapbox_maps_flutter/mapbox_maps_flutter.dart';
import '../providers/campus_provider.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../../core/config.dart';

class MapHomeScreen extends ConsumerStatefulWidget {
  const MapHomeScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<MapHomeScreen> createState() => _MapHomeScreenState();
}

class _MapHomeScreenState extends ConsumerState<MapHomeScreen> {
  MapboxMap? mapboxMap;
  
  _onMapCreated(MapboxMap mapboxMap) {
    this.mapboxMap = mapboxMap;
  }

  @override
  Widget build(BuildContext context) {
    // Determine screen size for responsive padding
    final isDesktop = MediaQuery.of(context).size.width >= 768;

    return ResponsiveScaffold(
      title: '[Visitor] Campus Map',
      subtitle: 'Central Hub',
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
                center: Point(coordinates: Position(-0.1276, 51.5072)),
                zoom: 14.0,
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
                            _buildFilterChip(icon: Icons.local_parking, label: 'Parking', isSelected: false),
                            const SizedBox(width: 8),
                            _buildFilterChip(icon: Icons.meeting_room, label: 'Gates', isSelected: true),
                            const SizedBox(width: 8),
                            _buildFilterChip(icon: Icons.stadium, label: 'Venues', isSelected: false),
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
          Positioned(
            top: MediaQuery.of(context).size.height * 0.3,
            left: MediaQuery.of(context).size.width * 0.25,
            child: FractionalTranslation(
              translation: const Offset(-0.5, -1.0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: AppTheme.surface,
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: AppTheme.outlineVariant.withOpacity(0.2)),
                      boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 4)],
                    ),
                    child: Text('Main Gate', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurface)),
                  ),
                  const SizedBox(height: 4),
                  Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: AppTheme.secondary,
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(12), bottom: Radius.circular(8)),
                      border: Border.all(color: AppTheme.surface, width: 2),
                      boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.2), blurRadius: 8)],
                    ),
                    child: const Icon(Icons.meeting_room, color: AppTheme.onSecondary),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFilterChip({required IconData icon, required String label, required bool isSelected}) {
    return Container(
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
    );
  }
}
