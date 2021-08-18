import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../dto/User";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() users: User[] = []
}
