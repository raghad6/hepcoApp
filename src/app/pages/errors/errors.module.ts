import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorsPageRoutingModule } from './errors-routing.module';

import { ErrorsPage } from './errors.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorsPageRoutingModule
  ],
  declarations: [ErrorsPage , InfoComponent]
})
export class ErrorsPageModule {}
