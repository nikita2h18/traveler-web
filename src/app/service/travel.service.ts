import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../globals";
import {Travel} from "../dto/Travel";
import {User} from "../dto/User";

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get<Travel[]>(API_URL + 'travel/view');
  }

  public getUserTravels(userId: number) {
    return this.http.get<Travel[]>(API_URL + 'travel/user/' + userId);
  }

  public getTravel(id: string) {
    return this.http.get<Travel>(API_URL + 'travel/view/' + id, {
      headers: {
        token: localStorage.getItem('token') as string,
      }
    });
  }

  public addTravel(travelDto: Travel) {
    return this.http.post(API_URL + 'travel/add', travelDto, {
      headers: {
        token: localStorage.getItem('token') as string,
      }
    })
  }
}
