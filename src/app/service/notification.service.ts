import {Injectable} from '@angular/core';
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private socket: Socket) {
  }

  notify(userId: number) {
    this.socket.ioSocket.auth = { userId: userId };
    this.socket.connect();
  }
}
