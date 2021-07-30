import {Injectable} from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

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

  onNewNotification(): Observable<{ userId: number }> {
      return this.socket.fromEvent('notify');
  }
}
