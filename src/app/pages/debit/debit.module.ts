import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DebitPageRoutingModule } from './debit-routing.module';
import { DebitPage } from './debit.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebitPageRoutingModule
  ],
  declarations: [DebitPage , InfoComponent]
})
export class DebitPageModule {}
