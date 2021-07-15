import {Component, OnDestroy, OnInit} from '@angular/core';
import {Travel} from "../../../dto/Travel";
import {Router} from "@angular/router";
import {TravelService} from "../../../service/travel.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit, OnDestroy {
  public travels: Travel[] = [];
  public style = {
    width: '360px',
  }
  private subscription!: Subscription;

  constructor(
    private travelService: TravelService,
    private router: Router,
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.travelService.getAll()
      .subscribe(
        (travels: Travel[]): Travel[] => {
          return this.travels = travels;
        }
      );
  }

}
