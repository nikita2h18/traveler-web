import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCreateComponent } from './travel-create/travel-create.component';
import { TravelViewComponent } from './travel-view/travel-view.component';



@NgModule({
  declarations: [
    TravelCreateComponent,
    TravelViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TravelModule { }
