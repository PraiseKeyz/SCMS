import {
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/parking', cors: { origin: '*' } })
export class ParkingGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('subscribe:zones')
  handleSubscribe(@ConnectedSocket() client: Socket) {
    client.join('zones');
  }

  emitZoneStatusUpdated(payload: {
    zoneId: string;
    status: string;
    updatedAt: Date;
  }) {
    this.server.to('zones').emit('zone:status_updated', payload);
  }
}
