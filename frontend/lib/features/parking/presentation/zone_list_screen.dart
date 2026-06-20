import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../../core/widgets/status_badge.dart';

class ZoneListScreen extends StatelessWidget {
  const ZoneListScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1024),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Controls Area
                LayoutBuilder(
                  builder: (context, constraints) {
                    final isDesktop = constraints.maxWidth > 600;
                    final buttons = Container(
                      decoration: BoxDecoration(
                        color: AppTheme.surfaceContainer,
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: AppTheme.outlineVariant),
                      ),
                      padding: const EdgeInsets.all(4),
                      child: Row(
                        mainAxisSize: isDesktop ? MainAxisSize.min : MainAxisSize.max,
                        children: [
                          Expanded(
                            flex: isDesktop ? 0 : 1,
                            child: Container(
                              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                              decoration: BoxDecoration(
                                color: AppTheme.surface,
                                borderRadius: BorderRadius.circular(6),
                                boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 2)],
                              ),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  const Icon(Icons.sort, size: 18, color: AppTheme.primary),
                                  const SizedBox(width: 8),
                                  Text('Nearest', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.primary)),
                                ],
                              ),
                            ),
                          ),
                          Expanded(
                            flex: isDesktop ? 0 : 1,
                            child: Container(
                              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  const Icon(Icons.check_circle, size: 18, color: AppTheme.onSurfaceVariant),
                                  const SizedBox(width: 8),
                                  Text('Most Available', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    );

                    if (isDesktop) {
                      return Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('[Visitor] Parking Zones', style: AppTheme.lightTheme.textTheme.headlineLarge?.copyWith(color: AppTheme.primary)),
                              const SizedBox(height: 4),
                              Text('Real-time availability across campus', style: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(color: AppTheme.onSurfaceVariant)),
                            ],
                          ),
                          buttons,
                        ],
                      );
                    } else {
                      return buttons;
                    }
                  },
                ),
                
                const SizedBox(height: 24),

                // Grid Layout
                LayoutBuilder(
                  builder: (context, constraints) {
                    final crossAxisCount = constraints.maxWidth > 900 ? 3 : (constraints.maxWidth > 600 ? 2 : 1);
                    return GridView.count(
                      crossAxisCount: crossAxisCount,
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      mainAxisSpacing: 16,
                      crossAxisSpacing: 16,
                      childAspectRatio: 0.9, // Adjust ratio for mobile/desktop
                      children: [
                        _buildZoneCard(
                          title: 'North Visitor Lot',
                          subtitle: 'Main Entrance',
                          spots: 145,
                          eta: '5 min',
                          distance: '0.2 miles away',
                          capacityPercent: 0.25,
                          status: BadgeStatus.secure,
                          statusText: '25% Full',
                          onTap: () => context.push('/zone-list/availability'),
                        ),
                        _buildZoneCard(
                          title: 'East Parking Deck',
                          subtitle: 'Science Block',
                          spots: 42,
                          eta: '12 min',
                          distance: '0.5 miles away',
                          capacityPercent: 0.78,
                          status: BadgeStatus.warning,
                          statusText: '60% Full',
                          onTap: () => context.push('/zone-list/availability'),
                        ),
                        _buildZoneCard(
                          title: 'South Library Lot',
                          subtitle: 'Arts Quarter',
                          spots: 2,
                          eta: '2 min',
                          distance: '0.8 miles away',
                          capacityPercent: 0.98,
                          status: BadgeStatus.critical,
                          statusText: '98% Full',
                          isFull: true,
                          onTap: () => context.push('/zone-list/availability'),
                        ),
                      ],
                    );
                  },
                ),
              ],
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
