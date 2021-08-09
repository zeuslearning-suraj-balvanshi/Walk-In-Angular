import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // {
  //   path: 'auth/login',
  //   component: LoginComponent,
  //   outlet: 'maincontent',
  // },
  // {
  //   path: '',
  //   component: RegistrationComponent,
  //   outlet: 'maincontent',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
