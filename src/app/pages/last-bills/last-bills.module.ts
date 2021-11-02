import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { InfoComponent } from 'src/app/Components/info/info.component';

import { LastBillsPageRoutingModule } from './last-bills-routing.module';

import { LastBillsPage } from './last-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastBillsPageRoutingModule
  ],
  declarations: [LastBillsPage ,InfoComponent]
})
export class LastBillsPageModule {}
