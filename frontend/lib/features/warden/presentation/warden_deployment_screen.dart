import 'package:flutter/material.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class WardenDeploymentScreen extends StatefulWidget {
  const WardenDeploymentScreen({Key? key}) : super(key: key);

  @override
  State<WardenDeploymentScreen> createState() => _WardenDeploymentScreenState();
}

class _WardenDeploymentScreenState extends State<WardenDeploymentScreen> {
  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'Warden Deployment',
      subtitle: 'Central Hub',
      isWarden: true,
      currentIndex: 1, // Deployment
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/warden-dashboard'),
        AppNavigationDestination(label: 'Deployment', icon: Icons.assignment, route: '/warden-dashboard/deployment'),
        AppNavigationDestination(label: 'Incidents', icon: Icons.assessment, route: '/incident-report'),
        AppNavigationDestination(label: 'Status', icon: Icons.shield, route: '/warden-dashboard/deployment'),
      ],
      body: Stack(
        children: [
          // Map Background
          Positioned.fill(
            child: Image.network(
              'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
              fit: BoxFit.cover,
            ),
          ),
          Positioned.fill(
            child: Container(color: AppTheme.surfaceContainerLow.withOpacity(0.5)),
          ),

          // Map Markers
          Positioned(
            top: MediaQuery.of(context).size.height * 0.25,
            left: MediaQuery.of(context).size.width * 0.33,
            child: _buildMarker(false),
          ),
          Positioned(
            top: MediaQuery.of(context).size.height * 0.5,
            left: MediaQuery.of(context).size.width * 0.5,
            child: _buildMarker(true),
          ),
          Positioned(
            bottom: MediaQuery.of(context).size.height * 0.33,
            right: MediaQuery.of(context).size.width * 0.25,
            child: _buildMarker(false),
          ),

          // Header Overlay
          Positioned(
            top: 16,
            left: 16,
            right: 16,
            child: Wrap(
              alignment: WrapAlignment.spaceBetween,
              crossAxisAlignment: WrapCrossAlignment.center,
              spacing: 8,
              runSpacing: 8,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  decoration: BoxDecoration(
                    color: AppTheme.surface.withOpacity(0.9),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: AppTheme.outlineVariant),
                    boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 4)],
                  ),
                  child: Row(
                    children: [
                      Text('Warden Deployment', style: AppTheme.lightTheme.textTheme.titleMedium),
                      const SizedBox(width: 12),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.green.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(4),
                          border: Border.all(color: Colors.green.withOpacity(0.3)),
                        ),
                        child: const Row(
                          children: [
                            Icon(Icons.circle, color: Colors.green, size: 8),
                            SizedBox(width: 4),
                            Text('12 Active', style: TextStyle(color: Colors.green, fontSize: 12, fontWeight: FontWeight.bold)),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                ElevatedButton.icon(
                  onPressed: () {},
                  icon: const Icon(Icons.filter_list),
                  label: const Text('Filter Zones'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.surface,
                    foregroundColor: AppTheme.primary,
                    elevation: 2,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                ),
              ],
            ),
          ),

          // Side Panel / Bottom Sheet
          Align(
            alignment: Alignment.centerRight,
            child: Container(
              width: MediaQuery.of(context).size.width > 768 ? 384 : double.infinity,
              height: MediaQuery.of(context).size.width > 768 ? double.infinity : 400,
              decoration: BoxDecoration(
                color: AppTheme.surface,
                borderRadius: MediaQuery.of(context).size.width > 768 ? const BorderRadius.horizontal(left: Radius.circular(24)) : const BorderRadius.vertical(top: Radius.circular(24)),
                boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 16)],
              ),
              child: Column(
                children: [
                  if (MediaQuery.of(context).size.width <= 768)
                    Center(child: Container(margin: const EdgeInsets.symmetric(vertical: 12), width: 48, height: 4, decoration: BoxDecoration(color: AppTheme.outlineVariant, borderRadius: BorderRadius.circular(2)))),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Active Wardens', style: AppTheme.lightTheme.textTheme.titleMedium),
                            Text('Real-time status overview', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                          ],
                        ),
                        IconButton(icon: const Icon(Icons.search), onPressed: () {}),
                      ],
                    ),
                  ),
                  const Divider(height: 1, color: AppTheme.outlineVariant),
                  Expanded(
                    child: ListView(
                      padding: const EdgeInsets.all(16),
                      children: [
                        _buildWardenCard('JS', 'James Smith', 'North Gate • Zone A', 'On Patrol', Colors.green, '2m ago', true),
                        const SizedBox(height: 12),
                        _buildWardenCard('AD', 'Alice Doe', 'Main Lobby • Zone B', 'Stationary', Colors.green, '15m ago', false),
                        const SizedBox(height: 12),
                        _buildWardenCard('MR', 'Mark Reyes', 'South Parking • Zone C', 'Investigating', Colors.orange, '1m ago', false),
                        const SizedBox(height: 12),
                        _buildWardenCard('SJ', 'Sarah Jones', 'East Wing • Zone D', 'On Patrol', Colors.green, '8m ago', false),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: ElevatedButton.icon(
                      onPressed: () {},
                      icon: const Icon(Icons.campaign),
                      label: const Text('Broadcast Message'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppTheme.tertiaryContainer,
                        foregroundColor: AppTheme.onTertiary,
                        minimumSize: const Size(double.infinity, 48),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
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

  Widget _buildMarker(bool isActive) {
    if (isActive) {
      return Stack(
        alignment: Alignment.center,
        children: [
          Container(width: 64, height: 64, decoration: BoxDecoration(color: AppTheme.tertiaryContainer.withOpacity(0.2), shape: BoxShape.circle)),
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(color: AppTheme.tertiaryContainer, shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.2), blurRadius: 8)]),
            child: const Icon(Icons.security, color: Colors.white),
          ),
        ],
      );
    }
    return Container(
      width: 40,
      height: 40,
      decoration: BoxDecoration(color: AppTheme.tertiaryContainer, shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.2), blurRadius: 8)]),
      child: const Icon(Icons.person, color: Colors.white, size: 20),
    );
  }

  Widget _buildWardenCard(String initials, String name, String location, String status, Color statusColor, String lastCheck, bool isSelected) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: isSelected ? Colors.blueGrey.shade50 : AppTheme.surface,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: isSelected ? AppTheme.secondary : AppTheme.outlineVariant),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(color: isSelected ? AppTheme.tertiaryContainer : AppTheme.surfaceTint, shape: BoxShape.circle),
            child: Center(child: Text(initials, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold))),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: AppTheme.lightTheme.textTheme.titleSmall),
                Text(location, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                const SizedBox(height: 8),
                Row(
                  children: [
                    const Icon(Icons.schedule, size: 12, color: AppTheme.onSurfaceVariant),
                    const SizedBox(width: 4),
                    Text('Last check: $lastCheck', style: const TextStyle(fontSize: 10, color: AppTheme.onSurfaceVariant)),
                  ],
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: statusColor.withOpacity(0.1),
              borderRadius: BorderRadius.circular(4),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.circle, color: statusColor, size: 6),
                const SizedBox(width: 4),
                Text(status, style: TextStyle(color: statusColor, fontSize: 10, fontWeight: FontWeight.bold)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
