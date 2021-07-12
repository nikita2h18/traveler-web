import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxsModule} from "@ngxs/store";
import {PasswordModule} from 'primeng/password';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DividerModule} from "primeng/divider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RegistrationComponent} from "./component/registration/registration.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from "@angular/common/http";
import {AuthComponent} from './component/auth/auth.component';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {MainComponent} from './component/main/main.component';
import {CreateProfileComponent} from './component/create-profile/create-profile.component';
import {StepsModule} from 'primeng/steps';
import {MenuModule} from "primeng/menu";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {CalendarModule} from 'primeng/calendar';
import {TravelModule} from "./module/travel/travel.module";
import { PreviewComponent } from './component/preview/preview.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthComponent,
    MainComponent,
    CreateProfileComponent,
    PreviewComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    StepsModule,
    MenuModule,
    ToastModule,
    CalendarModule,
    TravelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
