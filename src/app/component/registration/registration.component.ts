import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RegistrationService} from "../../service/registration.service";
import {UserCredentials} from "../../dto/UserCredentials";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('submit');
    if (this.form.invalid) {
      return;
    }
    const userCredentials = new UserCredentials(
      this.form.controls.login.value,
      this.form.controls.password.value
    )

    this.registrationService
      .register(userCredentials)
      .subscribe(
        (): void => {
          this.router.navigateByUrl('registration');
        },
        error => console.log(error)
      );
  }
}
