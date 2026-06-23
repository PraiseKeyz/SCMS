import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../theme.dart';

class AppNavigationDestination {
  final String label;
  final IconData icon;
  final String route;

  const AppNavigationDestination({
    required this.label,
    required this.icon,
    required this.route,
  });
}

class ResponsiveScaffold extends StatelessWidget {
  final Widget body;
  final String title;
  final String subtitle;
  final List<AppNavigationDestination> destinations;
  final int currentIndex;
  final bool isWarden; // true for Warden (uses deep navy accents), false for Visitor (teal accents)
  final List<Widget>? actions;
  final Widget? floatingActionButton;

  const ResponsiveScaffold({
    Key? key,
    required this.body,
    required this.title,
    this.subtitle = 'Central Hub',
    required this.destinations,
    required this.currentIndex,
    this.isWarden = true,
    this.actions,
    this.floatingActionButton,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final bool isDesktop = MediaQuery.of(context).size.width >= 768;

    return Scaffold(
      backgroundColor: AppTheme.background,
      appBar: isDesktop ? _buildDesktopAppBar(context) : _buildMobileAppBar(context),
      floatingActionButton: floatingActionButton,
      body: Row(
        children: [
          if (isDesktop && destinations.isNotEmpty) _buildSidebar(context),
          Expanded(child: body),
        ],
      ),
      bottomNavigationBar: (!isDesktop && destinations.isNotEmpty) ? _buildBottomNav(context) : null,
      endDrawer: _buildProfileDrawer(context),
    );
  }

  Widget _buildProfileDrawer(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          UserAccountsDrawerHeader(
            decoration: BoxDecoration(color: AppTheme.surfaceContainerHigh),
            currentAccountPicture: const CircleAvatar(
              backgroundColor: AppTheme.primary,
              child: Icon(Icons.person, color: AppTheme.onPrimary),
            ),
            accountName: Text('John Doe', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.onSurface)),
            accountEmail: Text('johndoe@scms.dev', style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
          ),
          ListTile(
            leading: const Icon(Icons.person),
            title: const Text('My Profile'),
            onTap: () {},
          ),
          ListTile(
            leading: const Icon(Icons.lock_reset),
            title: const Text('Change Password'),
            onTap: () {
              context.pop(); // Close drawer
              context.push('/change-password');
            },
          ),
          const Spacer(),
          const Divider(),
          ListTile(
            leading: const Icon(Icons.logout, color: AppTheme.error),
            title: const Text('Logout', style: TextStyle(color: AppTheme.error)),
            onTap: () {
              context.pop(); // Close drawer
              context.go('/role-select'); // Go to start screen
            },
          ),
          const SizedBox(height: 24),
        ],
      ),
    );
  }

  PreferredSizeWidget _buildDesktopAppBar(BuildContext context) {
    final displayTitle = title.replaceAll('[Visitor] ', '').replaceAll('[Warden] ', '').replaceAll('[Admin] ', '');
    return AppBar(
      backgroundColor: AppTheme.surface,
      elevation: 0,
      centerTitle: false,
      leading: context.canPop() ? IconButton(
        icon: const Icon(Icons.arrow_back, color: AppTheme.onSurfaceVariant),
        onPressed: () => context.pop(),
      ) : null,
      title: Row(
        children: [
          Text('SCMS', style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary, fontWeight: FontWeight.bold)),
        ],
      ),
      actions: [
        if (actions != null) ...actions!,
        const SizedBox(width: 16),
        _buildAvatar(),
        const SizedBox(width: 32),
      ],
      bottom: PreferredSize(
        preferredSize: const Size.fromHeight(1.0),
        child: Container(
          color: AppTheme.outlineVariant.withOpacity(0.5),
          height: 1.0,
        ),
      ),
    );
  }

  PreferredSizeWidget _buildMobileAppBar(BuildContext context) {
    final displayTitle = title.replaceAll('[Visitor] ', '').replaceAll('[Warden] ', '').replaceAll('[Admin] ', '');
    return AppBar(
      backgroundColor: AppTheme.surface.withOpacity(0.9),
      elevation: 0,
      centerTitle: true,
      title: Text(displayTitle, style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(fontSize: 20, color: AppTheme.primary, fontWeight: FontWeight.bold)),
      leading: context.canPop() ? IconButton(
        icon: const Icon(Icons.arrow_back, color: AppTheme.primary),
        onPressed: () => context.pop(),
      ) : const SizedBox.shrink(),
      actions: [
        if (actions != null) ...actions!,
        Padding(
          padding: const EdgeInsets.only(right: 16.0),
          child: _buildAvatar(),
        ),
      ],
      bottom: PreferredSize(
        preferredSize: const Size.fromHeight(1.0),
        child: Container(
          color: AppTheme.outlineVariant.withOpacity(0.3),
          height: 1.0,
        ),
      ),
    );
  }

  Widget _buildAvatar() {
    return Builder(
      builder: (context) {
        return GestureDetector(
          onTap: () => Scaffold.of(context).openEndDrawer(),
          child: Container(
            width: 32,
            height: 32,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: AppTheme.outlineVariant),
              color: AppTheme.surfaceContainerHigh,
            ),
            child: const Icon(Icons.person, size: 20, color: AppTheme.onSurfaceVariant),
          ),
        );
      }
    );
  }

  Widget _buildSidebar(BuildContext context) {
    return Container(
      width: 280,
      decoration: const BoxDecoration(
        color: AppTheme.surface,
        border: Border(right: BorderSide(color: AppTheme.outlineVariant, width: 1)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title.replaceAll('[Visitor] ', '').replaceAll('[Warden] ', '').replaceAll('[Admin] ', ''), style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary)),
                const SizedBox(height: 16),
                Row(
                  children: [
                    _buildAvatar(),
                    const SizedBox(width: 12),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(isWarden ? 'Admin Portal' : 'Visitor Portal', style: AppTheme.lightTheme.textTheme.titleMedium?.copyWith(color: AppTheme.primary)),
                        Text(subtitle, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              itemCount: destinations.length,
              itemBuilder: (context, index) {
                final dest = destinations[index];
                final isSelected = index == currentIndex;

                Color bgColor = Colors.transparent;
                Color textColor = AppTheme.onSurfaceVariant;
                
                if (isSelected) {
                  bgColor = isWarden ? AppTheme.tertiaryContainer : AppTheme.secondaryContainer;
                  textColor = isWarden ? AppTheme.onTertiary : AppTheme.onSecondaryContainer;
                }

                return Padding(
                  padding: const EdgeInsets.only(bottom: 8.0),
                  child: InkWell(
                    onTap: () => context.go(dest.route),
                    borderRadius: BorderRadius.circular(24),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                      decoration: BoxDecoration(
                        color: bgColor,
                        borderRadius: BorderRadius.circular(24),
                      ),
                      child: Row(
                        children: [
                          Icon(dest.icon, color: textColor),
                          const SizedBox(width: 12),
                          Text(
                            dest.label,
                            style: AppTheme.lightTheme.textTheme.bodyLarge?.copyWith(
                              color: textColor,
                              fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                            ),
                          ),
                        ],
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

  Widget _buildBottomNav(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppTheme.surface,
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            offset: const Offset(0, -2),
            blurRadius: 4,
          ),
        ],
        borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
      ),
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: List.generate(destinations.length, (index) {
              final dest = destinations[index];
              final isSelected = index == currentIndex;

              Color bgColor = Colors.transparent;
              Color textColor = AppTheme.onSurfaceVariant;

              if (isSelected) {
                bgColor = isWarden ? AppTheme.tertiaryContainer : AppTheme.secondaryContainer;
                textColor = isWarden ? AppTheme.onTertiary : AppTheme.onSecondaryContainer;
              }

              return GestureDetector(
                onTap: () => context.go(dest.route),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                  decoration: BoxDecoration(
                    color: bgColor,
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(dest.icon, color: textColor),
                      const SizedBox(height: 4),
                      Text(
                        dest.label,
                        style: AppTheme.lightTheme.textTheme.labelSmall?.copyWith(
                          color: isSelected ? textColor : AppTheme.onSurfaceVariant,
                          fontWeight: isSelected ? FontWeight.bold : FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ),
              );
            }),
          ),
        ),
      ),
    );
  }
}
