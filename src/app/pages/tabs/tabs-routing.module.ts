import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AddsPageModule } from '../adds/adds.module';
import { AddsPage } from '../adds/adds.page';
import { NewsPage } from '../news/news.page';
import { NewsPageModule } from '../news/news.module';
const routes: Routes = [
  {
    path: 'tabs',
    component:TabsPage,
    children:[
      {
        path:'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule'
          }
        ]
      },
      {
        path:'adds',
        children: [
          {
            path: '',
            loadChildren: '../adds/adds.module#AddsPageModule'
          }
        ]
      },
       {
        path: '',
        redirectTo: '/tabs/adds',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
 imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule  ] 
})
export class TabsPageRoutingModule {}
