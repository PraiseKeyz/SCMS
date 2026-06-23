import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import 'package:mapbox_maps_flutter/mapbox_maps_flutter.dart' hide Size;
import '../../alerts/providers/alerts_provider.dart';
import 'map_selection_screen.dart';

class BroadcastAlertScreen extends ConsumerStatefulWidget {
  const BroadcastAlertScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<BroadcastAlertScreen> createState() => _BroadcastAlertScreenState();
}

class _BroadcastAlertScreenState extends ConsumerState<BroadcastAlertScreen> {
  final _titleController = TextEditingController();
  final _messageController = TextEditingController();
  bool _isSubmitting = false;

  double _selectedLat = 6.8271;
  double _selectedLng = 3.4650;
  double _selectedRadius = 300.0;

  Future<void> _openMapSelection() async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => MapSelectionScreen(
          initialLat: _selectedLat,
          initialLng: _selectedLng,
        ),
      ),
    );

    if (result != null && result is Map<String, double>) {
      setState(() {
        _selectedLat = result['lat']!;
        _selectedLng = result['lng']!;
      });
    }
  }

  Future<void> _handleBroadcast() async {
    Navigator.pop(context); // Close the dialog
    setState(() => _isSubmitting = true);
    try {
      await ref.read(alertsNotifierProvider.notifier).broadcastAlert(
        _messageController.text.isEmpty ? 'Flooding near Gate 2, use Gate 1' : _messageController.text,
        _selectedRadius,
        _selectedLat,
        _selectedLng,
        60, // Fixed 1h duration
      );
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Broadcast Sent Successfully!'), backgroundColor: AppTheme.secondary));
        _titleController.clear();
        _messageController.clear();
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Failed to broadcast: $e'), backgroundColor: AppTheme.error));
      }
    } finally {
      if (mounted) {
        setState(() => _isSubmitting = false);
      }
    }
  }

  void _showConfirmationModal() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          backgroundColor: AppTheme.surfaceContainerLowest,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16), side: BorderSide(color: AppTheme.outlineVariant)),
          title: Row(
            children: [
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(color: AppTheme.errorContainer, shape: BoxShape.circle),
                child: const Icon(Icons.warning, color: AppTheme.error),
              ),
              const SizedBox(width: 16),
              const Expanded(child: Text('Confirm Broadcast', style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.bold))),
            ],
          ),
          content: SizedBox(
            width: 400,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'You are about to send a high-priority alert to all selected zones. This will trigger push notifications and audible alarms on recipient devices.',
                  style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant),
                ),
                const SizedBox(height: 16),
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: AppTheme.surfaceContainer,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: AppTheme.outlineVariant),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('PREVIEW', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.outline)),
                      const SizedBox(height: 8),
                      Text(_titleController.text.isEmpty ? 'Severe Weather Warning' : _titleController.text, style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold)),
                      const SizedBox(height: 4),
                      Text('"${_messageController.text.isEmpty ? 'Flooding near Gate 2, use Gate 1' : _messageController.text}"', style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(fontStyle: FontStyle.italic)),
                    ],
                  ),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Review Again', style: TextStyle(color: AppTheme.onSurfaceVariant)),
            ),
            ElevatedButton(
              onPressed: _handleBroadcast,
              style: ElevatedButton.styleFrom(backgroundColor: AppTheme.error, foregroundColor: AppTheme.onError),
              child: const Text('Confirm & Send'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'Broadcast Alert',
      subtitle: 'Central Hub',
      isWarden: true,
      currentIndex: 0, // Dashboard
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/warden-dashboard'),
        AppNavigationDestination(label: 'Deployment', icon: Icons.assignment, route: '/warden-dashboard/deployment'),
        AppNavigationDestination(label: 'Incidents', icon: Icons.assessment, route: '/incident-report'),
        AppNavigationDestination(label: 'Status', icon: Icons.shield, route: '/warden-dashboard/deployment'),
      ],
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1000),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Create and deploy a campus-wide or targeted alert. This message will override standard notifications for affected users.', style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                const SizedBox(height: 24),

                LayoutBuilder(
                  builder: (context, constraints) {
                    final isDesktop = constraints.maxWidth > 768;
                    return Flex(
                      direction: isDesktop ? Axis.horizontal : Axis.vertical,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Message Details
                        Expanded(
                          flex: isDesktop ? 2 : 0,
                          child: Container(
                            padding: const EdgeInsets.all(24),
                            decoration: BoxDecoration(
                              color: AppTheme.surfaceContainerLowest,
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(color: AppTheme.outlineVariant),
                              boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Row(
                                      children: [
                                        const Icon(Icons.edit_note, color: AppTheme.outline),
                                        const SizedBox(width: 8),
                                        Text('Message Details', style: AppTheme.lightTheme.textTheme.titleMedium),
                                      ],
                                    ),
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                      decoration: BoxDecoration(color: AppTheme.errorContainer, borderRadius: BorderRadius.circular(4)),
                                      child: const Text('HIGH PRIORITY', style: TextStyle(color: AppTheme.error, fontSize: 10, fontWeight: FontWeight.bold)),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 24),
                                Text('Alert Title', style: AppTheme.lightTheme.textTheme.labelMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                                const SizedBox(height: 8),
                                TextField(
                                  controller: _titleController,
                                  decoration: InputDecoration(
                                    hintText: 'e.g., Severe Weather Warning',
                                    filled: true,
                                    fillColor: AppTheme.surface,
                                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.outlineVariant)),
                                  ),
                                ),
                                const SizedBox(height: 16),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text('Message Body', style: AppTheme.lightTheme.textTheme.labelMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                                    Text('0/250', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.outline)),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                TextField(
                                  controller: _messageController,
                                  maxLines: 5,
                                  decoration: InputDecoration(
                                    hintText: 'e.g., Flooding near Gate 2, use Gate 1',
                                    filled: true,
                                    fillColor: AppTheme.surface,
                                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.outlineVariant)),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        if (isDesktop) const SizedBox(width: 24) else const SizedBox(height: 24),
                        
                        // Target & Expiry
                        Expanded(
                          flex: isDesktop ? 1 : 0,
                          child: Column(
                            children: [
                              // Target Area
                              Container(
                                padding: const EdgeInsets.all(24),
                                decoration: BoxDecoration(
                                  color: AppTheme.surfaceContainerLowest,
                                  borderRadius: BorderRadius.circular(16),
                                  border: Border.all(color: AppTheme.outlineVariant),
                                  boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.stretch,
                                  children: [
                                    Row(
                                      children: [
                                        const Icon(Icons.radar, color: AppTheme.outline),
                                        const SizedBox(width: 8),
                                        Text('Target Area', style: AppTheme.lightTheme.textTheme.titleMedium),
                                      ],
                                    ),
                                    const SizedBox(height: 16),
                                      Text(
                                        'Lat: ${_selectedLat.toStringAsFixed(4)}, Lng: ${_selectedLng.toStringAsFixed(4)}',
                                        style: AppTheme.lightTheme.textTheme.bodyMedium,
                                      ),
                                      const SizedBox(height: 8),
                                      OutlinedButton.icon(
                                        onPressed: _openMapSelection,
                                        icon: const Icon(Icons.map),
                                        label: const Text('Pick Center on Map'),
                                        style: OutlinedButton.styleFrom(
                                          padding: const EdgeInsets.symmetric(vertical: 16),
                                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                                        ),
                                      ),
                                      const SizedBox(height: 24),
                                      Text('Radius (${_selectedRadius.toInt()}m)', style: AppTheme.lightTheme.textTheme.labelMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                                      Slider(
                                        value: _selectedRadius,
                                        min: 100,
                                        max: 2000,
                                        divisions: 19,
                                        label: '${_selectedRadius.toInt()}m',
                                        activeColor: AppTheme.secondary,
                                        onChanged: (val) => setState(() => _selectedRadius = val),
                                      ),
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
                
                const SizedBox(height: 32),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    OutlinedButton(
                      onPressed: () {},
                      style: OutlinedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        side: const BorderSide(color: AppTheme.outlineVariant),
                        foregroundColor: AppTheme.onSurfaceVariant,
                      ),
                      child: const Text('Cancel'),
                    ),
                    const SizedBox(width: 16),
                    ElevatedButton.icon(
                      onPressed: _isSubmitting ? null : _showConfirmationModal,
                      icon: _isSubmitting ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white)) : const Icon(Icons.cell_tower),
                      label: Text(_isSubmitting ? 'Sending...' : 'Send Broadcast'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppTheme.error,
                        foregroundColor: AppTheme.onError,
                        padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        elevation: 4,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
