import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../dto/User";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public user = new User(0, '', '')

  constructor(
    private router: Router,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.userService.getByToken().subscribe(user => this.user = user)
  }

  onSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/preview/auth');
  }
}
