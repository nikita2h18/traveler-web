import {Injectable} from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../globals";
import {Notification} from "../dto/Notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private socket: Socket,
    private http: HttpClient
  ) {
  }

  notify(userId: number) {
    this.socket.ioSocket.auth = {userId: userId};
    this.socket.connect();
  }

  onNewNotification(): Observable<{ userId: number }> {
    return this.socket.fromEvent('notify');
  }

  getNotification() {
    return this.http.get<Notification[]>(API_URL + 'notification', {
      headers: {
        token : localStorage.getItem('token') as string
      }
    })
  }

  seen(notifications: Notification[]) {
    return this.http.put(API_URL + 'notification', notifications, {
      headers: {
        token : localStorage.getItem('token') as string
      }
    })
  }
}
