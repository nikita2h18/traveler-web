import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TravelService} from "../../../service/travel.service";
import {Travel} from "../../../dto/Travel";

@Component({
  selector: 'app-travel-view',
  templateUrl: './travel-view.component.html',
  styleUrls: ['./travel-view.component.scss']
})
export class TravelViewComponent implements OnInit {
  travel: Travel = new Travel();

  constructor(
    private travelService: TravelService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        console.log('params', params);
        this.travelService.getTravel(params['id'])
          .subscribe((travel: Travel) => this.travel = travel);
      }
    )
  }

}
