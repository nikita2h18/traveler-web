import { Injectable } from '@angular/core';
import {Travel} from "../dto/Travel";
import {API_URL} from "../globals";
import {HttpClient} from "@angular/common/http";
import {User} from "../dto/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getByToken() {
    return this.http.get<User>(API_URL + 'user/get', {
      headers: {
        token: localStorage.getItem('token') as string
      }
    })
  }

  getByTravel(travelId: number) {
    return this.http.get<User>(API_URL + 'user/travel/' + travelId);
  }
}
