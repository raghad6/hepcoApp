import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastBillsPage } from './last-bills.page';

const routes: Routes = [
  {
    path: '',
    component: LastBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastBillsPageRoutingModule {}
