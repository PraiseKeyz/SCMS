import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../../core/widgets/status_badge.dart';

class WardenDashboardScreen extends StatelessWidget {
  const WardenDashboardScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: '[Warden] Dashboard',
      subtitle: 'Admin Portal',
      isWarden: true,
      currentIndex: 0,
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/warden-dashboard'),
        AppNavigationDestination(label: 'Deployment', icon: Icons.assignment, route: '/warden-dashboard/deployment'),
        AppNavigationDestination(label: 'Incidents', icon: Icons.assessment, route: '/incident-report'),
        AppNavigationDestination(label: 'Status', icon: Icons.shield, route: '/warden-dashboard/deployment'),
      ],
      actions: [
        Center(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: AppTheme.error,
              borderRadius: BorderRadius.circular(16),
              boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.notifications_active, size: 16, color: AppTheme.onError),
                const SizedBox(width: 4),
                Text('2 Active Alerts', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onError)),
              ],
            ),
          ),
        ),
      ],
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1024),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Header
                Text('[Warden] Dashboard', style: AppTheme.lightTheme.textTheme.headlineLarge?.copyWith(color: AppTheme.primaryContainer)),
                const SizedBox(height: 8),
                Text('Task-oriented overview for campus staff operations.', style: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(color: AppTheme.onSurfaceVariant)),
                const SizedBox(height: 24),

                // Bento Grid Layout
                LayoutBuilder(
                  builder: (context, constraints) {
                    final isDesktop = constraints.maxWidth > 768;
                    return Column(
                      children: [
                        if (isDesktop)
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              Expanded(flex: 8, child: _buildAssignedZoneCard()),
                              const SizedBox(width: 24),
                              Expanded(flex: 4, child: _buildQuickActions(context)),
                            ],
                          )
                        else
                          Column(
                            children: [
                              _buildAssignedZoneCard(),
                              const SizedBox(height: 16),
                              _buildQuickActions(context),
                            ],
                          ),
                        const SizedBox(height: 16),
                        _buildRecentIncidentsList(),
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

  Widget _buildAssignedZoneCard() {
    return Container(
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.outlineVariant),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: const BoxDecoration(
              color: AppTheme.surfaceBright,
              borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
              border: Border(bottom: BorderSide(color: AppTheme.outlineVariant)),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    const Icon(Icons.location_on, color: AppTheme.secondary),
                    const SizedBox(width: 8),
                    Text('My Assigned Zone', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface)),
                  ],
                ),
                const StatusBadge(status: BadgeStatus.secure, label: 'Secure'),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: LayoutBuilder(
              builder: (context, constraints) {
                final isWide = constraints.maxWidth > 400;
                final infoContent = Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('CURRENT LOCATION', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                    const SizedBox(height: 4),
                    Text('North Campus Gate 4', style: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(fontWeight: FontWeight.bold)),
                    const SizedBox(height: 16),
                    Row(
                      children: [
                        Expanded(
                          child: Container(
                            padding: const EdgeInsets.all(12),
                            decoration: BoxDecoration(
                              color: AppTheme.surfaceContainerLow,
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(color: AppTheme.outlineVariant),
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('STAFF PRESENT', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                                const SizedBox(height: 4),
                                Text('4 Personnel', style: AppTheme.lightTheme.textTheme.titleMedium),
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Container(
                            padding: const EdgeInsets.all(12),
                            decoration: BoxDecoration(
                              color: AppTheme.surfaceContainerLow,
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(color: AppTheme.outlineVariant),
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('LAST SWEEP', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                                const SizedBox(height: 4),
                                Text('12 Mins Ago', style: AppTheme.lightTheme.textTheme.titleMedium),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                );

                final mapAbstract = Container(
                  height: 160,
                  decoration: BoxDecoration(
                    color: AppTheme.surfaceContainerLow,
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(color: AppTheme.outlineVariant),
                  ),
                  child: Stack(
                    children: [
                      // Abstract map markers
                      Positioned(top: 40, left: 40, child: Container(width: 12, height: 12, decoration: BoxDecoration(color: AppTheme.secondary, borderRadius: BorderRadius.circular(2)))),
                      Positioned(bottom: 50, right: 40, child: Container(width: 12, height: 12, decoration: BoxDecoration(color: AppTheme.secondary, borderRadius: BorderRadius.circular(2)))),
                      Center(
                        child: Container(
                          width: 24,
                          height: 24,
                          decoration: BoxDecoration(
                            color: AppTheme.tertiaryContainer,
                            borderRadius: BorderRadius.circular(4),
                            boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.2), blurRadius: 4)],
                          ),
                          child: const Icon(Icons.person, color: AppTheme.onTertiary, size: 16),
                        ),
                      ),
                      Positioned(
                        bottom: 8,
                        right: 8,
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                          decoration: BoxDecoration(
                            color: AppTheme.surface.withOpacity(0.8),
                            borderRadius: BorderRadius.circular(4),
                            border: Border.all(color: AppTheme.outlineVariant),
                          ),
                          child: Text('Zone Beta-4', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                        ),
                      )
                    ],
                  ),
                );

                if (isWide) {
                  return Row(
                    children: [
                      Expanded(child: infoContent),
                      const SizedBox(width: 24),
                      Expanded(child: mapAbstract),
                    ],
                  );
                } else {
                  return Column(
                    children: [
                      infoContent,
                      const SizedBox(height: 16),
                      mapAbstract,
                    ],
                  );
                }
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickActions(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.outlineVariant),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('Quick Actions', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface)),
          const SizedBox(height: 12),
          ElevatedButton(
            onPressed: () => context.push('/warden-dashboard/deployment'),
            style: ElevatedButton.styleFrom(
              backgroundColor: AppTheme.tertiaryContainer,
              foregroundColor: AppTheme.onTertiary,
              minimumSize: const Size(double.infinity, 48),
            ),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.update, size: 20),
                SizedBox(width: 8),
                Text('Update Zone Status'),
              ],
            ),
          ),
          const SizedBox(height: 12),
          ElevatedButton(
            onPressed: () => context.push('/incident-report'),
            style: ElevatedButton.styleFrom(
              backgroundColor: AppTheme.surfaceContainerLow,
              foregroundColor: AppTheme.onSurface,
              side: const BorderSide(color: AppTheme.outlineVariant),
              minimumSize: const Size(double.infinity, 48),
            ),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.report, size: 20),
                SizedBox(width: 8),
                Text('Report Incident'),
              ],
            ),
          ),
          const SizedBox(height: 12),
          ElevatedButton(
            onPressed: () => context.push('/broadcast-alert'),
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFFEF2F2),
              foregroundColor: const Color(0xFF991B1B),
              side: const BorderSide(color: Color(0xFFFECACA)),
              minimumSize: const Size(double.infinity, 48),
            ),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.campaign, size: 20),
                SizedBox(width: 8),
                Text('Broadcast Alert'),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRecentIncidentsList() {
    return Container(
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.outlineVariant),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: const BoxDecoration(
              color: AppTheme.surfaceBright,
              borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
              border: Border(bottom: BorderSide(color: AppTheme.outlineVariant)),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    const Icon(Icons.history, color: AppTheme.onSurfaceVariant),
                    const SizedBox(width: 8),
                    Text('Recent Incidents', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface)),
                  ],
                ),
                Text('View All', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.secondary)),
              ],
            ),
          ),
          _buildIncidentItem(
            title: 'Unauthorized Access Attempt',
            time: '10 mins ago',
            description: 'Individual lacking proper credentials attempted entry at Service Gate 2. Situation contained.',
            priority: 'High Priority',
            isHighPriority: true,
            location: 'Service Gate 2',
            icon: Icons.warning,
            iconBg: AppTheme.errorContainer,
            iconColor: AppTheme.onErrorContainer,
          ),
          _buildIncidentItem(
            title: 'Maintenance Blocking Path',
            time: '45 mins ago',
            description: 'Routine utility maintenance blocking primary pedestrian pathway near Engineering Hall.',
            priority: 'Low Priority',
            isHighPriority: false,
            location: 'Engineering Walkway',
            icon: Icons.construction,
            iconBg: const Color(0xFFFEF3C7),
            iconColor: const Color(0xFF92400E),
          ),
        ],
      ),
    );
  }

  Widget _buildIncidentItem({
    required String title,
    required String time,
    required String description,
    required String priority,
    required bool isHighPriority,
    required String location,
    required IconData icon,
    required Color iconBg,
    required Color iconColor,
  }) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: AppTheme.outlineVariant)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: iconBg,
              shape: BoxShape.circle,
            ),
            child: Icon(icon, color: iconColor, size: 20),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(child: Text(title, style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface))),
                    Text(time, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                  ],
                ),
                const SizedBox(height: 4),
                Text(description, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant), maxLines: 1, overflow: TextOverflow.ellipsis),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(
                        color: isHighPriority ? const Color(0xFFFEE2E2) : const Color(0xFFFEF3C7),
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: Text(
                        priority.toUpperCase(),
                        style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(
                          color: isHighPriority ? const Color(0xFF991B1B) : const Color(0xFF92400E),
                          fontSize: 10,
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text('• $location', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
