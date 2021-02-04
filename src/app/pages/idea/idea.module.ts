import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IdeaPageRoutingModule } from './idea-routing.module';
import { InfoComponent } from 'src/app/Components/info/info.component';
import { IdeaPage } from './idea.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    IdeaPageRoutingModule
  ],
  declarations: [IdeaPage , InfoComponent]
})
export class IdeaPageModule {}
