import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonalInfoPageRoutingModule } from './personal-info-routing.module';
import { PersonalInfoPage } from './personal-info.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonalInfoPageRoutingModule
  ],
  declarations: [PersonalInfoPage , InfoComponent]
})
export class PersonalInfoPageModule {}
