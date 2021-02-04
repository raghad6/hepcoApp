import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';
import { NewsPage } from './pages/news/news.page';
import { AddsPage } from './pages/adds/adds.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
  },
  // {
  //   path: 'tabs',
  //   component:TabsPage,
  //   children:[
  //     {
  //       path:'news',
  //       outlet:'news',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../news/news.module#NewsModule'
  //         }
  //       ]
  //     },
  //     {
  //       path:'adds',
  //       outlet:'adds',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../adds/adds.module#AddsModule'
  //         }
  //       ]
  //     },
  //      {
  //       path: '',
  //       redirectTo: '/tabs/adds',
  //       pathMatch: 'full'
  //     }
  //   ]
  // } ,

  // {
  //   path: 'tabs/news',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
   {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
    
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'my-counter',
    loadChildren: () => import('./pages/my-counter/my-counter.module').then( m => m.MyCounterPageModule)
  },
  {
    path: 'bills',
    loadChildren: () => import('./pages/bills/bills.module').then( m => m.BillsPageModule)
  },
  // {
  //   path: 'my-info',
  //   loadChildren: () => import('./pages/my-info/my-info.module').then( m => m.MyInfoPageModule)
  // },
  {
    path: 'errors',
    loadChildren: () => import('./pages/errors/errors.module').then( m => m.ErrorsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUSPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./pages/rate/rate.module').then( m => m.RatePageModule)
  },
  {
    path: 'news-details',
    loadChildren: () => import('./pages/news-details/news-details.module').then( m => m.NewsDetailsPageModule)
  },
  {
    path: 'idea',
    loadChildren: () => import('./pages/idea/idea.module').then( m => m.IdeaPageModule)
  },
  {
    path: 'complaints',
    loadChildren: () => import('./pages/complaints/complaints.module').then( m => m.ComplaintsPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./pages/personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./pages/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'stations',
    loadChildren: () => import('./pages/stations/stations.module').then( m => m.StationsPageModule)
  },
  {
    path: 'stations-details',
    loadChildren: () => import('./pages/stations-details/stations-details.module').then( m => m.StationsDetailsPageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./pages/sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./pages/tips/tips.module').then( m => m.TipsPageModule)
  },
   {
     path: 'adds',
     loadChildren: () => import('./pages/adds/adds.module').then( m => m.AddsPageModule)
   },
 {
     path: 'news',
   loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
   },
  {
    path: 'adds-details',
    loadChildren: () => import('./pages/adds-details/adds-details.module').then( m => m.AddsDetailsPageModule)
  },
  {
    path: 'last-paid',
    loadChildren: () => import('./pages/last-paid/last-paid.module').then( m => m.LastPaidPageModule)
  },
  {
    path: 'last-bills',
    loadChildren: () => import('./pages/last-bills/last-bills.module').then( m => m.LastBillsPageModule)
  },
  {
    path: 'premiums',
    loadChildren: () => import('./pages/premiums/premiums.module').then( m => m.PremiumsPageModule)
  },
  {
    path: 'consumption',
    loadChildren: () => import('./pages/consumption/consumption.module').then( m => m.ConsumptionPageModule)
  },
  {
    path: 'debit',
    loadChildren: () => import('./pages/debit/debit.module').then( m => m.DebitPageModule)
  }





  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } )
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



