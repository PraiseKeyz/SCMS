import 'package:flutter/material.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class RecommendedParkingScreen extends StatelessWidget {
  const RecommendedParkingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
      body: SingleChildScrollView(
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
                Container(
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
                        child: Stack(
                          fit: StackFit.expand,
                          children: [
                            Image.network(
                              'https://lh3.googleusercontent.com/aida-public/AB6AXuCJg3KVeID2NqABnanvF2K5ibYIf_-GWbm5B2ne077wl3hsGiGqznk3WHP-bMkAmHqTgg51sPUVEBMXvBFYZQiydjpBGmRODKU13dQ0UdDJTElT8-t-LXwDI0vB_Ykpl_nGG2Wl9pvfPlGGCv6jwLNOUAAe6wbY-8WuJUGPMlpOq1ChWRvZYT_zVpsenuNzcv9P_wyUSxgDsQidY4Eeycp-GO8x9EU26dkYP_oK2_qNR7TwwNPZlRjgTnUrqLBsazXhevQpxBWIfGgC',
                              fit: BoxFit.cover,
                            ),
                            // Destination Pin
                            Positioned(
                              top: 50,
                              left: 60,
                              child: Column(
                                children: [
                                  Container(
                                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                    decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(4)),
                                    child: const Text('Destination', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold)),
                                  ),
                                  const Icon(Icons.location_on, color: AppTheme.primary, size: 32),
                                ],
                              ),
                            ),
                            // Parking Pin
                            Positioned(
                              bottom: 40,
                              right: 100,
                              child: Column(
                                children: [
                                  Container(
                                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                    decoration: BoxDecoration(color: AppTheme.secondary, borderRadius: BorderRadius.circular(4)),
                                    child: const Text('North Lot', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: AppTheme.onSecondary)),
                                  ),
                                  Container(
                                    width: 32,
                                    height: 32,
                                    decoration: BoxDecoration(
                                      color: AppTheme.secondary,
                                      borderRadius: BorderRadius.circular(8),
                                      border: Border.all(color: Colors.white, width: 2),
                                    ),
                                    child: const Center(child: Text('P', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold))),
                                  ),
                                ],
                              ),
                            ),
                          ],
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
                                    Text('North Visitor Lot', style: AppTheme.lightTheme.textTheme.titleMedium),
                                    const SizedBox(height: 4),
                                    Row(
                                      children: [
                                        const Icon(Icons.directions_walk, size: 16, color: AppTheme.onSurfaceVariant),
                                        const SizedBox(width: 4),
                                        Text('Est. 5 mins walk • 0.2 miles', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
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
                                      const Text('25% Full', style: TextStyle(color: Colors.green, fontSize: 12, fontWeight: FontWeight.bold)),
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
                                    onPressed: () {},
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
                        Expanded(flex: isDesktop ? 1 : 0, child: _buildAlternativeCard('East Parking Deck', '80% Full', Colors.orange, '0.5 miles', '12 mins')),
                        if (isDesktop) const SizedBox(width: 24) else const SizedBox(height: 16),
                        Expanded(flex: isDesktop ? 1 : 0, child: _buildAlternativeCard('South Garage', '95% Full', Colors.red, '0.8 miles', '18 mins')),
                      ],
                    );
                  },
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildAlternativeCard(String title, String statusText, Color statusColor, String distance, String walkTime) {
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
            onPressed: () {},
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
