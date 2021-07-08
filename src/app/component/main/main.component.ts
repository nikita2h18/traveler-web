import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  public items!: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Profile Info',
        routerLink: 'profile/create'
      }
    ];
  }
}
