import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Servieces/api.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  [x: string]: any;
  data:any=[];
  msg: string;

  constructor(private activatedRoute: ActivatedRoute
     , private router : Router
     ,  private service :ApiService) {
      }

  ngOnInit() {

    if(localStorage.id && localStorage.password) {
      console.log("access");
      this.router.navigateByUrl('bills');
    } 

  }

  GoToPage(url){
    this.router.navigate([url]);
  }

  async postData(da){
    console.log(da);
    // da.id = '010210709';
   if(this.data.id!="" && this.data.password!=""){
     this.service.getBill(da.id , da.password , 'login' , '0').subscribe((item:any)=>{
      if(item.STATUS=='OK') {
        localStorage.id=da.id;
        localStorage.password=da.password;
        localStorage.name=item.NAME;
        localStorage.type=item.TYPE;
        
        localStorage.status = 'OK';
        this.GoToPage('./bills');
      }
      else {
        this.msg = "رقم الخدمة أو كلمة المرور غير صحيحة ، للاستفسار تواصل عبر الواتساب"
    }
     });
         console.log("11",this.status);
}

   else {
     const alert = await  this.alertController.create({
       message: 'الرجاء ادخال جميع البيانات',
       buttons: [{
         text:'خروج',
         role: 'cancel'
       }]  
     });   
     await   alert.present();
   }
   
  }

}