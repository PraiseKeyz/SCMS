import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/alerts', cors: { origin: '*' } })
export class AlertsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('subscribe:alerts')
  handleSubscribe(@ConnectedSocket() client: Socket, @MessageBody() _body: { lat: number; lng: number }) {
    // Radius filtering by lat/lng is a possible v2 — for the hackathon demo,
    // broadcast to everyone subscribed and let the client filter by distance.
    client.join('alerts');
  }

  emitBroadcast(alert: { id: string; message: string; expiresAt: Date }) {
    this.server.to('alerts').emit('alert:broadcast', alert);
  }

  emitIncident(incident: { type: string; latitude: number; longitude: number }) {
    this.server.to('alerts').emit('alert:incident', {
      type: incident.type,
      location: { lat: incident.latitude, lng: incident.longitude },
    });
  }
}
