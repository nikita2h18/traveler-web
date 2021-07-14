import { Component, OnInit } from '@angular/core';
import {TravelService} from "../../../service/travel.service";
import {Travel} from "../../../dto/Travel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.scss']
})
export class TravelCreateComponent implements OnInit {
  public travel: Travel = new Travel(0, '', '', '');

  constructor(
    private travelService: TravelService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addTravel() {
    this.travelService.addTravel(this.travel).subscribe(
      () => this.router.navigateByUrl('main/travels')
    )
  }
}
