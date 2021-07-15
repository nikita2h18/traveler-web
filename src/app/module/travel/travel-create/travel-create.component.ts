import {Component, OnDestroy, OnInit} from '@angular/core';
import {TravelService} from "../../../service/travel.service";
import {Travel} from "../../../dto/Travel";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.scss']
})
export class TravelCreateComponent  {
  public travel: Travel = new Travel(0, '', '', '');

  constructor(
    private travelService: TravelService,
    private router: Router,
  ) { }

  addTravel() {
    this.travelService.addTravel(this.travel).subscribe(
      () => this.router.navigateByUrl('main/travels')
    )
  }
}
