import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../parking/providers/parking_provider.dart';
import '../../parking/domain/models/parking_models.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class WardenDeploymentScreen extends ConsumerStatefulWidget {
  const WardenDeploymentScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<WardenDeploymentScreen> createState() => _WardenDeploymentScreenState();
}

class _WardenDeploymentScreenState extends ConsumerState<WardenDeploymentScreen> {
  String? _updatingZoneId;

  Future<void> _updateStatus(String zoneId, ZoneStatusEnum newStatus) async {
    setState(() => _updatingZoneId = zoneId);
    try {
      final repo = ref.read(parkingRepositoryProvider);
      await repo.updateZoneStatus(zoneId, newStatus);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Zone status updated!')));
        ref.invalidate(parkingZonesProvider);
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Failed: $e')));
      }
    } finally {
      if (mounted) setState(() => _updatingZoneId = null);
    }
  }

  @override
  Widget build(BuildContext context) {
    final zonesAsync = ref.watch(parkingZonesProvider);

    return ResponsiveScaffold(
      title: 'Zone Status Management',
      subtitle: 'Central Hub',
      isWarden: true,
      currentIndex: 3, // Status
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/warden-dashboard'),
        AppNavigationDestination(label: 'Deployment', icon: Icons.assignment, route: '/warden-dashboard/deployment'),
        AppNavigationDestination(label: 'Incidents', icon: Icons.assessment, route: '/incident-report'),
        AppNavigationDestination(label: 'Status', icon: Icons.shield, route: '/warden-dashboard/deployment'),
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
            constraints: const BoxConstraints(maxWidth: 800),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Manage Zone Status', style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary)),
                const SizedBox(height: 4),
                Text('Update the real-time capacity and status of parking zones.', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                const SizedBox(height: 24),
                
                zonesAsync.when(
                  data: (zones) {
                    if (zones.isEmpty) return const Center(child: Text('No zones available.'));
                    return ListView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      itemCount: zones.length,
                      itemBuilder: (context, index) {
                        final zone = zones[index];
                        final isUpdating = _updatingZoneId == zone.id;
                        return _buildZoneCard(zone, isUpdating);
                      },
                    );
                  },
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (e, st) => Center(child: Text('Error: $e')),
                ),
              ],
            ),
          ),
        ),
      ),
    ),
  );
}

  Widget _buildZoneCard(ZoneWithStatus zone, bool isUpdating) {
    Color statusColor;
    if (zone.status == ZoneStatusEnum.full) {
      statusColor = AppTheme.error;
    } else if (zone.status == ZoneStatusEnum.limited) {
      statusColor = Colors.orange;
    } else {
      statusColor = Colors.green;
    }

    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.outlineVariant),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Text(zone.name, style: AppTheme.lightTheme.textTheme.titleMedium, maxLines: 2, overflow: TextOverflow.ellipsis),
              ),
              const SizedBox(width: 8),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: statusColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.circle, color: statusColor, size: 8),
                    const SizedBox(width: 6),
                    Text(zone.status.name.toUpperCase(), style: TextStyle(color: statusColor, fontSize: 12, fontWeight: FontWeight.bold)),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Capacity', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                    Text('${zone.capacity}', style: AppTheme.lightTheme.textTheme.bodyLarge),
                  ],
                ),
              ),
              if (isUpdating)
                const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2))
              else
                DropdownButton<ZoneStatusEnum>(
                  value: zone.status,
                  items: ZoneStatusEnum.values.map((status) {
                    return DropdownMenuItem(
                      value: status,
                      child: Text(status.name.toUpperCase()),
                    );
                  }).toList(),
                  onChanged: (newStatus) {
                    if (newStatus != null) {
                      _updateStatus(zone.id, newStatus);
                    }
                  },
                ),
            ],
          ),
        ],
      ),
    );
  }
}
