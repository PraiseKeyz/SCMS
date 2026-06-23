import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../../core/theme.dart';
import '../providers/auth_provider.dart';
import '../domain/models/user_model.dart';

class LoginScreen extends ConsumerStatefulWidget {
  final String? role;
  const LoginScreen({Key? key, this.role}) : super(key: key);

  @override
  ConsumerState<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends ConsumerState<LoginScreen> {
  late TextEditingController _emailController;
  late TextEditingController _passwordController;
  bool _obscurePassword = true;
  bool _rememberMe = false;
  bool _isLoading = false;

  @override
  void initState() {
    super.initState();
    if (widget.role == 'admin') {
      _emailController = TextEditingController(text: 'admin@scms.dev');
      _passwordController = TextEditingController(text: 'Admin@9999');
    } else {
      _emailController = TextEditingController(text: 'alpha@scms.dev');
      _passwordController = TextEditingController(text: 'Warden@123');
    }
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _handleLogin() async {
    final email = _emailController.text;
    final password = _passwordController.text;
    if (email.isNotEmpty && password.isNotEmpty) {
      setState(() => _isLoading = true);
      try {
        await ref.read(authNotifierProvider.notifier).login(email, password);
        final user = ref.read(currentUserProvider);
        if (user != null) {
          if (user.role == Role.admin) {
            context.go('/admin/user-management');
          } else if (user.role == Role.warden) {
            context.go('/warden-dashboard');
          } else {
            context.go('/map');
          }
        }
      } catch (e) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text(e.toString().replaceAll('Exception: ', ''))),
          );
        }
      } finally {
        if (mounted) setState(() => _isLoading = false);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme.background,
      body: Stack(
        children: [
          // Background Pattern (simulated)
          Positioned.fill(
            child: CustomPaint(painter: GridPatternPainter()),
          ),
          
          SafeArea(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24.0),
              child: Center(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 440),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      // Back Button
                      Align(
                        alignment: Alignment.centerLeft,
                        child: TextButton.icon(
                          onPressed: () => context.go('/role-select'),
                          icon: const Icon(Icons.arrow_back, color: AppTheme.onSurfaceVariant),
                          label: Text('Role Selection', style: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(color: AppTheme.onSurfaceVariant)),
                          style: TextButton.styleFrom(padding: EdgeInsets.zero, alignment: Alignment.centerLeft),
                        ),
                      ),
                      const SizedBox(height: 24),

                      // Login Card
                      Container(
                        padding: const EdgeInsets.all(32),
                        decoration: BoxDecoration(
                          color: AppTheme.surface.withOpacity(0.9),
                          borderRadius: BorderRadius.circular(24),
                          border: Border.all(color: AppTheme.outlineVariant.withOpacity(0.5)),
                          boxShadow: [
                            BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 6, offset: const Offset(0, 4)),
                          ],
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            // Header
                            Center(
                              child: Container(
                                width: 64,
                                height: 64,
                                decoration: const BoxDecoration(
                                  color: AppTheme.primaryContainer,
                                  shape: BoxShape.circle,
                                ),
                                child: const Icon(Icons.security, size: 32, color: AppTheme.onPrimary),
                              ),
                            ),
                            const SizedBox(height: 24),
                            Text(
                              'SCMS Admin',
                              textAlign: TextAlign.center,
                              style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary, fontWeight: FontWeight.bold),
                            ),
                            const SizedBox(height: 8),
                            Text(
                              'Secure Staff Access Portal',
                              textAlign: TextAlign.center,
                              style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant),
                            ),
                            const SizedBox(height: 32),

                            // Form
                            Text('Email Address', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface, fontSize: 14)),
                            const SizedBox(height: 8),
                            TextField(
                              controller: _emailController,
                              decoration: InputDecoration(
                                hintText: 'admin@scms.local',
                                prefixIcon: const Icon(Icons.mail, color: AppTheme.onSurfaceVariant),
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(12),
                                  borderSide: const BorderSide(color: AppTheme.outlineVariant),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(12),
                                  borderSide: const BorderSide(color: AppTheme.secondary, width: 2),
                                ),
                                filled: true,
                                fillColor: AppTheme.surface,
                              ),
                            ),
                            const SizedBox(height: 24),

                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text('Password', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface, fontSize: 14)),
                                Text('Forgot Password?', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.tertiaryContainer)),
                              ],
                            ),
                            const SizedBox(height: 8),
                            TextField(
                              controller: _passwordController,
                              obscureText: _obscurePassword,
                              decoration: InputDecoration(
                                hintText: '••••••••',
                                prefixIcon: const Icon(Icons.lock, color: AppTheme.onSurfaceVariant),
                                suffixIcon: IconButton(
                                  icon: Icon(_obscurePassword ? Icons.visibility_off : Icons.visibility, color: AppTheme.onSurfaceVariant),
                                  onPressed: () => setState(() => _obscurePassword = !_obscurePassword),
                                ),
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(12),
                                  borderSide: const BorderSide(color: AppTheme.outlineVariant),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(12),
                                  borderSide: const BorderSide(color: AppTheme.secondary, width: 2),
                                ),
                                filled: true,
                                fillColor: AppTheme.surface,
                              ),
                            ),
                            const SizedBox(height: 16),

                            Row(
                              children: [
                                Checkbox(
                                  value: _rememberMe,
                                  onChanged: (val) => setState(() => _rememberMe = val ?? false),
                                  activeColor: AppTheme.secondary,
                                ),
                                Text('Remember this device', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                              ],
                            ),
                            const SizedBox(height: 32),

                            ElevatedButton(
                              onPressed: _isLoading ? null : _handleLogin,
                              style: ElevatedButton.styleFrom(
                                backgroundColor: AppTheme.tertiaryContainer,
                                foregroundColor: AppTheme.onTertiary,
                                padding: const EdgeInsets.symmetric(vertical: 16),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                              ),
                              child: _isLoading 
                                ? const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                                : const Text('Login', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                            ),
                            
                            const SizedBox(height: 32),
                            const Divider(height: 1, color: AppTheme.outlineVariant),
                            const SizedBox(height: 24),
                            
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const Icon(Icons.info_outline, size: 16, color: AppTheme.outline),
                                const SizedBox(width: 8),
                                Expanded(
                                  child: Text('Authorized personnel only. All access is logged.', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.outline, fontSize: 12), textAlign: TextAlign.center,),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
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
