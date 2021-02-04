import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCounterPage } from './my-counter.page';

const routes: Routes = [
  {
    path: '',
    component: MyCounterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCounterPageRoutingModule {}
