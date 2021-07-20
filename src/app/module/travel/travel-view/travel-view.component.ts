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
  @Input() public travel!: Travel;
  public style = {
    width: '660px',
  }
  isLiked = false;
  likesCount = 0;
  showComments = false;

  constructor(
    private travelService: TravelService,
    private route: ActivatedRoute,
    private likeService: LikeService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.likeService.isLiked(params['id']).subscribe(isLiked => {
          this.isLiked = isLiked
        });
        this.likeService.getByTravel(params['id']).subscribe(
          likes => this.likesCount = likes.length
        )
        return this.travelService.getTravel(params['id'])
      })
    ).subscribe((travel: Travel) => {
      this.travel = new Travel(
        travel.id,
        travel.description,
        travel.pointFrom,
        travel.pointTo
      )
    });
  }

  like() {
    this.isLiked = !this.isLiked;
    this.route.params.subscribe(
      params => {
        this.likeService.like(params['id']).subscribe(likes => this.likesCount = likes.length)
      }
    )
  }

}
