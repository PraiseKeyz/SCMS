import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:intl/intl.dart';
import '../../../core/widgets/status_badge.dart';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../parking/providers/parking_provider.dart';
import '../../alerts/providers/alerts_provider.dart';

class WardenDashboardScreen extends ConsumerStatefulWidget {
  const WardenDashboardScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<WardenDashboardScreen> createState() => _WardenDashboardScreenState();
}

class _WardenDashboardScreenState extends ConsumerState<WardenDashboardScreen> {
  String? _selectedZoneId;
  String? _assignedZoneId;
  bool _isCheckingIn = false;

  final _storage = const FlutterSecureStorage();

  @override
  void initState() {
    super.initState();
    _loadAssignedZone();
  }

  Future<void> _loadAssignedZone() async {
    final zoneId = await _storage.read(key: 'assigned_zone_id');
    if (zoneId != null && mounted) {
      setState(() => _assignedZoneId = zoneId);
    }
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'Dashboard',
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
        Consumer(builder: (context, ref, _) {
          final alertsAsync = ref.watch(activeAlertsProvider);
          final alertCount = alertsAsync.value?.length ?? 0;
          if (alertCount == 0) return const SizedBox();
          return InkWell(
            onTap: () => context.push('/alerts-list'),
            child: Center(
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
                    Text('$alertCount Active Alert${alertCount == 1 ? '' : 's'}', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onError)),
                  ],
                ),
              ),
            ),
          );
        }),
      ],
      body: RefreshIndicator(
        onRefresh: () async {
          // Invalidate providers to refetch data
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
                // Header
                Text('Dashboard', style: AppTheme.lightTheme.textTheme.headlineLarge?.copyWith(color: AppTheme.primaryContainer)),
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
                        _buildRecentIncidentsList(context),
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

  Future<void> _handleCheckIn() async {
    if (_selectedZoneId == null) return;
    setState(() => _isCheckingIn = true);
    try {
      await ref.read(alertsNotifierProvider.notifier).checkin(_selectedZoneId!);
      await _storage.write(key: 'assigned_zone_id', value: _selectedZoneId!);
      setState(() => _assignedZoneId = _selectedZoneId);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Checked in successfully')));
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Failed to check in: $e')));
      }
    } finally {
      if (mounted) setState(() => _isCheckingIn = false);
    }
  }

  Widget _buildAssignedZoneCard() {
    final zonesAsync = ref.watch(parkingZonesProvider);
    final zones = zonesAsync.value ?? [];

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
                Expanded(
                  child: Row(
                    children: [
                      const Icon(Icons.location_on, color: AppTheme.secondary),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          _assignedZoneId != null ? 'My Assigned Zone' : 'Select Zone to Check In', 
                          style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface),
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                    ],
                  ),
                ),
                if (_assignedZoneId != null)
                  Row(
                    children: [
                      const StatusBadge(status: BadgeStatus.secure, label: 'Checked In'),
                      const SizedBox(width: 4),
                      IconButton(
                        padding: EdgeInsets.zero,
                        constraints: const BoxConstraints(),
                        icon: const Icon(Icons.edit, size: 20, color: AppTheme.outline),
                        onPressed: () => setState(() => _assignedZoneId = null),
                        tooltip: 'Change Zone',
                      ),
                    ],
                  ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: _assignedZoneId == null
              ? Column(
                  children: [
                    DropdownButtonFormField<String>(
                      isExpanded: true,
                      value: _selectedZoneId,
                      hint: const Text('Select a Zone'),
                      items: zones.map((z) => DropdownMenuItem(value: z.id, child: Text(z.name))).toList(),
                      onChanged: (val) => setState(() => _selectedZoneId = val),
                      decoration: const InputDecoration(border: OutlineInputBorder()),
                    ),
                    const SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: (_selectedZoneId == null || _isCheckingIn) ? null : _handleCheckIn,
                      style: ElevatedButton.styleFrom(
                        minimumSize: const Size(double.infinity, 48),
                        backgroundColor: AppTheme.primary,
                        foregroundColor: AppTheme.onPrimary,
                      ),
                      child: _isCheckingIn 
                        ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                        : const Text('Check In'),
                    ),
                  ],
                )
              : LayoutBuilder(
              builder: (context, constraints) {
                final isWide = constraints.maxWidth > 400;
                final assignedZoneName = zones.where((z) => z.id == _assignedZoneId).firstOrNull?.name ?? 'Unknown Zone';
                final infoContent = Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('CURRENT LOCATION', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                    const SizedBox(height: 4),
                    Text(assignedZoneName, style: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(fontWeight: FontWeight.bold)),
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
                                Text('Active', style: AppTheme.lightTheme.textTheme.titleMedium),
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
                                Text('Just now', style: AppTheme.lightTheme.textTheme.titleMedium),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                );

                if (isWide) {
                  return Row(
                    children: [
                      Expanded(child: infoContent),
                      const SizedBox(width: 24),
                    ],
                  );
                } else {
                  return Column(
                    children: [
                      infoContent,
                      const SizedBox(height: 16),
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

  Widget _buildRecentIncidentsList(BuildContext context) {
    final alertsAsync = ref.watch(activeAlertsProvider);

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
                    const Icon(Icons.campaign, color: AppTheme.onSurfaceVariant),
                    const SizedBox(width: 8),
                    Text('Active Alerts', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface)),
                  ],
                ),
                InkWell(
                  onTap: () => context.push('/alerts-list'),
                  child: Text('View All', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.secondary)),
                ),
              ],
            ),
          ),
          alertsAsync.when(
            data: (alerts) {
              if (alerts.isEmpty) {
                return const Padding(
                  padding: EdgeInsets.all(32.0),
                  child: Center(child: Text('No active alerts', style: TextStyle(color: AppTheme.outline))),
                );
              }
              final topAlerts = alerts.take(3).toList();
              return Column(
                children: topAlerts.map((alert) {
                  final df = DateFormat('MMM d, h:mm a');
                  return _buildIncidentItem(
                    title: 'Broadcast Alert',
                    time: df.format(alert.expiresAt.toLocal()),
                    description: alert.message,
                    priority: 'High Priority',
                    isHighPriority: true,
                    location: 'Campus Wide',
                    icon: Icons.warning_amber,
                    iconBg: AppTheme.errorContainer,
                    iconColor: AppTheme.onErrorContainer,
                  );
                }).toList(),
              );
            },
            loading: () => const Padding(padding: EdgeInsets.all(32), child: Center(child: CircularProgressIndicator())),
            error: (e, st) => Padding(padding: const EdgeInsets.all(16), child: Text('Error: $e')),
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
