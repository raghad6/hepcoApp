import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyCounterPageRoutingModule } from './my-counter-routing.module';
import { MyCounterPage } from './my-counter.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyCounterPageRoutingModule
  ],
  declarations: [MyCounterPage , InfoComponent]
})
export class MyCounterPageModule {}
