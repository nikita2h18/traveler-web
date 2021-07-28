import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  public items!: MenuItem[];

  constructor(
    private notifyService: NotificationService
  ) {
  }

  ngOnInit() {
    this.notifyService.notify(Number(localStorage.getItem('userId')));
  }
}
