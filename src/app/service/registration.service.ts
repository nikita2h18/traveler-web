import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserCredentials} from "../dto/UserCredentials";
import {Observable} from "rxjs";
import {API_URL} from "../globals";
import {User} from "../dto/User";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private http: HttpClient,
  ) { }

  register(userCredentials: UserCredentials): Observable<User> {
    return this.http.post<User>(API_URL + 'registration', userCredentials);
  }
}
