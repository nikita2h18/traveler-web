import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../globals";
import {Comment} from "../dto/Comment";
import {WriteComment} from "../dto/WriteComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get<Comment[]>(API_URL + 'comment/all');
  }

  public write(comment: WriteComment) {
    return this.http.post(API_URL + 'comment', comment, {
      headers: {
        token: localStorage.getItem('token') as string,
      }
    })
  }
}
