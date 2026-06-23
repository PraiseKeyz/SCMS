import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/admin_provider.dart';
import '../../../core/theme.dart';
import '../../../core/widgets/responsive_scaffold.dart';

class UserManagementScreen extends ConsumerStatefulWidget {
  const UserManagementScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<UserManagementScreen> createState() => _UserManagementScreenState();
}

class _UserManagementScreenState extends ConsumerState<UserManagementScreen> {
  @override
  Widget build(BuildContext context) {
    final usersAsync = ref.watch(usersProvider);

    return ResponsiveScaffold(
      title: 'User Management',
      subtitle: 'Admin Portal',
      isWarden: true,
      currentIndex: 1, // Users index is 1
      destinations: const [
        AppNavigationDestination(label: 'Logs', icon: Icons.history, route: '/admin/audit-logs'),
        AppNavigationDestination(label: 'Users', icon: Icons.people, route: '/admin/user-management'),
        AppNavigationDestination(label: 'Config', icon: Icons.settings, route: '/admin/campus-config'),
      ],
      body: Stack(
        children: [
          SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 1200),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Header
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('User Management', style: AppTheme.lightTheme.textTheme.headlineMedium?.copyWith(color: AppTheme.primary, fontWeight: FontWeight.bold)),
                              const SizedBox(height: 4),
                              Text('Manage system access, update roles, and monitor status for all administrative and warden staff across the campus.', style: AppTheme.lightTheme.textTheme.bodyMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                            ],
                          ),
                        ),
                        if (MediaQuery.of(context).size.width > 768)
                          ElevatedButton.icon(
                            onPressed: () {},
                            icon: const Icon(Icons.add),
                            label: const Text('Add Staff Member'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: AppTheme.primary,
                              foregroundColor: AppTheme.onPrimary,
                              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                            ),
                          ),
                      ],
                    ),
                    const SizedBox(height: 24),

                    // Filters
                    if (MediaQuery.of(context).size.width <= 768)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 16),
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: 'Search staff members...',
                            prefixIcon: const Icon(Icons.search),
                            filled: true,
                            fillColor: AppTheme.surfaceContainerLow,
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.outlineVariant)),
                          ),
                        ),
                      ),
                    
                    Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        color: AppTheme.surfaceContainerLowest,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: AppTheme.outlineVariant),
                      ),
                      child: SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            OutlinedButton.icon(
                              onPressed: () {},
                              icon: const Icon(Icons.filter_list, size: 16),
                              label: const Text('All Roles'),
                              style: OutlinedButton.styleFrom(
                                foregroundColor: AppTheme.onSurface,
                                backgroundColor: AppTheme.surfaceContainer,
                                side: const BorderSide(color: Colors.transparent),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                              ),
                            ),
                            const SizedBox(width: 8),
                            TextButton(onPressed: () {}, style: TextButton.styleFrom(foregroundColor: AppTheme.onSurfaceVariant), child: const Text('Admins')),
                            const SizedBox(width: 8),
                            TextButton(onPressed: () {}, style: TextButton.styleFrom(foregroundColor: AppTheme.onSurfaceVariant), child: const Text('Wardens')),
                            const SizedBox(width: 16),
                            const Text('Total: 42 Users', style: TextStyle(color: AppTheme.onSurfaceVariant, fontSize: 12)),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 24),

                    // Grid
                    LayoutBuilder(
                      builder: (context, constraints) {
                        int crossAxisCount = 1;
                        if (constraints.maxWidth > 1000) crossAxisCount = 4;
                        else if (constraints.maxWidth > 800) crossAxisCount = 3;
                        else if (constraints.maxWidth > 600) crossAxisCount = 2;

                        return usersAsync.when(
                          data: (users) {
                            if (users.isEmpty) return const Center(child: Text('No users found.'));
                            return GridView.builder(
                              itemCount: users.length,
                              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                                crossAxisCount: crossAxisCount,
                                crossAxisSpacing: 16,
                                mainAxisSpacing: 16,
                                childAspectRatio: 0.85,
                              ),
                              shrinkWrap: true,
                              physics: const NeverScrollableScrollPhysics(),
                              itemBuilder: (context, index) {
                                final user = users[index];
                                final initials = user.name.isNotEmpty ? user.name.substring(0, 1).toUpperCase() : '?';
                                IconData roleIcon = Icons.person;
                                if (user.role.name.toUpperCase() == 'ADMIN') roleIcon = Icons.admin_panel_settings;
                                else if (user.role.name.toUpperCase() == 'WARDEN') roleIcon = Icons.local_police;
                                
                                return _buildUserCard(
                                  initials,
                                  user.name,
                                  user.role.name.toUpperCase(),
                                  roleIcon,
                                  'Active',
                                  Colors.green,
                                  'Just now',
                                  () async {
                                    final confirm = await showDialog<bool>(
                                      context: context,
                                      builder: (context) => AlertDialog(
                                        title: const Text('Delete User'),
                                        content: Text('Are you sure you want to delete ${user.name}?'),
                                        actions: [
                                          TextButton(onPressed: () => Navigator.pop(context, false), child: const Text('Cancel')),
                                          TextButton(onPressed: () => Navigator.pop(context, true), style: TextButton.styleFrom(foregroundColor: AppTheme.error), child: const Text('Delete')),
                                        ],
                                      ),
                                    );
                                    if (confirm == true) {
                                      try {
                                        await ref.read(adminNotifierProvider.notifier).deleteUser(user.id);
                                        if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('User deleted successfully')));
                                      } catch (e) {
                                        if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Failed to delete user: $e'), backgroundColor: AppTheme.error));
                                      }
                                    }
                                  },
                                );
                              },
                            );
                          },
                          loading: () => const Center(child: CircularProgressIndicator()),
                          error: (e, st) => Center(child: Text('Error: $e')),
                        );
                      },
                    ),
                    
                    const SizedBox(height: 32),
                    Center(
                      child: OutlinedButton(
                        onPressed: () {},
                        style: OutlinedButton.styleFrom(
                          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
                        ),
                        child: const Text('Load More Staff'),
                      ),
                    ),
                    const SizedBox(height: 80),
                  ],
                ),
              ),
            ),
          ),
          if (MediaQuery.of(context).size.width <= 768)
            Positioned(
              bottom: 32,
              right: 24,
              child: FloatingActionButton(
                onPressed: () {},
                backgroundColor: AppTheme.primary,
                foregroundColor: AppTheme.onPrimary,
                child: const Icon(Icons.add),
              ),
            ),
        ],
      ),
    );
  }

  Widget _buildUserCard(String initials, String name, String role, IconData roleIcon, String status, Color statusColor, String lastLogin, VoidCallback onDelete) {
    return Container(
      decoration: BoxDecoration(
        color: AppTheme.surfaceContainerLowest,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppTheme.outlineVariant),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        children: [
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 48,
                        height: 48,
                        decoration: BoxDecoration(color: AppTheme.surfaceContainer, shape: BoxShape.circle, border: Border.all(color: AppTheme.outlineVariant)),
                        alignment: Alignment.center,
                        child: Text(initials, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                      ),
                      Row(
                        children: [
                          IconButton(icon: const Icon(Icons.edit, size: 16), onPressed: () {}, padding: EdgeInsets.zero, constraints: const BoxConstraints(), color: AppTheme.onSurfaceVariant),
                          const SizedBox(width: 8),
                          IconButton(icon: const Icon(Icons.delete, size: 16), onPressed: onDelete, padding: EdgeInsets.zero, constraints: const BoxConstraints(), color: AppTheme.error),
                        ],
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  Text(name, style: AppTheme.lightTheme.textTheme.titleMedium),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      Icon(roleIcon, size: 16, color: AppTheme.onSurfaceVariant),
                      const SizedBox(width: 4),
                      Text(role, style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                    ],
                  ),
                  const Spacer(),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(color: statusColor.withOpacity(0.1), borderRadius: BorderRadius.circular(12), border: Border.all(color: statusColor.withOpacity(0.3))),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.circle, color: statusColor, size: 8),
                        const SizedBox(width: 4),
                        Text(status, style: TextStyle(color: statusColor, fontSize: 10, fontWeight: FontWeight.bold)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
            decoration: const BoxDecoration(
              color: AppTheme.surfaceContainerLow,
              border: Border(top: BorderSide(color: AppTheme.outlineVariant)),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Last login: $lastLogin', style: AppTheme.lightTheme.textTheme.bodySmall?.copyWith(color: AppTheme.onSurfaceVariant)),
                const Icon(Icons.chevron_right, size: 16, color: AppTheme.outline),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
