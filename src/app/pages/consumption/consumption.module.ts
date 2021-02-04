import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfoComponent } from 'src/app/Components/info/info.component';
import { ConsumptionPageRoutingModule } from './consumption-routing.module';
import { ConsumptionPage } from './consumption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumptionPageRoutingModule
    ],
  declarations: [ConsumptionPage , InfoComponent]
})
export class ConsumptionPageModule {}
