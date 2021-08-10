import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../globals";
import {Travel} from "../dto/Travel";
import {TravelCreate} from "../dto/TravelCreate";
import {Observable} from "rxjs";

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

  public getTravel(id: number) {
    return this.http.get<Travel>(API_URL + 'travel/view/' + id, {
      headers: {
        token: localStorage.getItem('token') as string,
      }
    });
  }

  public addTravel(travelDto: TravelCreate) {
    return this.http.post(API_URL + 'travel/add', travelDto, {
      headers: {
        token: localStorage.getItem('token') as string,
      }
    })
  }

  public upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(API_URL + 'travel/upload', formData, {responseType: 'text' as 'json'});
  }
}
