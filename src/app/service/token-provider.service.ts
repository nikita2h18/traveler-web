import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Token} from "../dto/Token";
import {LOCALSTORAGE_TOKEN_NAME} from "../globals";

@Injectable({
  providedIn: 'root'
})
export class TokenProviderService {
  private tokenSubject = new BehaviorSubject<Token>(new Token());
  public token = this.tokenSubject.asObservable();

  setToken(token: Token) {
    this.tokenSubject.next(token);
    localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, token.token as string);
  }
}
