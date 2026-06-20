import 'package:flutter/material.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class CampusConfigScreen extends StatefulWidget {
  const CampusConfigScreen({Key? key}) : super(key: key);

  @override
  State<CampusConfigScreen> createState() => _CampusConfigScreenState();
}

class _CampusConfigScreenState extends State<CampusConfigScreen> {
  int _selectedTab = 0;

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'SCMS',
      subtitle: 'Admin Portal',
      isWarden: true, // We reuse warden for Admin? No, let's just set it to false so it uses standard color, but we can override it. Or just use `true` for staff color. The template has dark sidebar. Admin is `isWarden: true` typically for staff? Let's use false because it doesn't matter much.
      currentIndex: 3, // Config
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/admin/audit-logs'), // we don't have dashboard, audit logs is index 0
        AppNavigationDestination(label: 'Users', icon: Icons.people, route: '/admin/user-management'),
        AppNavigationDestination(label: 'Reports', icon: Icons.analytics, route: '/admin/audit-logs'),
        AppNavigationDestination(label: 'Config', icon: Icons.settings, route: '/admin/campus-config'),
      ],
      body: Stack(
        children: [
          SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 1000),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Campus Configuration', style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary, fontWeight: FontWeight.bold)),
                    const SizedBox(height: 4),
                    Text('Manage physical campus assets, access points, and spatial zones.', style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                    const SizedBox(height: 24),

                    // Tabs
                    Container(
                      decoration: const BoxDecoration(
                        border: Border(bottom: BorderSide(color: AppTheme.outlineVariant)),
                      ),
                      child: SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          children: [
                            _buildTab(0, 'Zones'),
                            const SizedBox(width: 24),
                            _buildTab(1, 'Gates'),
                            const SizedBox(width: 24),
                            _buildTab(2, 'Landmarks'),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 24),

                    // List View
                    if (_selectedTab == 0) ...[
                      _buildConfigCard('Academic Quad', 'Primary instruction area. High traffic during day hours.', Icons.domain, Colors.green, 'Active', 'Cap: 5,000', 'Open', Icons.lock_open),
                      const SizedBox(height: 16),
                      _buildConfigCard('Research Park North', 'Secure lab facilities. Level 3 access required.', Icons.science, AppTheme.outline, 'Restricted', 'Cap: 800', 'Secured', Icons.lock),
                      const SizedBox(height: 16),
                      _buildConfigCard('Visitor Lot B', 'South entrance public parking. Currently under resurfacing.', Icons.local_parking, AppTheme.error, 'Maintenance', 'Cap: 350', 'Closed', Icons.block),
                    ] else ...[
                      const Padding(
                        padding: EdgeInsets.all(32),
                        child: Center(child: Text('Content for this tab is not available yet.')),
                      ),
                    ],
                    const SizedBox(height: 80),
                  ],
                ),
              ),
            ),
          ),
          Positioned(
            bottom: 32,
            right: 32,
            child: FloatingActionButton(
              onPressed: () {},
              backgroundColor: AppTheme.primaryContainer,
              foregroundColor: AppTheme.onPrimaryContainer,
              child: const Icon(Icons.add),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTab(int index, String title) {
    final isSelected = _selectedTab == index;
    return GestureDetector(
      onTap: () => setState(() => _selectedTab = index),
      child: Container(
        padding: const EdgeInsets.only(bottom: 8),
        decoration: BoxDecoration(
          border: Border(bottom: BorderSide(color: isSelected ? AppTheme.primary : Colors.transparent, width: 2)),
        ),
        child: Text(
          title,
          style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(
            color: isSelected ? AppTheme.primary : AppTheme.onSurfaceVariant,
          ),
        ),
      ),
    );
  }

  Widget _buildConfigCard(String title, String desc, IconData icon, Color statusColor, String statusText, String capText, String lockText, IconData lockIcon) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surfaceContainerLowest,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppTheme.surfaceContainerHighest),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(color: AppTheme.primaryContainer, borderRadius: BorderRadius.circular(8)),
            child: Icon(icon, color: AppTheme.onPrimaryContainer),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(child: Text(title, style: AppTheme.lightTheme.textTheme.titleMedium, maxLines: 1, overflow: TextOverflow.ellipsis)),
                    const SizedBox(width: 8),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(color: statusColor.withOpacity(0.1), borderRadius: BorderRadius.circular(12)),
                      child: Row(
                        children: [
                          Icon(Icons.circle, color: statusColor, size: 8),
                          const SizedBox(width: 4),
                          Text(statusText, style: TextStyle(color: statusColor, fontSize: 10, fontWeight: FontWeight.bold)),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 4),
                Text(desc, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Icon(Icons.groups, size: 16, color: AppTheme.onSurfaceVariant),
                    const SizedBox(width: 4),
                    Text(capText, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                    const SizedBox(width: 16),
                    Icon(lockIcon, size: 16, color: AppTheme.onSurfaceVariant),
                    const SizedBox(width: 4),
                    Text(lockText, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(width: 16),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.edit, color: AppTheme.onSurfaceVariant),
            hoverColor: AppTheme.surfaceContainer,
          ),
        ],
      ),
    );
  }
}
