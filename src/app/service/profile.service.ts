import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../globals";
import {Profile} from "../dto/Profile";
import {User} from "../dto/User";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private http: HttpClient,
  ) {
  }

  create(profile: Profile) {
    return this.http.post<void>(API_URL + 'profile/create', profile, {
      headers: {
        token: localStorage.getItem('token') as string
      }
    });
  }

  get(userId: number) {
    return this.http.get<Profile[]>(API_URL + 'profile/' + userId)
  }
}
