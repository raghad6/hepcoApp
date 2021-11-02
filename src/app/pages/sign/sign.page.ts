import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Servieces/api.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {

  data :any = [];
  msg: string;


  constructor(private activatedRoute: ActivatedRoute
    , private router : Router
    ,  private service :ApiService) { 

      this.data.name="",
      this.data.phone="",
      this.data.idenity="",
      this.data.id="",
      this.data.password="",
      this.data.lastv =""
    }

  ngOnInit() {
  }


  GoToPage(url){
    this.router.navigate([url]);
  }

  async SignUp(da){
    this.service.register(this.data.id , this.data.password , 'signup' , this.data.lastv).subscribe((item:any)=>{
      if(item.STATUS=='OK') {
        localStorage.id=da.id;
        localStorage.password=da.password;
        localStorage.name=item.NAME;
        localStorage.type=item.TYPE;
        
        localStorage.status = 'OK';
        this.GoToPage('./bills');
      } else {
          this.msg = "رقم الخدمة أو قيمة اخر فاتورة غير صحيحة ، للاستفسار تواصل عبر الواتساب"
      }
    //   item.data.forEach(element => {
    //   var obj = {
    //    'name': element.name,
    //    'phone' : element.phone,
    //    'idenity' : element.idenity,
    //    'id' : element.id,
    //    'password' :element.password,
    //    'lastv' : element.lastv
    //   }
    //   console.log(this.data);
    //   this.data.push(obj);
    // });
    this.GoToPage('./bills');

  });
}




}
