import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../dto/User";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Input() travelId!: number;
  public userLogin: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getByTravel(this.travelId).subscribe(
      user => {
        this.userLogin = user.login
      }
    );
  }

}
