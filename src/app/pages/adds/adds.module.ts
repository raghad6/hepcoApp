import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsPageRoutingModule } from './adds-routing.module';

import { AddsPage } from './adds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsPageRoutingModule
  ],
  declarations: [AddsPage  ]
})
export class AddsPageModule {}
