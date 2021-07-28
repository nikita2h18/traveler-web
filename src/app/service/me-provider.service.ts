import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LOCALSTORAGE_TOKEN_NAME} from "../globals";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class meProviderService {
  private tokenSubject = new BehaviorSubject<string>('');
  public token = this.tokenSubject.asObservable();

  constructor() {
  }

  setToken(response: { token: string, userId: string }) {
    this.tokenSubject.next(response.token);
    localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, response.token);
  }

  setUserId(response: { token: string, userId: string }) {
    this.tokenSubject.next(response.userId);
    localStorage.setItem('userId', response.userId)
  }
}
