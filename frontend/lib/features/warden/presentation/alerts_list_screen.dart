import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../alerts/providers/alerts_provider.dart';
import 'package:intl/intl.dart';

class AlertsListScreen extends ConsumerWidget {
  const AlertsListScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final alertsAsync = ref.watch(activeAlertsProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Active Alerts'),
        backgroundColor: AppTheme.surfaceBright,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 800),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('All Active Alerts', style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary)),
                const SizedBox(height: 8),
                Text('List of currently active campus-wide alerts.', style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                const SizedBox(height: 24),

                alertsAsync.when(
                  data: (alerts) {
                    if (alerts.isEmpty) {
                      return const Center(
                        child: Padding(
                          padding: EdgeInsets.all(32.0),
                          child: Text('No active alerts at the moment.', style: TextStyle(color: AppTheme.outline)),
                        ),
                      );
                    }
                    return ListView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      itemCount: alerts.length,
                      itemBuilder: (context, index) {
                        final alert = alerts[index];
                        final df = DateFormat('MMM d, h:mm a');
                        return Container(
                          margin: const EdgeInsets.only(bottom: 12),
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            color: AppTheme.surface,
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(color: AppTheme.outlineVariant),
                            boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
                          ),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                padding: const EdgeInsets.all(12),
                                decoration: const BoxDecoration(
                                  color: AppTheme.errorContainer,
                                  shape: BoxShape.circle,
                                ),
                                child: const Icon(Icons.warning_amber, color: AppTheme.onErrorContainer),
                              ),
                              const SizedBox(width: 16),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text('Broadcast Alert', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold)),
                                    const SizedBox(height: 4),
                                    Text(alert.message, style: AppTheme.lightTheme.textTheme.bodyMedium),
                                    const SizedBox(height: 8),
                                    Text('Expires: ${df.format(alert.expiresAt.toLocal())}', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.outline)),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        );
                      },
                    );
                  },
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (e, st) => Center(child: Text('Failed to load alerts: $e', style: const TextStyle(color: AppTheme.error))),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
