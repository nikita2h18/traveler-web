import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../globals";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(
    private http: HttpClient
  ) { }

  like(id: string) {
    return this.http.post<[]>(API_URL + 'like/' + id, {}, {
      headers: {
        token: localStorage.getItem('token') as string
      }
    })
  }

  isLiked(id: string) {
    return this.http.get<boolean>(API_URL + 'like/' + id, {
      headers: {
        token: localStorage.getItem('token') as string
      }
    })
  }

  getByTravel(id: string) {
    return this.http.get<[]>(API_URL + 'like/all/' + id);
  }
}
