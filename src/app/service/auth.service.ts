import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserCredentials} from "../dto/UserCredentials";
import {Observable} from "rxjs";
import {API_URL} from "../globals";
import {User} from "../dto/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  auth(userCredentials: UserCredentials): Observable<string> {
    return this.http.post<string>(API_URL + 'auth/login', userCredentials);
  }
}
