import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TravelCreateComponent} from './travel-create/travel-create.component';
import {TravelViewComponent} from './travel-view/travel-view.component';
import {CardModule} from "primeng/card";
import {CardUserComponent} from "../../component/card-user/card-user.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {EditorModule} from "primeng/editor";
import {CommentsComponent} from "../../component/comments/comments.component";
import {RippleModule} from "primeng/ripple";
import {FileUploadModule} from "primeng/fileupload";



@NgModule({
  declarations: [
    TravelCreateComponent,
    TravelViewComponent,
    CardUserComponent,
    CommentsComponent
  ],
  exports: [
    TravelViewComponent,
    CardUserComponent,
    CommentsComponent
  ],
    imports: [
        CommonModule,
        CardModule,
        InputTextareaModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        EditorModule,
        RippleModule,
        FileUploadModule,
        ReactiveFormsModule,
    ]
})
export class TravelModule { }
