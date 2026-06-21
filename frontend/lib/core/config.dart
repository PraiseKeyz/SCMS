class AppConfig {
  static const bool useMockData = true;
  static const String apiBaseUrl = 'http://127.0.0.1:3000/api/v1'; // Change to network IP for actual device testing
  
  // Example for mapbox integration if needed
  static const String mapboxAccessToken = String.fromEnvironment('MAPBOX_TOKEN', defaultValue: '');
}
