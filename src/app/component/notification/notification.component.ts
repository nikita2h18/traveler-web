import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../dto/User";
import {NotificationService} from "../../service/notification.service";
import {Notification} from "../../dto/Notification";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  @Input() users: User[] = [];
  @Input() notifications: Notification[] = [];

  constructor(
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit() {
    this.seen();
  }

  private seen() {
    this.notifications.forEach(notification => notification.isSeen = true)
    this.notificationService.seen(this.notifications).subscribe()
  }
}
