import 'package:flutter/material.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import 'package:go_router/go_router.dart';

class LandmarkDetailsScreen extends StatefulWidget {
  const LandmarkDetailsScreen({Key? key}) : super(key: key);

  @override
  State<LandmarkDetailsScreen> createState() => _LandmarkDetailsScreenState();
}

class _LandmarkDetailsScreenState extends State<LandmarkDetailsScreen> {
  bool _isNavigating = false;

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'Landmark Details',
      subtitle: 'Campus Directory',
      isWarden: false,
      currentIndex: 1, // Map
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/role-select'),
        AppNavigationDestination(label: 'Map', icon: Icons.map, route: '/map'),
        AppNavigationDestination(label: 'Parking', icon: Icons.local_parking, route: '/zone-list'),
        AppNavigationDestination(label: 'Profile', icon: Icons.person, route: '/role-select'),
      ],
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero Image
            SizedBox(
              height: 256,
              width: double.infinity,
              child: Stack(
                fit: StackFit.expand,
                children: [
                  Image.network(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDxyDsQXEM7Q96AcWdzrzZ_aX7RLNiWRZK-58iXmqNE3hnOHlHHCBXz-D3bj_JvKRQSb60kF06_uHOMDwbYBHJCl8Ib_PQdY2doBKlFBLZVl9KOqlX_C5Qo5UIz3oEAz5-gwpjJNRKAFLBbWE76ya09_f59N-aIHzfSxjkTO4CW16K9NWMg_Fzr9Teum4Ez2hmwyEhL_V7zTEiliF2mzcB36st6OW3H3dQnmLjb6wCVmW1MBukha7iJ6_A1cvEO4Sfcg1e951zhvj3R',
                    fit: BoxFit.cover,
                  ),
                  Container(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.bottomCenter,
                        end: Alignment.topCenter,
                        colors: [Colors.black.withOpacity(0.6), Colors.transparent],
                      ),
                    ),
                  ),
                  Positioned(
                    bottom: 16,
                    left: 16,
                    child: Text(
                      'Main Library',
                      style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(
                        color: AppTheme.onPrimary,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
            ),

            // Content
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Quick Info Row
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: AppTheme.surfaceContainerLowest,
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: AppTheme.outlineVariant),
                    ),
                    child: Row(
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('STATUS', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant, fontSize: 10, letterSpacing: 1.2)),
                              const SizedBox(height: 4),
                              Row(
                                children: [
                                  Container(width: 8, height: 8, decoration: const BoxDecoration(color: AppTheme.secondary, shape: BoxShape.circle)),
                                  const SizedBox(width: 6),
                                  Text('Open', style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.secondary, fontWeight: FontWeight.bold)),
                                ],
                              ),
                            ],
                          ),
                        ),
                        Container(width: 1, height: 32, color: AppTheme.outlineVariant),
                        Expanded(
                          child: Padding(
                            padding: const EdgeInsets.only(left: 16.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('CLOSES AT', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant, fontSize: 10, letterSpacing: 1.2)),
                                const SizedBox(height: 4),
                                Text('10:00 PM', style: AppTheme.lightTheme.textTheme.bodyMedium),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 24),

                  // About
                  Text('About', style: AppTheme.lightTheme.textTheme.titleMedium),
                  const SizedBox(height: 8),
                  Text(
                    'The central hub for academic resources, featuring quiet study zones, collaborative workspaces, and an extensive physical and digital collection. Located in the heart of the North Campus.',
                    style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant, height: 1.5),
                  ),
                  const SizedBox(height: 24),

                  // Navigation Section
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: AppTheme.surfaceContainerLow,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: AppTheme.outlineVariant),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('Directions', style: AppTheme.lightTheme.textTheme.titleMedium),
                                const SizedBox(height: 4),
                                Text('Est. walk: 8 mins (0.4 mi)', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                              ],
                            ),
                            const Icon(Icons.directions_walk, color: AppTheme.secondary),
                          ],
                        ),
                        const SizedBox(height: 16),
                        
                        ElevatedButton.icon(
                          onPressed: () {
                            setState(() {
                              _isNavigating = !_isNavigating;
                            });
                          },
                          icon: Icon(_isNavigating ? Icons.close : Icons.navigation),
                          label: Text(_isNavigating ? 'Cancel Navigation' : 'Start Navigation'),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: _isNavigating ? AppTheme.surfaceVariant : AppTheme.secondary,
                            foregroundColor: _isNavigating ? AppTheme.onSurface : AppTheme.onSecondary,
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            elevation: 0,
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                          ),
                        ),

                        if (_isNavigating) ...[
                          const SizedBox(height: 16),
                          Container(
                            height: 200,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(color: AppTheme.outlineVariant),
                              image: const DecorationImage(
                                image: NetworkImage('https://lh3.googleusercontent.com/aida-public/AB6AXuBYtHEiPvJk1_5wEX-BiaqUG8DR5yWbkdWcqGPpBMyvvq1fLzDi0XDwPSbgOuQGhyophkwFL10LBEHH-uHsyBTPAZYT38C14hfHDRZbyjvUDQ1_bG5vRmIAgRuU0lVx5RX0HCR8-XqjEzW1btkH5y3abUZrJYj7uOsQ2nN-OjR_tYbeQIvDrBjIN-LM_kHy2eNvmjKEtcYHESfwDuLFn8iQnLN0yYbb4VAqlmhRDn7dd3EXxbsUJnqKx-dHoSD9n3Kbz9A9wgaTJ-IX'),
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        ]
                      ],
                    ),
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
