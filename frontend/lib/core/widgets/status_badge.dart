import 'package:flutter/material.dart';
import '../theme.dart';

enum BadgeStatus { secure, warning, critical, normal }

class StatusBadge extends StatelessWidget {
  final BadgeStatus status;
  final String label;
  final bool showDot;

  const StatusBadge({
    Key? key,
    required this.status,
    required this.label,
    this.showDot = true,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Color bgColor;
    Color textColor;
    Color dotColor;

    switch (status) {
      case BadgeStatus.secure:
        bgColor = AppTheme.statusGreenBg;
        textColor = const Color(0xFF166534); // Match the HTML text color for green
        dotColor = AppTheme.statusGreen;
        break;
      case BadgeStatus.warning:
        bgColor = AppTheme.statusAmberBg;
        textColor = const Color(0xFFB06000); // Match the HTML text color for amber
        dotColor = AppTheme.statusAmber;
        break;
      case BadgeStatus.critical:
        bgColor = AppTheme.statusRedBg;
        textColor = AppTheme.onErrorContainer;
        dotColor = AppTheme.statusRed;
        break;
      case BadgeStatus.normal:
        bgColor = AppTheme.surfaceContainerLow;
        textColor = AppTheme.onSurfaceVariant;
        dotColor = AppTheme.outline;
        break;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (showDot) ...[
            Container(
              width: 8,
              height: 8,
              decoration: BoxDecoration(
                color: dotColor,
                shape: BoxShape.circle,
              ),
            ),
            const SizedBox(width: 4),
          ],
          Text(
            label,
            style: const TextStyle(
              fontFamily: 'Inter',
              fontSize: 13,
              fontWeight: FontWeight.w600,
              height: 16 / 13,
              color: null, // use the DefaultTextStyle or inherit if possible, but we'll set explicitly
            ).copyWith(color: textColor),
          ),
        ],
      ),
    );
  }
}
