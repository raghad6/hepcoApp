import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'تواصل معنا',
      url: '/contact-us',
      icon: 'mail'
    },
    {
      title: 'أخبار و اعلانات',
      url: '/news',
      icon: 'newspaper'
    },
    {
      title: 'قراءة العداد',
      url: '/my-counter',
      icon: 'calculator'
    },
    {
      title: 'مراكز الشحن',
      url: '/statins',
      icon: 'home'
    },
    {
      title: 'تحديث بياناتي',
      url: '/my-info',
      icon: 'person'
    },
    {
      title: 'فواتيري',
      url: '/bills',
      icon: 'card'
    },
    {
      title: 'التعرفة المعتمدة',
      url: '/rate',
      icon: 'time'
    },
    {
      title: 'تسجيل عطل فني',
      url: '/errors',
      icon: 'warning'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.statusBar.overlaysWebView(true);

    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#000');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
