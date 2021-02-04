import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastPaidPage } from './last-paid.page';

const routes: Routes = [
  {
    path: '',
    component: LastPaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastPaidPageRoutingModule {}
