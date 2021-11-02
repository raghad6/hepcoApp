import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsPage } from './adds.page';

const routes: Routes = [
  {
    path: '',
    component: AddsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsPageRoutingModule {}
