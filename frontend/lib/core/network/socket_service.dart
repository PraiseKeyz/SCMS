import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import '../config.dart';

class SocketService {
  late IO.Socket _parkingSocket;
  late IO.Socket _alertsSocket;
  final FlutterSecureStorage _storage;

  // We could use Riverpod streams to broadcast these events, but for simplicity
  // we'll just expose callbacks that Providers can hook into.
  Function(dynamic)? onZoneStatusUpdated;
  Function(dynamic)? onAlertBroadcasted;
  Function(dynamic)? onIncidentReported;

  SocketService(this._storage);

  Future<void> connect() async {
    final token = await _storage.read(key: 'accessToken');
    final Map<dynamic, dynamic>? authOption = token != null ? {'token': token} : null;

    final baseUrl = AppConfig.apiBaseUrl.replaceAll('/api/v1', '');

    _parkingSocket = IO.io('$baseUrl/parking', IO.OptionBuilder()
        .setTransports(['websocket'])
        .setAuth(authOption ?? {})
        .disableAutoConnect()
        .build());

    _alertsSocket = IO.io('$baseUrl/alerts', IO.OptionBuilder()
        .setTransports(['websocket'])
        .setAuth(authOption ?? {})
        .disableAutoConnect()
        .build());

    // Setup Listeners for Parking
    _parkingSocket.onConnect((_) {
      print('Connected to /parking namespace');
      _parkingSocket.emit('subscribe:zones');
    });

    _parkingSocket.on('zone:status_updated', (data) {
      if (onZoneStatusUpdated != null) onZoneStatusUpdated!(data);
    });

    // Setup Listeners for Alerts
    _alertsSocket.onConnect((_) {
      print('Connected to /alerts namespace');
      _alertsSocket.emit('subscribe:alerts');
    });

    _alertsSocket.on('alert:broadcast', (data) {
      if (onAlertBroadcasted != null) onAlertBroadcasted!(data);
    });

    _alertsSocket.on('alert:incident', (data) {
      if (onIncidentReported != null) onIncidentReported!(data);
    });

    // Connect
    _parkingSocket.connect();
    _alertsSocket.connect();
  }

  void disconnect() {
    _parkingSocket.disconnect();
    _alertsSocket.disconnect();
  }
}
