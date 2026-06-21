import 'package:flutter/material.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class AdminAuditLogsScreen extends StatefulWidget {
  const AdminAuditLogsScreen({Key? key}) : super(key: key);

  @override
  State<AdminAuditLogsScreen> createState() => _AdminAuditLogsScreenState();
}

class _AdminAuditLogsScreenState extends State<AdminAuditLogsScreen> {
  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'System Audit Logs',
      subtitle: 'Admin Portal',
      isWarden: true, // admin uses similar colors
      currentIndex: 0, // Audit Logs is index 0
      destinations: const [
        AppNavigationDestination(label: 'Logs', icon: Icons.history, route: '/admin/audit-logs'),
        AppNavigationDestination(label: 'Users', icon: Icons.people, route: '/admin/user-management'),
        AppNavigationDestination(label: 'Config', icon: Icons.settings, route: '/admin/campus-config'),
      ],
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1200),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('System Audit Logs', style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                Text('Track all administrative and security activities across the campus ecosystem.', style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                const SizedBox(height: 24),

                // Filters
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: AppTheme.surfaceContainerLowest,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: AppTheme.outlineVariant),
                    boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
                  ),
                  child: Wrap(
                    spacing: 16,
                    runSpacing: 16,
                    crossAxisAlignment: WrapCrossAlignment.center,
                    children: [
                      SizedBox(
                        width: 300,
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: 'Search logs...',
                            prefixIcon: const Icon(Icons.search),
                            filled: true,
                            fillColor: AppTheme.surfaceContainerLow,
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.outlineVariant)),
                          ),
                        ),
                      ),
                      _buildDropdown('Date Range', Icons.calendar_today, ['Today', 'Last 7 Days', 'Last 30 Days']),
                      _buildDropdown('Action Type', Icons.filter_list, ['Status Update', 'Incident', 'Broadcast', 'User Change']),
                      _buildDropdown('Staff Member', Icons.person, ['Warden Smith', 'Guard Johnson', 'System Admin']),
                    ],
                  ),
                ),
                const SizedBox(height: 24),

                LayoutBuilder(
                  builder: (context, constraints) {
                    final isDesktop = constraints.maxWidth > 800;
                    return Flex(
                      direction: isDesktop ? Axis.horizontal : Axis.vertical,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Main Log List
                        Expanded(
                          flex: isDesktop ? 8 : 0,
                          child: Column(
                            children: [
                              _buildLogCard('Gate Override Activated', 'Warden Smith • North Gate', '10:42 AM', 'Incident', Icons.warning, AppTheme.errorContainer, AppTheme.onErrorContainer, AppTheme.error),
                              const SizedBox(height: 12),
                              _buildLogCard('Visitor Capacity Updated', 'System Auto • Main Hall', '09:15 AM', 'Status Update', Icons.check_circle, AppTheme.secondaryContainer, AppTheme.onSecondaryContainer, AppTheme.secondary),
                              const SizedBox(height: 12),
                              _buildLogCard('Campus Wide Alert Issued', 'Admin Root • All Zones', 'Yesterday, 14:30', 'Broadcast', Icons.campaign, AppTheme.tertiaryFixed, AppTheme.onTertiaryFixed, AppTheme.tertiary),
                              const SizedBox(height: 12),
                              _buildLogCard('Access Role Modified', 'Admin Root • Guard Johnson', 'Yesterday, 11:05', 'User Change', Icons.manage_accounts, AppTheme.surfaceContainerHigh, AppTheme.onSurface, AppTheme.outline),
                              const SizedBox(height: 24),
                              OutlinedButton(
                                onPressed: () {},
                                style: OutlinedButton.styleFrom(
                                  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                                ),
                                child: const Text('Load More'),
                              ),
                            ],
                          ),
                        ),
                        if (isDesktop) const SizedBox(width: 24) else const SizedBox(height: 24),
                        
                        // Sidebar Insights
                        Expanded(
                          flex: isDesktop ? 4 : 0,
                          child: Column(
                            children: [
                              // Summary Card
                              Container(
                                padding: const EdgeInsets.all(24),
                                decoration: BoxDecoration(
                                  color: AppTheme.primaryContainer,
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text('Audit Summary', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.primaryFixed)),
                                    const SizedBox(height: 16),
                                    Row(
                                      children: [
                                        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text('124', style: AppTheme.lightTheme.textTheme.displaySmall?.copyWith(color: AppTheme.onPrimary, fontWeight: FontWeight.bold)), Text('Logs Today', style: TextStyle(color: AppTheme.onPrimaryFixedVariant))])),
                                        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text('3', style: AppTheme.lightTheme.textTheme.displaySmall?.copyWith(color: AppTheme.errorContainer, fontWeight: FontWeight.bold)), Text('Incidents', style: TextStyle(color: AppTheme.onPrimaryFixedVariant))])),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 24),
                              
                              // Recent Active Staff
                              Container(
                                padding: const EdgeInsets.all(16),
                                decoration: BoxDecoration(
                                  color: AppTheme.surfaceContainerLowest,
                                  borderRadius: BorderRadius.circular(16),
                                  border: Border.all(color: AppTheme.outlineVariant),
                                  boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text('Recent Active Staff', style: TextStyle(fontWeight: FontWeight.bold)),
                                    const Divider(),
                                    _buildActiveStaff('WS', 'Warden Smith', '5m ago'),
                                    const SizedBox(height: 12),
                                    _buildActiveStaff('AR', 'Admin Root', '1h ago'),
                                  ],
                                ),
                              ),
                            ],
                          ),
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
    );
  }

  Widget _buildDropdown(String hint, IconData icon, List<String> items) {
    return Container(
      width: 200,
      decoration: BoxDecoration(color: AppTheme.surfaceContainerLow, borderRadius: BorderRadius.circular(12), border: Border.all(color: AppTheme.outlineVariant)),
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: DropdownButtonHideUnderline(
        child: DropdownButton<String>(
          hint: Text(hint, style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
          icon: Icon(icon, color: AppTheme.onSurfaceVariant, size: 20),
          isExpanded: true,
          items: items.map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
          onChanged: (val) {},
        ),
      ),
    );
  }

  Widget _buildLogCard(String title, String subtitle, String time, String status, IconData icon, Color iconBgColor, Color iconColor, Color indicatorColor) {
    return Container(
      decoration: BoxDecoration(
        color: AppTheme.surfaceContainerLowest,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppTheme.outlineVariant),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      clipBehavior: Clip.antiAlias,
      child: IntrinsicHeight(
        child: Row(
          children: [
            Container(width: 4, color: indicatorColor),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(padding: const EdgeInsets.all(8), decoration: BoxDecoration(color: iconBgColor, borderRadius: BorderRadius.circular(8)), child: Icon(icon, color: iconColor)),
                    const SizedBox(width: 16),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(title, style: AppTheme.lightTheme.textTheme.titleMedium),
                          const SizedBox(height: 4),
                          Text(subtitle, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                        ],
                      ),
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Text(time, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                        const SizedBox(height: 4),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                          decoration: BoxDecoration(color: indicatorColor.withOpacity(0.1), borderRadius: BorderRadius.circular(12), border: Border.all(color: indicatorColor.withOpacity(0.3))),
                          child: Text(status, style: TextStyle(color: indicatorColor, fontSize: 10, fontWeight: FontWeight.bold)),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildActiveStaff(String initials, String name, String lastActive) {
    return Row(
      children: [
        Container(width: 32, height: 32, decoration: const BoxDecoration(color: AppTheme.surfaceContainerHigh, shape: BoxShape.circle), alignment: Alignment.center, child: Text(initials, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12))),
        const SizedBox(width: 12),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(name, style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(fontWeight: FontWeight.bold)),
            Text('Last active: $lastActive', style: const TextStyle(fontSize: 10, color: AppTheme.onSurfaceVariant)),
          ],
        ),
      ],
    );
  }
}
