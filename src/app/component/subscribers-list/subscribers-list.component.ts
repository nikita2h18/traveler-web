import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../dto/User";
import {SubscriberService} from "../../service/subscriber.service";
import {Subscription} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Subscriber} from "../../dto/Subscriber";

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.scss']
})
export class SubscribersListComponent implements OnInit, OnDestroy {
  public users!: User[];
  private subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    private subscriberService: SubscriberService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.subscriberService.getUserSubscribers(localStorage.getItem('userId') as string)
      .subscribe(users => this.users = users);
  }

  unsubscribe(userId: number) {
    return this.subscriberService.unsubscribeFromUser(userId).subscribe(
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
