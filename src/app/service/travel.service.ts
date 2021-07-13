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
    this.http.get<Travel[]>(API_URL + 'campaign/all');
  }

  public getUserTravels(token: string) {
    this.http.get<Travel[]>(API_URL + 'campaign/user', {
      headers: {
        token
      }
    });
  }

  public getTravel(id: bigint) {
    return this.http.get<Travel>(API_URL + 'campaign/' + id);
  }
}
