import { Component, OnInit } from '@angular/core';
import {Travel} from "../../../dto/Travel";
import {Router} from "@angular/router";
import {TravelService} from "../../../service/travel.service";

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {
  public travels: Travel[] = [];

  constructor(
    private travelService: TravelService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.travelService.getAll()
      .subscribe(
        (travels: Travel[]): Travel[] => {
          return this.travels = travels;
        }
      );
  }

}
