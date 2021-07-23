import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../dto/User";
import {SubscriberService} from "../../service/subscriber.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    private subscriberService: SubscriberService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.userService.findAll().subscribe(users => this.users = users);
  }

  subscribe(userId: number) {
    return this.subscriberService.subscribeToUser(userId).subscribe(
      next => {
        this.subscription.unsubscribe();
        this.ngOnInit();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
