import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../modules/login/login/login.component';
import { RegistrationComponent } from '../modules/login/registration/registration.component';
import { WalkInDetailsComponent } from '../modules/walk-in/walk-in-details/walk-in-details.component';
import { WalkInListingComponent } from '../modules/walk-in/walk-in-listing/walk-in-listing.component';
import { WalkInSuccessComponent } from '../modules/walk-in/walk-in-success/walk-in-success.component';
import { Layout1Component } from './layout1/layout1.component';

const routes: Routes = [
  {
    path: '',
    component: Layout1Component,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'walk-in/success',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'walk-in',
        component: WalkInListingComponent,
      },
      {
        path: 'walk-in/success',
        component: WalkInSuccessComponent,
      },
      {
        path: 'walk-in/:id',
        component: WalkInDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
