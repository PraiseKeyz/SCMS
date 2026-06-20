import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Brand Colors (from DESIGN.md)
  static const Color surface = Color(0xFFF7F9FB);
  static const Color surfaceDim = Color(0xFFD8DADC);
  static const Color surfaceBright = Color(0xFFF7F9FB);
  static const Color surfaceContainerLowest = Color(0xFFFFFFFF);
  static const Color surfaceContainerLow = Color(0xFFF2F4F6);
  static const Color surfaceContainer = Color(0xFFECEEF0);
  static const Color surfaceContainerHigh = Color(0xFFE6E8EA);
  static const Color surfaceContainerHighest = Color(0xFFE0E3E5);
  static const Color onSurface = Color(0xFF191C1E);
  static const Color onSurfaceVariant = Color(0xFF45464D);
  static const Color inverseSurface = Color(0xFF2D3133);
  static const Color inverseOnSurface = Color(0xFFEFF1F3);
  static const Color outline = Color(0xFF76777D);
  static const Color outlineVariant = Color(0xFFC6C6CD);
  static const Color surfaceTint = Color(0xFF565E74);
  static const Color primary = Color(0xFF000000);
  static const Color onPrimary = Color(0xFFFFFFFF);
  static const Color primaryContainer = Color(0xFF131B2E);
  static const Color onPrimaryContainer = Color(0xFF7C839B);
  static const Color inversePrimary = Color(0xFFBEC6E0);
  static const Color secondary = Color(0xFF006A61);
  static const Color onSecondary = Color(0xFFFFFFFF);
  static const Color secondaryContainer = Color(0xFF86F2E4);
  static const Color onSecondaryContainer = Color(0xFF006F66);
  static const Color tertiary = Color(0xFF000000);
  static const Color onTertiary = Color(0xFFFFFFFF);
  static const Color tertiaryContainer = Color(0xFF001A42);
  static const Color onTertiaryContainer = Color(0xFF3980F4);
  static const Color error = Color(0xFFBA1A1A);
  static const Color onError = Color(0xFFFFFFFF);
  static const Color errorContainer = Color(0xFFFFDAD6);
  static const Color onErrorContainer = Color(0xFF93000A);
  static const Color background = Color(0xFFF7F9FB);
  static const Color onBackground = Color(0xFF191C1E);
  static const Color primaryFixed = Color(0xFFDAE2FD);
  static const Color onPrimaryFixedVariant = Color(0xFF3F465C);
  static const Color tertiaryFixed = Color(0xFFD8E2FF);
  static const Color onTertiaryFixed = Color(0xFF001A42);
  static const Color surfaceVariant = Color(0xFFE0E3E5);
  
  // Custom Status Colors for SCMS
  static const Color statusGreen = Color(0xFF1E8E3E);
  static const Color statusGreenBg = Color(0xFFE6F4EA);
  static const Color statusAmber = Color(0xFFF29900);
  static const Color statusAmberBg = Color(0xFFFEF7E0);
  static const Color statusRed = error;
  static const Color statusRedBg = errorContainer;

  static TextTheme _buildTextTheme(TextTheme base) {
    return GoogleFonts.interTextTheme(base).copyWith(
      displayLarge: GoogleFonts.inter(fontSize: 48, fontWeight: FontWeight.w700, height: 56 / 48, letterSpacing: -0.02),
      headlineLarge: GoogleFonts.inter(fontSize: 32, fontWeight: FontWeight.w600, height: 40 / 32),
      headlineMedium: GoogleFonts.inter(fontSize: 24, fontWeight: FontWeight.w600, height: 32 / 24),
      titleMedium: GoogleFonts.inter(fontSize: 18, fontWeight: FontWeight.w600, height: 24 / 18),
      bodyLarge: GoogleFonts.inter(fontSize: 16, fontWeight: FontWeight.w400, height: 24 / 16),
      bodyMedium: GoogleFonts.inter(fontSize: 14, fontWeight: FontWeight.w400, height: 20 / 14),
      labelSmall: GoogleFonts.inter(fontSize: 12, fontWeight: FontWeight.w700, height: 16 / 12, letterSpacing: 0.05), // label-caps
    );
  }

  static ThemeData get lightTheme {
    return ThemeData(
      brightness: Brightness.light,
      primaryColor: primary,
      scaffoldBackgroundColor: background,
      colorScheme: const ColorScheme.light(
        primary: primary,
        onPrimary: onPrimary,
        primaryContainer: primaryContainer,
        onPrimaryContainer: onPrimaryContainer,
        secondary: secondary,
        onSecondary: onSecondary,
        secondaryContainer: secondaryContainer,
        onSecondaryContainer: onSecondaryContainer,
        tertiary: tertiary,
        onTertiary: onTertiary,
        tertiaryContainer: tertiaryContainer,
        onTertiaryContainer: onTertiaryContainer,
        error: error,
        onError: onError,
        errorContainer: errorContainer,
        onErrorContainer: onErrorContainer,
        surface: surface,
        onSurface: onSurface,
        onSurfaceVariant: onSurfaceVariant,
        outline: outline,
        outlineVariant: outlineVariant,
      ),
      textTheme: _buildTextTheme(ThemeData.light().textTheme),
      appBarTheme: const AppBarTheme(
        backgroundColor: surface,
        foregroundColor: primary,
        elevation: 0,
        centerTitle: true,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: secondary,
          foregroundColor: onSecondary,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          padding: const EdgeInsets.symmetric(vertical: 16),
          textStyle: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          elevation: 0,
        ),
      ),
      cardTheme: CardThemeData(
        color: surface,
        elevation: 0, // Using custom shadows for Elevation 1 instead
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: const BorderSide(color: outlineVariant, width: 1),
        ),
      ),
    );
  }

  // Fallback dark theme
  static ThemeData get darkTheme {
    return lightTheme; // For this phase we focus on the Corporate Modern light mode 
  }
}
