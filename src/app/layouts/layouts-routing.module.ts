import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from './layout1/layout1.component';

const routes: Routes = [{ path: '', component: Layout1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
