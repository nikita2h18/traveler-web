import {Component, OnInit, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../service/profile.service";
import {Profile} from "../../dto/Profile";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateProfileComponent implements OnInit {
  @Output() onClick = new EventEmitter();
  public form!: FormGroup;
  private profile!: Profile;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required]
    });
    this.profileService.get(Number(localStorage.getItem('userId'))).subscribe(
      profile => this.profile = profile[0]
    )
  }


  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.onClick.emit(true);

    const profile = new Profile(
      this.form.controls.name.value,
      this.form.controls.lastname.value,
      this.form.controls.birthday.value
    )

    if (!!this.profile) {
      this.profileService.edit(profile).subscribe()
    } else {
      this.profileService.create(profile).subscribe()
    }
  }
}
