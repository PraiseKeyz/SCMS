import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class ParkingAvailabilityScreen extends StatefulWidget {
  const ParkingAvailabilityScreen({Key? key}) : super(key: key);

  @override
  State<ParkingAvailabilityScreen> createState() => _ParkingAvailabilityScreenState();
}

class _ParkingAvailabilityScreenState extends State<ParkingAvailabilityScreen> {
  Map<String, dynamic>? _selectedZone;

  void _showZoneInfo(String title, String statusText, String distance, Color colorType) {
    setState(() {
      _selectedZone = {
        'title': title,
        'statusText': statusText,
        'distance': distance,
        'color': colorType,
        'occupancy': statusText.replaceAll(RegExp(r'[^0-9]'), '') + '%',
      };
    });
  }

  void _hideZoneInfo() {
    setState(() {
      _selectedZone = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'Parking Availability',
      subtitle: 'Central Hub',
      isWarden: false,
      currentIndex: 1, // Parking index in Visitor is usually 1 if map is 1? Wait, in visitor, Parking is index 2.
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/role-select'),
        AppNavigationDestination(label: 'Map', icon: Icons.map, route: '/map'),
        AppNavigationDestination(label: 'Parking', icon: Icons.local_parking, route: '/zone-list'),
        AppNavigationDestination(label: 'Profile', icon: Icons.person, route: '/role-select'),
      ],
      body: Stack(
        children: [
          // Map Background
          Positioned.fill(
            child: Image.network(
              'https://lh3.googleusercontent.com/aida-public/AB6AXuC_1cz2xp80uUqMS3o2tPzBzWNrsaf69jQbH7RLzAS5q584ni9S1H3NcuYU1XzZ_ff9YyLSM1Li3L75xdVbdcszsQwSMpk_GMhDw2uhOaDnXNCGd6J93loA_JdJSAFaT4Sp3QRo8fTwhtJQFAcQGhmA11cg_iMV7bGGe1zlt3RR2DnpQbpVKZglW0Dx-x-FgMjFlbZFxK6KYi1XwPi79dVbiDuVVw0SMkeft1Xias5kE9vtLXjhAYdfzqV_gF5WE-bmgU5gqZkYZjE4',
              fit: BoxFit.cover,
            ),
          ),

          // Map Markers
          Positioned(
            top: MediaQuery.of(context).size.height * 0.25,
            left: MediaQuery.of(context).size.width * 0.20,
            child: GestureDetector(
              onTap: () => _showZoneInfo('North Lot', '85% Available', '1.2 km', Colors.green),
              child: _buildMapMarker(Colors.green),
            ),
          ),
          Positioned(
            top: MediaQuery.of(context).size.height * 0.45,
            right: MediaQuery.of(context).size.width * 0.30,
            child: GestureDetector(
              onTap: () => _showZoneInfo('East Structure', '15% Available', '0.5 km', Colors.orange),
              child: _buildMapMarker(Colors.orange),
            ),
          ),
          Positioned(
            bottom: MediaQuery.of(context).size.height * 0.35,
            left: MediaQuery.of(context).size.width * 0.40,
            child: GestureDetector(
              onTap: () => _showZoneInfo('South VIP', '0% Available', '0.8 km', Colors.red),
              child: _buildMapMarker(Colors.red),
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
                    _buildLegendItem(Colors.green, 'Available (>20%)'),
                    const SizedBox(height: 8),
                    _buildLegendItem(Colors.orange, 'Limited (<20%)'),
                    const SizedBox(height: 8),
                    _buildLegendItem(Colors.red, 'Full (0%)'),
                  ],
                ),
              ),
            ),

          // Info Card
          if (_selectedZone != null)
            Positioned(
              bottom: 100,
              left: 16,
              right: MediaQuery.of(context).size.width > 768 ? null : 16,
              child: Container(
                width: MediaQuery.of(context).size.width > 768 ? 320 : null,
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: AppTheme.surface,
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(color: Colors.black.withOpacity(0.15), blurRadius: 24, offset: const Offset(0, 8)),
                  ],
                  border: Border.all(color: AppTheme.outlineVariant),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(_selectedZone!['title'], style: AppTheme.lightTheme.textTheme.titleMedium),
                            const SizedBox(height: 4),
                            Text('${_selectedZone!['distance']} away', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                          ],
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                          decoration: BoxDecoration(
                            color: _selectedZone!['color'].withOpacity(0.1),
                            borderRadius: BorderRadius.circular(16),
                          ),
                          child: Row(
                            children: [
                              Container(width: 8, height: 8, decoration: BoxDecoration(color: _selectedZone!['color'], shape: BoxShape.circle)),
                              const SizedBox(width: 4),
                              Text(_selectedZone!['statusText'], style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: _selectedZone!['color'])),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    const Divider(height: 1, color: AppTheme.outlineVariant),
                    const SizedBox(height: 16),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text('Occupancy', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                        Text(_selectedZone!['occupancy'], style: AppTheme.lightTheme.textTheme.titleMedium),
                      ],
                    ),
                    const SizedBox(height: 16),
                    Row(
                      children: [
                        Expanded(
                          child: ElevatedButton(
                            onPressed: () {},
                            style: ElevatedButton.styleFrom(
                              backgroundColor: AppTheme.secondary,
                              foregroundColor: AppTheme.onSecondary,
                              padding: const EdgeInsets.symmetric(vertical: 16),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                            ),
                            child: const Text('Navigate'),
                          ),
                        ),
                        const SizedBox(width: 8),
                        IconButton(
                          onPressed: _hideZoneInfo,
                          icon: const Icon(Icons.close),
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
        ],
      ),
    );
  }

  Widget _buildMapMarker(Color color) {
    return Container(
      width: 32,
      height: 32,
      decoration: BoxDecoration(
        color: color,
        shape: BoxShape.circle,
        border: Border.all(color: Colors.white, width: 2),
        boxShadow: [
          BoxShadow(color: color.withOpacity(0.4), blurRadius: 12, spreadRadius: 4),
        ],
      ),
      child: const Icon(Icons.local_parking, color: Colors.white, size: 16),
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
