import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1/layout1.component';
import { LayoutsRoutingModule } from './layouts-routing.module';

@NgModule({
  declarations: [Layout1Component],
  imports: [CommonModule, LayoutsRoutingModule],
  exports: [Layout1Component],
})
export class LayoutsModule {}
