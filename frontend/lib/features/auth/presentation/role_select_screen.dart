import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../core/theme.dart';

class RoleSelectScreen extends StatelessWidget {
  const RoleSelectScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = AppTheme.lightTheme.textTheme;

    return Scaffold(
      body: Stack(
        children: [
          // Background Image
          Positioned.fill(
            child: Opacity(
              opacity: 0.3,
              child: Image.network(
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCNVS1JAxWjvmOHSKRP3Y-M_pYvJVMoQStYthu3IQ_TuYA_QJ3qjZ9ZP3CfbILU8IxbnUakUwRyvUQ3Ry-MFbqAe-wJn6tm0ZtXHup0LvNskQVxzb1VHpIo-CeBct3gRrw7NNfZb8vpzHHFMqb5vayv1-NAUX5HM_3On6yFIg0b9oiH6gIa_by5GFo1uL2ubXLNddKbsLkVrn4NxNnouW02Q_teQMdHYvACCjXUqffQN76Yu_n2gHdOmPIbpxNMI0Se64W-zkljk8V8',
                fit: BoxFit.cover,
              ),
            ),
          ),
          // Gradient Overlay
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [
                    AppTheme.background.withOpacity(0.9),
                    AppTheme.background.withOpacity(0.6),
                    AppTheme.background.withOpacity(0.9),
                  ],
                ),
              ),
            ),
          ),
          // Grid Pattern (Simulated with a faint repeated radial gradient or just empty for now since it's subtle)
          Positioned.fill(
            child: CustomPaint(painter: GridPatternPainter()),
          ),
          // Main Content
          SafeArea(
            child: LayoutBuilder(
              builder: (context, constraints) {
                final isDesktop = constraints.maxWidth > 768;
                return SingleChildScrollView(
                  child: Center(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 24),
                    child: ConstrainedBox(
                      constraints: const BoxConstraints(maxWidth: 1024),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          // Header
                          Container(
                            width: 64,
                            height: 64,
                            decoration: BoxDecoration(
                              color: AppTheme.surfaceContainer,
                              borderRadius: BorderRadius.circular(12),
                              boxShadow: [
                                BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))
                              ],
                            ),
                            child: const Icon(Icons.domain, size: 32, color: AppTheme.tertiaryContainer),
                          ),
                          const SizedBox(height: 16),
                          Text(
                            'SCMS',
                            style: textTheme.displayLarge?.copyWith(color: AppTheme.primary),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            'Smart Campus Management System.\nSeamlessly orchestrating your campus experience.',
                            textAlign: TextAlign.center,
                            style: textTheme.bodyLarge?.copyWith(color: AppTheme.onSurfaceVariant),
                          ),
                          const SizedBox(height: 32),

                          // Role Cards
                          if (isDesktop)
                            IntrinsicHeight(
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  Expanded(child: _buildVisitorCard(context)),
                                  const SizedBox(width: 16),
                                  Expanded(child: _buildStaffCard(context)),
                                  const SizedBox(width: 16),
                                  Expanded(child: _buildAdminCard(context)),
                                ],
                              ),
                            )
                          else
                            Column(
                              children: [
                                _buildVisitorCard(context),
                                const SizedBox(height: 16),
                                _buildStaffCard(context),
                                const SizedBox(height: 16),
                                _buildAdminCard(context),
                              ],
                            ),

                          const SizedBox(height: 24),
                          // Footer
                          Text(
                            '© 2026 Security & Campus Management',
                            style: textTheme.bodySmall?.copyWith(color: AppTheme.outline),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              );
            },
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildVisitorCard(BuildContext context) {
    return _RoleCard(
      title: 'Visitor',
      description: 'Anonymous access to campus map, parking availability, and public announcements.',
      actionText: 'Enter as Guest',
      iconMain: Icons.map,
      iconSmall: Icons.directions_walk,
      bgColor: AppTheme.secondary,
      textColor: AppTheme.onSecondary,
      decorationColor: AppTheme.secondaryContainer,
      onTap: () => context.go('/map'),
    );
  }

  Widget _buildStaffCard(BuildContext context) {
    return _RoleCard(
      title: 'Staff',
      description: 'Secure login for Wardens, Administrators, and Security Personnel to manage operations.',
      actionText: 'Proceed to Login',
      iconMain: Icons.admin_panel_settings,
      iconSmall: Icons.shield,
      bgColor: AppTheme.tertiaryContainer,
      textColor: AppTheme.onTertiary,
      decorationColor: AppTheme.tertiaryContainer,
      onTap: () => context.go('/login?role=staff'),
    );
  }

  Widget _buildAdminCard(BuildContext context) {
    return _RoleCard(
      title: 'Admin',
      description: 'System administration, audit logs, user and campus configuration.',
      actionText: 'Admin Login',
      iconMain: Icons.security,
      iconSmall: Icons.lock,
      bgColor: AppTheme.primaryContainer,
      textColor: AppTheme.onPrimaryContainer,
      decorationColor: AppTheme.primaryContainer,
      onTap: () => context.go('/login?role=admin'),
    );
  }
}

class _RoleCard extends StatelessWidget {
  final String title;
  final String description;
  final String actionText;
  final IconData iconMain;
  final IconData iconSmall;
  final Color bgColor;
  final Color textColor;
  final Color decorationColor;
  final VoidCallback onTap;

  const _RoleCard({
    required this.title,
    required this.description,
    required this.actionText,
    required this.iconMain,
    required this.iconSmall,
    required this.bgColor,
    required this.textColor,
    required this.decorationColor,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 10,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Stack(
          children: [
            // Decorative giant icon
            Positioned(
              right: -20,
              top: -20,
              child: Icon(
                iconMain,
                size: 140,
                color: decorationColor.withOpacity(0.1),
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 48,
                  height: 48,
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.2),
                    shape: BoxShape.circle,
                  ),
                  child: Icon(iconSmall, color: textColor),
                ),
                const SizedBox(height: 16),
                Text(
                  title,
                  style: AppTheme.lightTheme.textTheme.headlineLarge?.copyWith(color: textColor),
                ),
                const SizedBox(height: 8),
                Text(
                  description,
                  style: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(color: textColor.withOpacity(0.9)),
                ),
                const SizedBox(height: 16),
                Row(
                  children: [
                    Text(
                      actionText,
                      style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(color: textColor),
                    ),
                    const SizedBox(width: 8),
                    Icon(Icons.arrow_forward, size: 16, color: textColor),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class GridPatternPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppTheme.outline.withOpacity(0.05)
      ..strokeWidth = 1.0;

    const double spacing = 40.0;
    
    for (double i = 0; i < size.width; i += spacing) {
      canvas.drawLine(Offset(i, 0), Offset(i, size.height), paint);
    }
    for (double i = 0; i < size.height; i += spacing) {
      canvas.drawLine(Offset(0, i), Offset(size.width, i), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
