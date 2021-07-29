import {Injectable} from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private socket: Socket) {
  }

  notify(userId: number) {
    this.socket.ioSocket.auth = { userId: userId };
  }

  receiveNotify() {
    return this.socket.fromEvent('notify');
  }

  sendNotify(){
    this.socket.emit('notify');
  }
}
