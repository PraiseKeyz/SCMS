import 'package:flutter/material.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import 'package:go_router/go_router.dart';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mapbox_maps_flutter/mapbox_maps_flutter.dart' hide Size;
import '../../../core/utils/map_utils.dart';
import '../providers/parking_provider.dart';
import '../domain/models/parking_models.dart';

class RecommendedParkingScreen extends ConsumerStatefulWidget {
  const RecommendedParkingScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<RecommendedParkingScreen> createState() => _RecommendedParkingScreenState();
}

class _RecommendedParkingScreenState extends ConsumerState<RecommendedParkingScreen> {
  MapboxMap? mapboxMap;
  PointAnnotationManager? pointAnnotationManager;
  PolylineAnnotationManager? polylineAnnotationManager;
  
  void _drawRoute(double startLat, double startLng, double endLat, double endLng) async {
    if (polylineAnnotationManager == null) return;
    await polylineAnnotationManager!.deleteAll();
    
    await polylineAnnotationManager!.create(PolylineAnnotationOptions(
      geometry: LineString(coordinates: [
        Position(startLng, startLat),
        Position(endLng, endLat)
      ]),
      lineColor: AppTheme.primary.value,
      lineWidth: 5.0,
    ));

    mapboxMap?.setCamera(CameraOptions(
      center: Point(coordinates: Position((startLng + endLng) / 2, (startLat + endLat) / 2)),
      zoom: 14.0,
    ));
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      ref.read(nearestZoneProvider.notifier).findNearestZone(6.8268, 3.4622);
    });
  }

  void _onMapCreated(MapboxMap mapboxMap, double destLat, double destLng, double parkLat, double parkLng, String parkName) async {
    this.mapboxMap = mapboxMap;
    mapboxMap.location.updateSettings(LocationComponentSettings(
      enabled: true, 
      puckBearingEnabled: true,
      pulsingEnabled: true,
      pulsingColor: Colors.red.value,
    ));

    pointAnnotationManager = await mapboxMap.annotations.createPointAnnotationManager();
    polylineAnnotationManager = await mapboxMap.annotations.createPolylineAnnotationManager();

    final destImage = await MapUtils.getBytesFromIcon(Icons.location_on, AppTheme.primary, 48);
    final parkImage = await MapUtils.getBytesFromInitials('P', AppTheme.secondary, 48);

    await pointAnnotationManager!.createMulti([
      PointAnnotationOptions(
        geometry: Point(coordinates: Position(destLng, destLat)),
        image: destImage,
      ),
      PointAnnotationOptions(
        geometry: Point(coordinates: Position(parkLng, parkLat)),
        image: parkImage,
      ),
    ]);
  }

  @override
  Widget build(BuildContext context) {
    final recommendationAsync = ref.watch(nearestZoneProvider);
    final allZonesAsync = ref.watch(parkingZonesProvider);
    return ResponsiveScaffold(
      title: 'Recommended Parking',
      subtitle: 'Central Hub',
      isWarden: false,
      currentIndex: 2, // Parking
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/role-select'),
        AppNavigationDestination(label: 'Map', icon: Icons.map, route: '/map'),
        AppNavigationDestination(label: 'Parking', icon: Icons.local_parking, route: '/zone-list'),
        AppNavigationDestination(label: 'Profile', icon: Icons.person, route: '/role-select'),
      ],
      body: RefreshIndicator(
        onRefresh: () async {
          ref.invalidate(parkingZonesProvider);
          ref.invalidate(nearestZoneProvider);
          await ref.read(parkingZonesProvider.future);
          ref.read(nearestZoneProvider.notifier).findNearestZone(6.8268, 3.4622);
        },
        child: SingleChildScrollView(
          physics: const AlwaysScrollableScrollPhysics(),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 800),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Best Match', style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary)),
                const SizedBox(height: 4),
                Text('Closest availability to your destination.', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                const SizedBox(height: 24),

                // Best Match Card
                recommendationAsync.when(
                  data: (recommendation) {
                    if (recommendation == null) return const Text('No recommendations found.');
                    
                    String bestZoneName = recommendation.recommendedZoneId;
                    String bestZoneStatus = 'Unknown';
                    
                    if (recommendation.rankedZones.isNotEmpty) {
                      bestZoneStatus = recommendation.rankedZones.first['status'] ?? 'Unknown';
                    }

                    // Attempt to lookup name from allZones
                    allZonesAsync.whenData((zones) {
                      final match = zones.where((z) => z.id == recommendation.recommendedZoneId).firstOrNull;
                      if (match != null) bestZoneName = match.name;
                    });

                    return Container(
                      decoration: BoxDecoration(
                        color: AppTheme.surfaceContainerLowest,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: AppTheme.outlineVariant),
                        boxShadow: [
                          BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2)),
                        ],
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Column(
                        children: [
                          // Map Preview
                          SizedBox(
                            height: 200,
                            width: double.infinity,
                            child: allZonesAsync.when(
                              data: (zones) {
                                final match = zones.where((z) => z.id == recommendation.recommendedZoneId).firstOrNull;
                                final parkLat = match?.lat ?? 6.8268;
                                final parkLng = match?.lng ?? 3.4622;
                                return MapWidget(
                                  key: const ValueKey("parkingMap"),
                                  cameraOptions: CameraOptions(
                                    center: Point(coordinates: Position(3.4622, 6.8268)),
                                    zoom: 14.0,
                                  ),
                                  onMapCreated: (map) => _onMapCreated(map, 6.8268, 3.4622, parkLat, parkLng, bestZoneName),
                                );
                              },
                              loading: () => const Center(child: CircularProgressIndicator()),
                              error: (e, st) => const Center(child: Text('Map Error')),
                            ),
                          ),
                          
                          // Card Body
                          Padding(
                            padding: const EdgeInsets.all(24.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(bestZoneName, style: AppTheme.lightTheme.textTheme.titleMedium),
                                        const SizedBox(height: 4),
                                        Row(
                                          children: [
                                            const Icon(Icons.directions_walk, size: 16, color: AppTheme.onSurfaceVariant),
                                            const SizedBox(width: 4),
                                            Text('Recommended', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                                          ],
                                        ),
                                      ],
                                    ),
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                                      decoration: BoxDecoration(
                                        color: Colors.green.withOpacity(0.1),
                                        borderRadius: BorderRadius.circular(16),
                                      ),
                                      child: Row(
                                        children: [
                                          Container(width: 8, height: 8, decoration: const BoxDecoration(color: Colors.green, shape: BoxShape.circle)),
                                          const SizedBox(width: 6),
                                          Text(bestZoneStatus, style: const TextStyle(color: Colors.green, fontSize: 12, fontWeight: FontWeight.bold)),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 24),
                                Row(
                                  children: [
                                    Expanded(
                                      child: ElevatedButton.icon(
                                        onPressed: () {
                                          final match = allZonesAsync.value?.where((z) => z.id == recommendation.recommendedZoneId).firstOrNull;
                                          final pLat = match?.lat ?? 6.8268;
                                          final pLng = match?.lng ?? 3.4622;
                                          context.push('/route-map', extra: {
                                            'lat': pLat,
                                            'lng': pLng,
                                            'name': bestZoneName,
                                          });
                                        },
                                        icon: const Icon(Icons.navigation),
                                        label: const Text('Navigate'),
                                        style: ElevatedButton.styleFrom(
                                          backgroundColor: AppTheme.secondary,
                                          foregroundColor: AppTheme.onSecondary,
                                          padding: const EdgeInsets.symmetric(vertical: 16),
                                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(width: 16),
                                    IconButton(
                                      onPressed: () {},
                                      icon: const Icon(Icons.share),
                                      style: IconButton.styleFrom(
                                        side: const BorderSide(color: AppTheme.outline),
                                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                                        padding: const EdgeInsets.all(16),
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (e, st) => Center(child: Text('Error: $e', style: const TextStyle(color: Colors.red))),
                ),
                
                const SizedBox(height: 32),
                Text('Nearby Alternatives', style: AppTheme.lightTheme.textTheme.titleMedium),
                const SizedBox(height: 16),

                // Alternatives Grid
                LayoutBuilder(
                  builder: (context, constraints) {
                    final isDesktop = constraints.maxWidth > 600;
                    return Flex(
                      direction: isDesktop ? Axis.horizontal : Axis.vertical,
                      children: [
                        Expanded(flex: isDesktop ? 1 : 0, child: _buildAlternativeCard(context, 'East Parking Deck', '80% Full', Colors.orange, '0.5 miles', '12 mins', 6.8270, 3.4630)),
                        if (isDesktop) const SizedBox(width: 24) else const SizedBox(height: 16),
                        Expanded(flex: isDesktop ? 1 : 0, child: _buildAlternativeCard(context, 'South Garage', '95% Full', Colors.red, '0.8 miles', '18 mins', 6.8250, 3.4610)),
                      ],
                    );
                  },
                ),
              ],
            ),
          ),
        ),
      ),
      ),
    );
  }

  Widget _buildAlternativeCard(BuildContext context, String title, String statusText, Color statusColor, String distance, String walkTime, double lat, double lng) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surfaceContainerLowest,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppTheme.outlineVariant),
        boxShadow: [
          BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2)),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(title, style: AppTheme.lightTheme.textTheme.titleMedium),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: statusColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(width: 6, height: 6, decoration: BoxDecoration(color: statusColor, shape: BoxShape.circle)),
                    const SizedBox(width: 4),
                    Text(statusText, style: TextStyle(color: statusColor, fontSize: 10, fontWeight: FontWeight.bold)),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              const Icon(Icons.directions_car, size: 16, color: AppTheme.onSurfaceVariant),
              const SizedBox(width: 8),
              Text('$distance away', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
            ],
          ),
          const SizedBox(height: 4),
          Row(
            children: [
              const Icon(Icons.directions_walk, size: 16, color: AppTheme.onSurfaceVariant),
              const SizedBox(width: 8),
              Text('Est. $walkTime walk', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
            ],
          ),
          const SizedBox(height: 16),
          OutlinedButton.icon(
            onPressed: () {
              context.push('/route-map', extra: {
                'lat': lat,
                'lng': lng,
                'name': title,
              });
            },
            icon: const Icon(Icons.route),
            label: const Text('View Route'),
            style: OutlinedButton.styleFrom(
              foregroundColor: AppTheme.secondary,
              side: const BorderSide(color: AppTheme.outline),
              minimumSize: const Size.fromHeight(40),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            ),
          ),
        ],
      ),
    );
  }
}
