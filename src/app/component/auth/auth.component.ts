import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserCredentials} from "../../dto/UserCredentials";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {meProviderService} from "../../service/me-provider.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private meProviderService: meProviderService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const userCredentials = new UserCredentials(
      this.form.controls.login.value,
      this.form.controls.password.value
    )

    this.authService.auth(userCredentials).subscribe(
      token => {
        this.meProviderService.setToken(token);
        this.meProviderService.setUserId();
        this.router.navigateByUrl('/main/travels');
      }
    );
  }
}
