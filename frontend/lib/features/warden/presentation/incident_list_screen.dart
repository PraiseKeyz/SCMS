import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';
import '../../alerts/providers/alerts_provider.dart';
import '../../alerts/domain/models/alerts_models.dart';

class IncidentListScreen extends ConsumerStatefulWidget {
  const IncidentListScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<IncidentListScreen> createState() => _IncidentListScreenState();
}

class _IncidentListScreenState extends ConsumerState<IncidentListScreen> {
  // Using Mock Data since there is no GET /alerts/incidents endpoint yet
  List<Incident> activeIncidents = [
    Incident(
      id: 'mock-inc-1',
      type: 'SECURITY',
      description: 'Unauthorized Access Attempt at Service Gate 2. Situation contained.',
      latitude: 6.8250,
      longitude: 3.4600,
      resolved: false,
    ),
    Incident(
      id: 'mock-inc-2',
      type: 'MEDICAL',
      description: 'Person fainted near food court',
      latitude: 6.8268,
      longitude: 3.4622,
      resolved: false,
    ),
    Incident(
      id: 'mock-inc-3',
      type: 'FIRE',
      description: 'Small smoke reported near library block',
      latitude: 6.8270,
      longitude: 3.4650,
      resolved: false,
    ),
  ];

  String? _resolvingIncidentId;

  Future<void> _resolveIncident(Incident incident) async {
    setState(() => _resolvingIncidentId = incident.id);
    try {
      // Call the API (which might fail with 404 because this is a mock ID)
      await ref.read(alertsNotifierProvider.notifier).resolveIncident(incident.id);
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Incident resolved successfully')),
        );
      }
    } catch (e) {
      if (mounted) {
        // We still show the error, but we'll remove it locally to demonstrate the UI
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('API Error: $e\n(Locally resolved for demo)'),
            backgroundColor: AppTheme.error,
          ),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _resolvingIncidentId = null;
          activeIncidents.removeWhere((i) => i.id == incident.id);
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: '[Warden] Active Incidents',
      subtitle: 'Incident Management',
      isWarden: true,
      currentIndex: 0,
      destinations: const [
        AppNavigationDestination(label: 'Dashboard', icon: Icons.dashboard, route: '/warden-dashboard'),
        AppNavigationDestination(label: 'Deployment', icon: Icons.security, route: '/warden-dashboard/deployment'),
        AppNavigationDestination(label: 'Alerts', icon: Icons.campaign, route: '/broadcast-alert'),
        AppNavigationDestination(label: 'Profile', icon: Icons.person, route: '/role-select'),
      ],
      body: activeIncidents.isEmpty 
        ? const Center(child: Text("No active incidents. Good job!"))
        : ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: activeIncidents.length,
            itemBuilder: (context, index) {
              final incident = activeIncidents[index];
              return Card(
                color: AppTheme.surfaceContainerLow,
                margin: const EdgeInsets.only(bottom: 12),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: AppTheme.errorContainer,
                          shape: BoxShape.circle,
                        ),
                        child: Icon(Icons.warning, color: AppTheme.error),
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              incident.type, 
                              style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(
                                color: AppTheme.onSurface,
                                fontWeight: FontWeight.bold,
                              )
                            ),
                            const SizedBox(height: 4),
                            Text(incident.description),
                            const SizedBox(height: 8),
                            Text('Lat: ${incident.latitude}, Lng: ${incident.longitude}', style: const TextStyle(fontSize: 12, color: Colors.grey)),
                          ],
                        ),
                      ),
                      ElevatedButton(
                        onPressed: _resolvingIncidentId != null ? null : () => _resolveIncident(incident),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppTheme.primary,
                          foregroundColor: AppTheme.onPrimary,
                        ),
                        child: _resolvingIncidentId == incident.id
                            ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                            : const Text("Resolve"),
                      )
                    ],
                  ),
                ),
              );
            },
          ),
    );
  }
}
