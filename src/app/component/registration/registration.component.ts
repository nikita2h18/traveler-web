import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RegistrationService} from "../../service/registration.service";
import {UserCredentials} from "../../dto/UserCredentials";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService,
    public messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      checkPassword: ['', Validators.required]
    });
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Check password!'});
  }

  onSubmit() {
    if (this.form.controls.checkPassword.value !== this.form.controls.password.value) {
      this.showError();
      return;
    }
    if (this.form.invalid) {
      this.showError();
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
          this.router.navigateByUrl('/preview/auth');
        },
        error => console.log(error)
      );
  }
}
