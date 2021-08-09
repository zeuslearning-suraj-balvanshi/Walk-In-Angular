import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from './layouts/layout1/layout1.component';
import { LoginComponent } from './modules/login/login/login.component';
import { RegistrationComponent } from './modules/login/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: Layout1Component,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
