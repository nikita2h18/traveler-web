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
import {PreviewComponent} from './component/preview/preview.component';
import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {TravelListComponent} from './module/travel/travel-list/travel-list.component';
import {CardModule} from "primeng/card";
import {UserComponent} from './component/user/user.component';
import {RippleModule} from "primeng/ripple";
import {ProfileViewComponent} from './component/profile-view/profile-view.component';
import {SubscribersListComponent} from './component/subscribers-list/subscribers-list.component';
import {UsersListComponent} from './component/users-list/users-list.component';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { ChatComponent } from './component/chat/chat.component';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthComponent,
    MainComponent,
    CreateProfileComponent,
    PreviewComponent,
    ToolbarComponent,
    TravelListComponent,
    UserComponent,
    ProfileViewComponent,
    SubscribersListComponent,
    UsersListComponent,
    ChatComponent,
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
    TravelModule,
    CardModule,
    RippleModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [MessageService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
