import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsDetailsPage } from './adds-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsDetailsPageRoutingModule {}
