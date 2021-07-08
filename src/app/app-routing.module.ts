import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./component/registration/registration.component";
import {AuthComponent} from "./component/auth/auth.component";
import {MainComponent} from "./component/main/main.component";
import {CreateProfileComponent} from "./component/create-profile/create-profile.component";

const registrationRoutes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'profile/create',
    component: CreateProfileComponent
  }
]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: registrationRoutes
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
