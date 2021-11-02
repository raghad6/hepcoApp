import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StationsDetailsPageRoutingModule } from './stations-details-routing.module';
import { StationsDetailsPage } from './stations-details.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationsDetailsPageRoutingModule
  ],
  declarations: [StationsDetailsPage , InfoComponent]
})
export class StationsDetailsPageModule {}
