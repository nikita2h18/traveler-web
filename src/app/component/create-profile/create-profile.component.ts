import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateProfileComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  onSubmit() {
    this.messageService.add({
      severity:'success', summary:'Order submitted',
      detail: 'Dear, ' + this.form.controls.name.value + ' ' +
        this.form.controls.lastname.value + ' your order completed.'
    });
  }
}
