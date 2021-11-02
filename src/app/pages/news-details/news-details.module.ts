import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetailsPageRoutingModule } from './news-details-routing.module';
import { InfoComponent } from 'src/app/Components/info/info.component';

import { NewsDetailsPage } from './news-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailsPageRoutingModule
  ],
  declarations: [NewsDetailsPage , InfoComponent]
})
export class NewsDetailsPageModule {}
