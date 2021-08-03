import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from "./component/registration/registration.component";
import {AuthComponent} from "./component/auth/auth.component";
import {MainComponent} from "./component/main/main.component";
import {PreviewComponent} from "./component/preview/preview.component";
import {TravelViewComponent} from "./module/travel/travel-view/travel-view.component";
import {TravelListComponent} from "./module/travel/travel-list/travel-list.component";
import {TravelCreateComponent} from "./module/travel/travel-create/travel-create.component";
import {ProfileViewComponent} from "./component/profile-view/profile-view.component";
import {AuthGuard} from "./guard/auth.guard";

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

const mainRouts = [
  {
    path: 'travel/view/:id',
    component: TravelViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'travel/create',
    component: TravelCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'travels',
    component: TravelListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/view/:id',
    component: ProfileViewComponent,
    canActivate: [AuthGuard]
  }
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
    children: mainRouts,
    canActivate: [AuthGuard]
  },
  {
    path: 'preview',
    component: PreviewComponent,
    children: authRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
