import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from "./component/registration/registration.component";
import {AuthComponent} from "./component/auth/auth.component";
import {MainComponent} from "./component/main/main.component";
import {CreateProfileComponent} from "./component/create-profile/create-profile.component";
import {PreviewComponent} from "./component/preview/preview.component";
import {TravelViewComponent} from "./module/travel/travel-view/travel-view.component";

const authRoutes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'preview/auth',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'preview',
    component: PreviewComponent,
    children: authRoutes,
  },
  {
    path: 'view/:id',
    component: TravelViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
