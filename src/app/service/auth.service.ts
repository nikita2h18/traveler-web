import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UserCredentials} from "../dto/UserCredentials";
import {Observable} from "rxjs";
import {API_URL} from "../globals";
import {User} from "../dto/User";
import {Token} from "../dto/Token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  auth(userCredentials: UserCredentials): Observable<Token> {
    return this.http.post<Token>(API_URL + 'auth/login', userCredentials);
  }
}
