import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserCredentials} from "../dto/UserCredentials";
import {Observable} from "rxjs";
import {User} from "../dto/User";
import {API_URL} from "../globals";
import {Profile} from "../dto/Profile";
import {TokenProviderService} from "./token-provider.service";

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
}
