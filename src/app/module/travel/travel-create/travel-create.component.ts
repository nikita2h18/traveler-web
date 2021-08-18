import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TravelService} from "../../../service/travel.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TravelCreate} from "../../../dto/TravelCreate";
import {switchMap} from "rxjs/operators";
import {LoaderDirective} from "../../../directive/loader.directive";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.scss']
})
export class TravelCreateComponent implements OnInit {
  @ViewChild('appLoader', {static: true, read: ViewContainerRef}) loader!: LoaderDirective;

  public form!: FormGroup;
  public image!: File;

  constructor(
    private formBuilder: FormBuilder,
    private travelService: TravelService,
    private router: Router,
    private spinnerService: NgxSpinnerService,
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
    this.spinnerService.show();
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
      () => {
        this.spinnerService.hide();
        this.router.navigateByUrl('main/travels')
      }
    )

  }

  onFileChanged(event: any) {
    this.image = event.target.files[0];
  }
}
