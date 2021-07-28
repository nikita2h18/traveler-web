import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {ProfileService} from "../../service/profile.service";
import {User} from "../../dto/User";
import {Profile} from "../../dto/Profile";
import {TravelService} from "../../service/travel.service";
import {switchMap} from "rxjs/operators";
import {Travel} from "../../dto/Travel";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  public user = new User(0, '', '');
  public profile = new Profile('', '', new Date());
  public travels: Travel[] = []

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private travelService: TravelService,
  ) { }

  ngOnInit(): void {
    this.userService.getById(Number(localStorage.getItem('userId'))).pipe(
      switchMap(user => {
        this.user = user
        return this.profileService.get(this.user.id)
      }),
      switchMap(profile => {
        this.profile = profile[0]
        return this.travelService.getUserTravels(this.user.id);
      })
    ).subscribe(travels => this.travels = travels)
  }

}
