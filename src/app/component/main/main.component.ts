import {Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {NotificationService} from "../../service/notification.service";
import {UserService} from "../../service/user.service";
import {switchMap} from "rxjs/operators";
import {User} from "../../dto/User";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  public isBellClicked = false;
  public items!: MenuItem[];
  public isNotified = false;
  public users: User[] = [];

  constructor(
    private notifyService: NotificationService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.notifyService.getNotification().subscribe(
      notifications => {
        this.isNotified = !!notifications.length;
        console.log(notifications)
        notifications.forEach(
          notification => this.userService.getById(notification.subscribeId).subscribe(
            user => this.users.push(user)
          )
        )
      }
    )
    this.notifyService.notify(Number(localStorage.getItem('userId')));
    this.notifyService.onNewNotification().pipe(
      switchMap(user => this.userService.getById(user.userId))
    ).subscribe(user => {
      this.isNotified = true;
      this.users.push(user);
    });
  }

  onClick(isClicked: boolean) {
    this.isBellClicked = isClicked
  }
}
