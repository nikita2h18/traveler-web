import {Component, OnDestroy, OnInit} from '@angular/core';
import {Comment} from "../../dto/Comment";
import {CommentService} from "../../service/comment.service";
import {Subscription} from "rxjs";
import {WriteComment} from "../../dto/WriteComment";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../dto/User";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  public comments: Comment[] = [];
  public writeComment!: WriteComment;
  private subscription!: Subscription;
  public user = new User(0, '', '')

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.pipe(
      switchMap(params => {
        this.writeComment = new WriteComment('', params['id'])
        return this.commentService.getByTravel(params['id']);
      })
    ).subscribe(
        comments => {
          this.comments = comments
        }
      )
  }

  getUser(id: number) {
    return this.userService.getById(id).subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  write() {
    this.commentService.write(this.writeComment).subscribe(
      () => {
        this.writeComment.message = ''
        this.ngOnInit();
      }
    );
  }
}
