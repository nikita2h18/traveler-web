import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TravelService} from "../../../service/travel.service";
import {Travel} from "../../../dto/Travel";
import {LikeService} from "../../../service/like.service";

@Component({
  selector: 'app-travel-view',
  templateUrl: './travel-view.component.html',
  styleUrls: ['./travel-view.component.scss']
})
export class TravelViewComponent implements OnInit {
  @Input() public travel: Travel = new Travel(1, '', '', '', 0);
  public style = {
    width: '660px',
    minHeight: '465px',
  }
  isLiked = false;
  likesCount = 0;
  showComments = false;
  travelId = 0;

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
    this.route.params.subscribe(params => this.travelId = Number(params['id']));
  }

  private isTravelLiked() {
    this.likeService.isLiked(this.travelId).subscribe(isLiked => {
      this.isLiked = isLiked
    });
  }

  private getLikes() {
    this.likeService.getByTravel(this.travelId).subscribe(
      likes => this.likesCount = likes.length
    )
  }

  private getTravel() {
    this.travelService.getTravel(this.travelId).subscribe((travel: Travel) => {
      this.travel = new Travel(
        travel.id,
        travel.description,
        travel.pointFrom,
        travel.pointTo,
        travel.userId
      )
    });
  }
}
