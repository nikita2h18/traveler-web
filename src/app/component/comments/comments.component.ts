import {Component, OnDestroy, OnInit} from '@angular/core';
import {Comment} from "../../dto/Comment";
import {CommentService} from "../../service/comment.service";
import {Subscription} from "rxjs";
import {WriteComment} from "../../dto/WriteComment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  public comments: Comment[] = [];
  public writeComment!: WriteComment;
  private subscription!: Subscription;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.commentService.getAll().subscribe(
      comments => {
        this.comments = comments
      }
    );
    this.subscription.add(this.route.params.subscribe(
      params => this.writeComment = new WriteComment('', params['id'])
    ))
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
