import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../dto/User";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(users => this.users = users)
  }

}
