import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from "./component/registration/registration.component";
import {AuthComponent} from "./component/auth/auth.component";
import {MainComponent} from "./component/main/main.component";
import {PreviewComponent} from "./component/preview/preview.component";
import {TravelViewComponent} from "./module/travel/travel-view/travel-view.component";
import {TravelListComponent} from "./module/travel/travel-list/travel-list.component";
import {TravelCreateComponent} from "./module/travel/travel-create/travel-create.component";

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
  },
  {
    path: 'travel/create',
    component: TravelCreateComponent,
  },
  {
    path: 'travels',
    component: TravelListComponent,
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
    children: mainRouts
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
