import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Token} from "../dto/Token";
import {LOCALSTORAGE_TOKEN_NAME} from "../globals";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class meProviderService {
  private tokenSubject = new BehaviorSubject<Token>(new Token());
  public token = this.tokenSubject.asObservable();

  constructor(private userService: UserService) {
  }

  setToken(token: Token) {
    this.tokenSubject.next(token);
    localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, token.token as string);
  }

  setUserId() {
    this.userService.getByToken().subscribe(
      user => localStorage.setItem('userId', user.id.toString()),
    )
  }
}
