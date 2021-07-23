import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../globals";

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getUserSubscribers(id: number) {
    return this.http.get<[]>(API_URL + 'subscriber/all/' + id);
  }

  public subscribeToUser(userId: number) {
    return this.http.post(API_URL + 'subscriber', { userId: userId }, {
      headers: {
        token: localStorage.getItem('token') as string
      }
    });
  }
}
