import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PremiumsPageRoutingModule } from './premiums-routing.module';
import { PremiumsPage } from './premiums.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiumsPageRoutingModule
  ],
  declarations: [PremiumsPage , InfoComponent]
})
export class PremiumsPageModule {}
