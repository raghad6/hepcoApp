import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintsPageRoutingModule } from './complaints-routing.module';
import { InfoComponent } from 'src/app/Components/info/info.component';

import { ComplaintsPage } from './complaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintsPageRoutingModule
  ],
  declarations: [ComplaintsPage, InfoComponent]
})
export class ComplaintsPageModule {}
