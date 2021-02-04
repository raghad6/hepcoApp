import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Servieces/api.service';
import { HttpClient } from '@angular/common/http';
import {Platform, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  [x: string]: any;
  router: any;

  constructor(private activatedRoute: ActivatedRoute ,
    public http: HttpClient,
    private service :ApiService,
    private platform : Platform,
    public loadingCtrl: LoadingController) { 

     // this.platform.then(()=>{
      
      //})
    }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    // const loading =  this.loadingCtrl.create({
    //   message:"loding...",
    //   duration: 2000
    // });
    // // this.loadingCtrl.present();
    // this.getData();
  
  }


  // GoToPage(url){
  //   this.router.navigate([url]);
  // }

  // getData() {
  //   this.service.get('news?page=1&type=news').subscribe((item:any)=>{
  //     this.data = item.data;
  //     this.LodingController.create({
  //       message:"loding..."
  //     });
  //   });
  // }
 
}

