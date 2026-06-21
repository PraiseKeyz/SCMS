import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class BroadcastAlertScreen extends ConsumerStatefulWidget {
  const BroadcastAlertScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<BroadcastAlertScreen> createState() => _BroadcastAlertScreenState();
}

class _BroadcastAlertScreenState extends ConsumerState<BroadcastAlertScreen> {
  final _titleController = TextEditingController();
  final _messageController = TextEditingController();
  String _selectedDuration = '1h';

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
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'You are about to send a high-priority alert to all selected zones. This will trigger push notifications and audible alarms on recipient devices.',
                style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant),
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
                    Text('PREVIEW', style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                    const SizedBox(height: 4),
                    Text(_titleController.text.isEmpty ? 'Severe Weather Warning' : _titleController.text, style: const TextStyle(fontWeight: FontWeight.bold)),
                    const SizedBox(height: 4),
                    Text('"${_messageController.text.isEmpty ? 'Please seek shelter immediately...' : _messageController.text}"', style: const TextStyle(fontStyle: FontStyle.italic)),
                  ],
                ),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Review Again', style: TextStyle(color: AppTheme.onSurfaceVariant)),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Broadcast Sent!'), backgroundColor: AppTheme.error));
              },
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
                                    hintText: 'Enter the exact message to be broadcasted...',
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
                                    Container(
                                      height: 128,
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(12),
                                        border: Border.all(color: AppTheme.outlineVariant),
                                        image: const DecorationImage(
                                          image: NetworkImage('https://lh3.googleusercontent.com/aida-public/AB6AXuAH2zoaGuZhzn66X103dBIaP3KIsSOPDqQKD7vihF1yc8u0frZTHycnhOaXYbmwnKmMAtHDhO8V2zzbNyegtrPzLEeU9q7skHe-hnrMEBjiLLgeCgpnnZakXeZMhs2LsDlt7E9cGTBE1qjnhzOPRNTX-Ju_tY2cqvsK8w3He2rT49DmavJajNLKAPwwep-Cw7dCWHQBWEt8M8ocxKCit0w3Rpebj6TeXoLc3Ew6eDAs44L70MK0QKTWTEtU0yF9yEoKRon2eiZ6qTuU'),
                                          fit: BoxFit.cover,
                                        ),
                                      ),
                                    ),
                                    const SizedBox(height: 16),
                                    Text('Radius', style: AppTheme.lightTheme.textTheme.labelMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                                    const SizedBox(height: 8),
                                    DropdownButtonFormField<String>(
                                      value: 'Entire Campus (Global)',
                                      decoration: InputDecoration(
                                        filled: true,
                                        fillColor: AppTheme.surface,
                                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.outlineVariant)),
                                      ),
                                      items: const [
                                        DropdownMenuItem(value: 'Entire Campus (Global)', child: Text('Entire Campus (Global)')),
                                        DropdownMenuItem(value: 'North Wing + 500m', child: Text('North Wing + 500m')),
                                        DropdownMenuItem(value: 'Main Gate + 1km', child: Text('Main Gate + 1km')),
                                        DropdownMenuItem(value: 'Custom Polygon...', child: Text('Custom Polygon...')),
                                      ],
                                      onChanged: (val) {},
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 24),

                              // Duration
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
                                        const Icon(Icons.timer, color: AppTheme.outline),
                                        const SizedBox(width: 8),
                                        Text('Duration', style: AppTheme.lightTheme.textTheme.titleMedium),
                                      ],
                                    ),
                                    const SizedBox(height: 16),
                                    Row(
                                      children: [
                                        Expanded(child: _buildDurationButton('30m')),
                                        const SizedBox(width: 8),
                                        Expanded(child: _buildDurationButton('1h')),
                                        const SizedBox(width: 8),
                                        Expanded(child: _buildDurationButton('4h')),
                                      ],
                                    ),
                                    const SizedBox(height: 16),
                                    Row(
                                      children: [
                                        Checkbox(value: false, onChanged: (val) {}, activeColor: AppTheme.secondary),
                                        const Text('Require manual dismissal', style: TextStyle(fontSize: 12)),
                                      ],
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
                      onPressed: _showConfirmationModal,
                      icon: const Icon(Icons.cell_tower),
                      label: const Text('Send Broadcast'),
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

  Widget _buildDurationButton(String text) {
    final isSelected = _selectedDuration == text;
    return GestureDetector(
      onTap: () => setState(() => _selectedDuration = text),
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 8),
        decoration: BoxDecoration(
          color: isSelected ? AppTheme.secondaryContainer : AppTheme.surfaceContainer,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: isSelected ? AppTheme.secondary : Colors.transparent),
        ),
        alignment: Alignment.center,
        child: Text(text, style: TextStyle(color: isSelected ? AppTheme.onSecondaryContainer : AppTheme.onSurfaceVariant, fontWeight: FontWeight.bold)),
      ),
    );
  }
}
