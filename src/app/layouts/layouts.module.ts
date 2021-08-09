import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout1Component } from './layout1/layout1.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { LoginModule } from '../modules/login/login.module';
import { WalkInModule } from '../modules/walk-in/walk-in.module';

@NgModule({
  declarations: [Layout1Component],
  imports: [CommonModule, LoginModule, WalkInModule, LayoutsRoutingModule],
  exports: [Layout1Component],
})
export class LayoutsModule {}
