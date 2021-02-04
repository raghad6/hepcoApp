import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationsPageRoutingModule } from './stations-routing.module';

import { StationsPage } from './stations.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationsPageRoutingModule
  ],
  declarations: [StationsPage, InfoComponent]
})
export class StationsPageModule {}
