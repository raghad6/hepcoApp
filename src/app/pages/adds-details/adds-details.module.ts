import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsDetailsPageRoutingModule } from './adds-details-routing.module';
import { InfoComponent } from 'src/app/Components/info/info.component';

import { AddsDetailsPage } from './adds-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsDetailsPageRoutingModule
  ],
  declarations: [AddsDetailsPage ,InfoComponent]
})
export class AddsDetailsPageModule {}
