import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Routes } from '@angular/router';
import { AddsPage } from '../adds/adds.page';
import { AddsPageModule } from '../adds/adds.module';
import { NewsPage } from '../news/news.page';
import { NewsPageModule } from '../news/news.module';

// const routes: Routes = [
//   {
//     path: '',
//     component:TabsPage,
//     children:[
//       {
//         path:'news',
//         outlet:'news',
//         component: NewsPage 
//       },
//       {
//         path:'adds',
//         outlet:'adds',
//         component: AddsPage 
//       }
//     ]
//   }
// ];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    NewsPageModule,
    AddsPageModule 

  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
