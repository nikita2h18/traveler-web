import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../dto/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: User;
  isEdit: boolean = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getByToken().subscribe(
      user => this.user = user
    );
  }

}
