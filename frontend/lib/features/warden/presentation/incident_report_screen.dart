import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../alerts/providers/alerts_provider.dart';
import 'map_selection_screen.dart';

class IncidentReportScreen extends ConsumerStatefulWidget {
  const IncidentReportScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<IncidentReportScreen> createState() => _IncidentReportScreenState();
}

class _IncidentReportScreenState extends ConsumerState<IncidentReportScreen> {
  final _formKey = GlobalKey<FormState>();
  String? _selectedType;
  final _descController = TextEditingController();

  bool _isSubmitting = false;
  double? _selectedLat;
  double? _selectedLng;

  void _useCurrentLocation() {
    setState(() {
      _selectedLat = 6.8268;
      _selectedLng = 3.4622;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Location updated to Current GPS')),
    );
  }

  Future<void> _openMapSelection() async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => MapSelectionScreen(
          initialLat: _selectedLat ?? 6.8268,
          initialLng: _selectedLng ?? 3.4622,
        ),
      ),
    );

    if (result != null && result is Map<String, double>) {
      setState(() {
        _selectedLat = result['lat'];
        _selectedLng = result['lng'];
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Location updated from map')));
      }
    }
  }

  Future<void> _handleSubmit() async {
    if (_formKey.currentState!.validate() && _selectedType != null) {
      if (_selectedLat == null || _selectedLng == null) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Please select a location'), backgroundColor: AppTheme.error));
        return;
      }
      setState(() => _isSubmitting = true);
      try {
        await ref.read(alertsNotifierProvider.notifier).reportIncident(
          _selectedType!,
          _descController.text,
          _selectedLat!,
          _selectedLng!,
        );
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('Incident report submitted successfully.'),
              backgroundColor: AppTheme.secondary,
            ),
          );
          _descController.clear();
          setState(() => _selectedType = null);
        }
      } catch (e) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text('Failed to submit: $e'),
              backgroundColor: AppTheme.error,
            ),
          );
        }
      } finally {
        if (mounted) {
          setState(() => _isSubmitting = false);
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: 'Report Incident',
      subtitle: 'Central Hub',
      isWarden: true,
      currentIndex: 2, // Incidents
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
            constraints: const BoxConstraints(maxWidth: 600),
            child: Form(
              key: _formKey,
              child: Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: AppTheme.surfaceContainerLowest,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: AppTheme.outlineVariant),
                  boxShadow: [
                    BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2)),
                  ],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    // Header
                    Text('Report Incident', style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary, fontWeight: FontWeight.bold)),
                    const SizedBox(height: 32),

                    // Incident Type
                    Text('Incident Type', style: AppTheme.lightTheme.textTheme.titleMedium),
                    const SizedBox(height: 8),
                    DropdownButtonFormField<String>(
                      value: _selectedType,
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: AppTheme.surface,
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.outlineVariant)),
                      ),
                      hint: const Text('Select category...'),
                      items: const [
                        DropdownMenuItem(value: 'SECURITY', child: Text('Security')),
                        DropdownMenuItem(value: 'MEDICAL', child: Text('Medical')),
                        DropdownMenuItem(value: 'FIRE', child: Text('Fire')),
                        DropdownMenuItem(value: 'CROWD', child: Text('Crowd')),
                        DropdownMenuItem(value: 'OTHER', child: Text('Other')),
                      ],
                      onChanged: (val) => setState(() => _selectedType = val),
                      validator: (val) => val == null ? 'Please select a type' : null,
                    ),
                    const SizedBox(height: 24),

                    // Description
                    Text('Description', style: AppTheme.lightTheme.textTheme.titleMedium),
                    const SizedBox(height: 8),
                    TextFormField(
                      controller: _descController,
                      maxLines: 4,
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: AppTheme.surface,
                        hintText: 'Provide details of the incident...',
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.outlineVariant)),
                      ),
                      validator: (val) => val == null || val.isEmpty ? 'Description is required' : null,
                    ),
                    const SizedBox(height: 24),

                    // Location
                    Text('Location', style: AppTheme.lightTheme.textTheme.titleMedium),
                    const SizedBox(height: 8),
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton.icon(
                            onPressed: _useCurrentLocation,
                            icon: const Icon(Icons.my_location),
                            label: const Text('Current GPS'),
                            style: OutlinedButton.styleFrom(
                              foregroundColor: AppTheme.onSurface,
                              backgroundColor: AppTheme.surfaceContainer,
                              padding: const EdgeInsets.symmetric(vertical: 16),
                              side: const BorderSide(color: AppTheme.outlineVariant),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                            ),
                          ),
                        ),
                        const SizedBox(width: 16),
                        Expanded(
                          child: OutlinedButton.icon(
                            onPressed: _openMapSelection,
                            icon: const Icon(Icons.map),
                            label: const Text('Select on Map'),
                            style: OutlinedButton.styleFrom(
                              foregroundColor: AppTheme.onSurface,
                              backgroundColor: AppTheme.surfaceContainer,
                              padding: const EdgeInsets.symmetric(vertical: 16),
                              side: const BorderSide(color: AppTheme.outlineVariant),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: AppTheme.surfaceContainerLow,
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: AppTheme.outlineVariant),
                      ),
                      child: Row(
                        children: [
                          const Icon(Icons.location_on, color: AppTheme.secondary, size: 20),
                          const SizedBox(width: 8),
                          Text(
                            _selectedLat != null && _selectedLng != null
                                ? 'Lat: ${_selectedLat!.toStringAsFixed(4)}, Lng: ${_selectedLng!.toStringAsFixed(4)}'
                                : 'No location selected',
                            style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24),

                    // Attachments
                    Text('Attachments (Optional)', style: AppTheme.lightTheme.textTheme.titleMedium),
                    const SizedBox(height: 8),
                    Container(
                      padding: const EdgeInsets.all(32),
                      decoration: BoxDecoration(
                        color: AppTheme.surfaceContainerLow,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: AppTheme.outlineVariant, style: BorderStyle.solid),
                      ),
                      child: Column(
                        children: [
                          const Icon(Icons.add_a_photo, size: 32, color: AppTheme.onSurfaceVariant),
                          const SizedBox(height: 8),
                          Text('Tap to take photo', style: AppTheme.lightTheme.textTheme.titleMedium),
                          const SizedBox(height: 4),
                          Text('or browse gallery', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                        ],
                      ),
                    ),
                    const SizedBox(height: 32),
                    const Divider(height: 1, color: AppTheme.outlineVariant),
                    const SizedBox(height: 24),

                    // Submit
                    ElevatedButton.icon(
                      onPressed: _isSubmitting ? null : _handleSubmit,
                      icon: _isSubmitting ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2)) : const Icon(Icons.send),
                      label: Text(_isSubmitting ? 'Submitting...' : 'Submit Report'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppTheme.tertiaryContainer,
                        foregroundColor: AppTheme.onTertiary,
                        padding: const EdgeInsets.symmetric(vertical: 16),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        elevation: 2,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
