class AppConfig {
  static const bool useMockData = false;
  static const String apiBaseUrl = 'https://scms-vdsf.onrender.com/api/v1';
  
  // Example for mapbox integration if needed
  static const String mapboxAccessToken = String.fromEnvironment('MAPBOX_TOKEN', defaultValue: '');
}
