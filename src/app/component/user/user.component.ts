import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../dto/User";
import {ProfileService} from "../../service/profile.service";
import {Profile} from "../../dto/Profile";
import {switchMap} from "rxjs/operators";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: User;
  profile!: Profile;
  isEdit: boolean = false;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    public messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.userService.getByToken().pipe(
      switchMap(user => {
        this.user = user
        return this.profileService.get(user.id)
      })
    ).subscribe(profile => {
      this.profile = profile[0]
    })
  }

  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success'});
    this.isEdit = false;
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error'});
  }

}
