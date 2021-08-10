import {Component, OnInit} from '@angular/core';
import {TravelService} from "../../../service/travel.service";
import {Travel} from "../../../dto/Travel";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserCredentials} from "../../../dto/UserCredentials";
import {TravelCreate} from "../../../dto/TravelCreate";
import {loggerOptionsFactory} from "@ngxs/logger-plugin/src/logger.module";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.scss']
})
export class TravelCreateComponent implements OnInit {
  public form!: FormGroup;
  public image!: File;

  constructor(
    private formBuilder: FormBuilder,
    private travelService: TravelService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      pointFrom: ['', Validators.required],
      pointTo: ['', Validators.required],
    });
  }

  addTravel() {
    this.travelService.upload(this.image).pipe(
      switchMap(imageUrl => {
        const travel = new TravelCreate(
          this.form.controls.description.value,
          this.form.controls.pointFrom.value,
          this.form.controls.pointTo.value,
          imageUrl
        )
        return this.travelService.addTravel(travel)
      })
    ).subscribe(
      () => this.router.navigateByUrl('main/travels')
    )

  }

  onFileChanged(event: any) {
    this.image = event.target.files[0];
  }
}
