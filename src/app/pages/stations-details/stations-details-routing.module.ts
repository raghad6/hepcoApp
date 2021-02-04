import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationsDetailsPage } from './stations-details.page';
import { InfoComponent } from 'src/app/Components/info/info.component';

const routes: Routes = [
  {
    path: '',
    component: StationsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ,  InfoComponent],
})
export class StationsDetailsPageRoutingModule {}
