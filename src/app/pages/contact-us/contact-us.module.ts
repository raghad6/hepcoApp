import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUSPageRoutingModule } from './contact-us-routing.module';

import { ContactUSPage } from './contact-us.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUSPageRoutingModule
  ],
  declarations: [ContactUSPage ,InfoComponent]
})
export class ContactUSPageModule {}
