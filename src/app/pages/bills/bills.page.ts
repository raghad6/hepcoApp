import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {
  folder: any;
  user : any = 'يرجى تسجيل الدخول';
  status : boolean = false;
  type : string;
  constructor(private activatedRoute: ActivatedRoute , private router : Router)  {
      

  } 

  ionViewWillEnter(){
  if(localStorage.status == 'OK') {
    this.status = true;
    this.user = localStorage.name;
    this.type=localStorage.type;
  } else {
    this.user = 'يرجى تسجيل الدخول';
  }
  console.log('status', localStorage.status);
}
ngOnInit() {
   this.folder = this.activatedRoute.snapshot.paramMap.get('id');
 } 

 GoToPage(url){
   this.router.navigate([url]);
 }

 logOut(){
   localStorage.clear();
   delete localStorage.name;
   delete localStorage.id;
   delete localStorage.status;
   console.log(localStorage.name);
   this.GoToPage('./home');
 }
}
