import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TabsPage } from './pages/tabs/tabs.page';
import { AddsPage } from './pages/adds/adds.page';
import { TabsPageRoutingModule } from './pages/tabs/tabs-routing.module';
import { AddsPageModule } from './pages/adds/adds.module';
import { NewsPage } from './pages/news/news.page';
import { NewsPageModule } from './pages/news/news.module';

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
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
   TabsPageRoutingModule,
    NewsPageModule,
    AddsPageModule 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
