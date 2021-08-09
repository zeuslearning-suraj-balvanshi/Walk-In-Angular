import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalkInListingComponent } from './walk-in-listing/walk-in-listing.component';
import { WalkInDetailsComponent } from './walk-in-details/walk-in-details.component';
import { WalkInSuccessComponent } from './walk-in-success/walk-in-success.component';
import { WalkInRoutingModule } from './walk-in-routing.module';

@NgModule({
  declarations: [
    WalkInListingComponent,
    WalkInDetailsComponent,
    WalkInSuccessComponent,
  ],
  imports: [CommonModule, WalkInRoutingModule],
})
export class WalkInModule {}
