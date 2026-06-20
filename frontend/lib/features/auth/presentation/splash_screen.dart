import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../providers/auth_provider.dart';
import '../../../core/theme.dart';

class SplashScreen extends ConsumerStatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends ConsumerState<SplashScreen> {
  String? _error;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _checkAuth();
    });
  }

  @override
  void reassemble() {
    super.reassemble();
    _checkAuth();
  }

  Future<void> _checkAuth() async {
    try {
      await ref.read(authNotifierProvider.notifier).checkAuthStatus();
      if (!mounted) return;

      final user = ref.read(currentUserProvider);
      if (user != null) {
        context.go('/warden-dashboard');
      } else {
        context.go('/role-select');
      }
    } catch (e, st) {
      if (mounted) {
        setState(() {
          _error = 'Error: $e\n$st';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    ref.watch(authNotifierProvider); // Keep the provider alive while on splash screen
    
    return Scaffold(
      backgroundColor: AppTheme.tertiaryContainer,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(
              Icons.directions_car,
              size: 80,
              color: Colors.white,
            ),
            const SizedBox(height: 24),
            Text(
              'SCMS',
              style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 2,
                  ),
            ),
            const SizedBox(height: 8),
            Text(
              'Smart Campus Management System',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Colors.white70,
                  ),
            ),
            const SizedBox(height: 48),
            const CircularProgressIndicator(
              valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
            ),
            const SizedBox(height: 24),
            TextButton(
              onPressed: () {
                _checkAuth();
              },
              child: const Text('Tap here if stuck', style: TextStyle(color: Colors.white54)),
            ),
          ],
        ),
      ),
    );
  }
}
