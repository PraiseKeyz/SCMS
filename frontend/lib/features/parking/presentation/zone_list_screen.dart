import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../../core/widgets/status_badge.dart';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/parking_provider.dart';
import '../domain/models/parking_models.dart';

class ZoneListScreen extends ConsumerWidget {
  const ZoneListScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final zonesAsync = ref.watch(parkingZonesProvider);

    return ResponsiveScaffold(
      title: '[Visitor] Parking Zones',
      subtitle: 'Visitor Portal',
      isWarden: false,
      currentIndex: 2, // Parking index
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/role-select'),
        AppNavigationDestination(label: 'Map', icon: Icons.map, route: '/map'),
        AppNavigationDestination(label: 'Parking', icon: Icons.local_parking, route: '/zone-list'),
        AppNavigationDestination(label: 'Profile', icon: Icons.person, route: '/role-select'),
      ],
      body: RefreshIndicator(
        onRefresh: () async {
          ref.invalidate(parkingZonesProvider);
          await ref.read(parkingZonesProvider.future);
        },
        child: SingleChildScrollView(
          physics: const AlwaysScrollableScrollPhysics(),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
          child: Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 1024),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('[Visitor] Parking Zones', style: AppTheme.lightTheme.textTheme.headlineLarge?.copyWith(color: AppTheme.primary)),
                  const SizedBox(height: 4),
                  Text('Real-time availability across campus', style: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(color: AppTheme.onSurfaceVariant)),
                  const SizedBox(height: 24),

                // Grid Layout
                zonesAsync.when(
                  data: (zones) => LayoutBuilder(
                    builder: (context, constraints) {
                      final crossAxisCount = constraints.maxWidth > 900 ? 3 : (constraints.maxWidth > 600 ? 2 : 1);
                      return GridView.builder(
                        itemCount: zones.length,
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: crossAxisCount,
                          mainAxisSpacing: 16,
                          crossAxisSpacing: 16,
                          childAspectRatio: 0.9,
                        ),
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        itemBuilder: (context, index) {
                          final zone = zones[index];
                          
                          int spots = zone.capacity;
                          double percent = 0.0;
                          BadgeStatus badge = BadgeStatus.secure;
                          String text = 'Available';
                          bool isFull = false;

                          if (zone.status == ZoneStatusEnum.available) {
                            spots = zone.capacity;
                            percent = 0.2;
                            badge = BadgeStatus.secure;
                            text = 'Available';
                          } else if (zone.status == ZoneStatusEnum.limited) {
                            spots = (zone.capacity * 0.1).toInt();
                            percent = 0.9;
                            badge = BadgeStatus.warning;
                            text = 'Limited';
                          } else if (zone.status == ZoneStatusEnum.full) {
                            spots = 0;
                            percent = 1.0;
                            badge = BadgeStatus.critical;
                            text = 'Full';
                            isFull = true;
                          }

                          return _buildZoneCard(
                            title: zone.name,
                            subtitle: zone.label,
                            spots: spots,
                            eta: 'N/A', // Real ETA would require map routing API
                            distance: 'N/A',
                            capacityPercent: percent,
                            status: badge,
                            statusText: text,
                            isFull: isFull,
                            onTap: () {
                              context.push('/route-map', extra: {
                                'lat': zone.lat,
                                'lng': zone.lng,
                                'name': zone.name,
                              });
                            },
                          );
                        },
                      );
                    },
                  ),
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (e, st) => Center(child: Text('Error: $e', style: const TextStyle(color: Colors.red))),
                ),
              ],
            ),
          ),
        ),
      ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => context.push('/zone-list/availability'),
        icon: const Icon(Icons.map),
        label: const Text('Map View'),
        backgroundColor: AppTheme.secondary,
        foregroundColor: AppTheme.onSecondary,
      ),
    );
  }

  Widget _buildZoneCard({
    required String title,
    required String subtitle,
    required int spots,
    required String eta,
    required String distance,
    required double capacityPercent,
    required BadgeStatus status,
    required String statusText,
    bool isFull = false,
    VoidCallback? onTap,
  }) {
    Color progressColor;
    if (status == BadgeStatus.secure) progressColor = AppTheme.statusGreen;
    else if (status == BadgeStatus.warning) progressColor = AppTheme.statusAmber;
    else progressColor = AppTheme.statusRed;

    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.outlineVariant),
        boxShadow: [
          BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Header
          Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          const Icon(Icons.local_parking, color: AppTheme.secondary, size: 20),
                          const SizedBox(width: 8),
                          Expanded(child: Text(title, style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.primary), maxLines: 1, overflow: TextOverflow.ellipsis)),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Text(subtitle, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                    ],
                  ),
                ),
                StatusBadge(status: status, label: statusText),
              ],
            ),
          ),
          const Divider(height: 1, color: AppTheme.outlineVariant),
          
          // Body
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(spots.toString(), style: AppTheme.lightTheme.textTheme.displayLarge?.copyWith(color: AppTheme.primary)),
                          Text('Spots Available', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                        ],
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Row(
                            children: [
                              const Icon(Icons.directions_walk, size: 18, color: AppTheme.primary),
                              const SizedBox(width: 4),
                              Text(eta, style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.primary)),
                            ],
                          ),
                          Text('to Campus Center', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                        ],
                      ),
                    ],
                  ),
                  const Spacer(),
                  // Progress Bar
                  Container(
                    height: 8,
                    decoration: BoxDecoration(
                      color: AppTheme.surfaceContainerHighest,
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: FractionallySizedBox(
                        widthFactor: capacityPercent,
                        child: Container(
                          decoration: BoxDecoration(
                            color: progressColor,
                            borderRadius: BorderRadius.circular(4),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Footer
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: const BoxDecoration(
              color: AppTheme.surfaceContainerLowest,
              borderRadius: BorderRadius.vertical(bottom: Radius.circular(16)),
              border: Border(top: BorderSide(color: AppTheme.outlineVariant)),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    const Icon(Icons.near_me, size: 16, color: AppTheme.onSurfaceVariant),
                    const SizedBox(width: 4),
                    Text(distance, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                  ],
                ),
                if (isFull)
                  Row(
                    children: [
                      Text('Lot Full', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                    ],
                  )
                else
                  Row(
                    children: [
                      Text('Navigate', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.secondary)),
                      const SizedBox(width: 4),
                      const Icon(Icons.arrow_forward, size: 16, color: AppTheme.secondary),
                    ],
                  ),
              ],
            ),
          ),
        ],
      ),
    ),
    );
  }
}
