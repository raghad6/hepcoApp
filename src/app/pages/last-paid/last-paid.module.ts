import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastPaidPageRoutingModule } from './last-paid-routing.module';
import { InfoComponent } from 'src/app/Components/info/info.component';

import { LastPaidPage } from './last-paid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastPaidPageRoutingModule
  ],
  declarations: [LastPaidPage,InfoComponent]
})
export class LastPaidPageModule {}
