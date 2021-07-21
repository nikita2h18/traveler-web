import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TravelService} from "../../../service/travel.service";
import {Travel} from "../../../dto/Travel";
import {switchMap} from "rxjs/operators";
import {LikeService} from "../../../service/like.service";

@Component({
  selector: 'app-travel-view',
  templateUrl: './travel-view.component.html',
  styleUrls: ['./travel-view.component.scss']
})
export class TravelViewComponent implements OnInit {
  @Input() public travel: Travel = new Travel(1, '', '', '');
  public style = {
    width: '660px',
    minHeight: '465px',
  }
  isLiked = false;
  likesCount = 0;
  showComments = false;
  paramsId = '';

  constructor(
    private travelService: TravelService,
    private route: ActivatedRoute,
    private likeService: LikeService,
  ) {
  }

  ngOnInit(): void {
    this.getParams();
    this.getTravel();
    this.isTravelLiked();
    this.getLikes();
  }

  like() {
    this.isLiked = !this.isLiked;
    this.route.params.subscribe(
      params => {
        this.likeService.like(params['id']).subscribe(likes => this.likesCount = likes.length)
      }
    )
  }

  private getParams() {
    this.route.params.subscribe(params => this.paramsId = params['id']);
  }

  private isTravelLiked() {
    this.likeService.isLiked(this.paramsId).subscribe(isLiked => {
      this.isLiked = isLiked
    });
  }

  private getLikes() {
    this.likeService.getByTravel(this.paramsId).subscribe(
      likes => this.likesCount = likes.length
    )
  }

  private getTravel() {
    this.travelService.getTravel(this.paramsId).subscribe((travel: Travel) => {
      this.travel = new Travel(
        travel.id,
        travel.description,
        travel.pointFrom,
        travel.pointTo
      )
    });
  }
}
