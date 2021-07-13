import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCreateComponent } from './travel-create/travel-create.component';
import { TravelViewComponent } from './travel-view/travel-view.component';
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [
    TravelCreateComponent,
    TravelViewComponent
  ],
  exports: [
    TravelViewComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class TravelModule { }
