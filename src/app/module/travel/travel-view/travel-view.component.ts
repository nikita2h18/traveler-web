import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TravelService} from "../../../service/travel.service";
import {Travel} from "../../../dto/Travel";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-travel-view',
  templateUrl: './travel-view.component.html',
  styleUrls: ['./travel-view.component.scss']
})
export class TravelViewComponent implements OnInit {
  @Input() public travel!: Travel;
  public style = {
    width: '360px',
  }

  constructor(
    private travelService: TravelService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (!this.travel) {
      this.route.params.pipe(
        switchMap(params => this.travelService.getTravel(params['id']))
      ).subscribe((travel: Travel) => {
        this.travel = new Travel(
          travel.id,
          travel.description,
          travel.pointFrom,
          travel.pointTo
        )
      });
    }
  }

}
