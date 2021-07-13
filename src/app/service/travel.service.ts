import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../globals";
import {Travel} from "../dto/Travel";

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

  public getUserTravels(token: string) {
    this.http.get<Travel[]>(API_URL + 'campaign/user', {
      headers: {
        token
      }
    });
  }

  public getTravel(id: bigint) {
    return this.http.get<Travel>(API_URL + 'travel/view/' + id, {
      headers: {
        token: localStorage.getItem('token') as string,
      }
    });
  }
}
