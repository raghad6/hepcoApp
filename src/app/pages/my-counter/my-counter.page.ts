import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/Servieces/api.service';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.page.html',
  styleUrls: ['./my-counter.page.scss'],
})
export class MyCounterPage implements OnInit {

  formlogin  : FormGroup;
  data:any= {};
  alert: any;
  result : string;
  servics_no: string;
  meter_val: string;

  constructor(public http: HttpClient ,    
    private service :ApiService,
    private formBuilder: FormBuilder,
    private alertController: AlertController ,
    private actionSheet : ActionSheetController) { 

      this.data.name = "";
      this.data.service_no = localStorage.id;
      this.data.meter_val= "";
      this.data.phone= "";

  this.formlogin = this.formBuilder.group({
    name : new FormControl('', Validators.compose([
            Validators.required
        ])),        
     service_no: new FormControl('', Validators.compose([
             Validators.required
        ])),
    meter_val : new FormControl('', Validators.compose([
          Validators.required
      ])),
    phone : new FormControl('', Validators.compose([
        Validators.required
    ])),
    });
    }
  ngOnInit() {
  }

  async postData(data){

    if( this.data.name!="" && this.data.service_no!=""  && this.data.meter_val!=""  && this.data.phone!=""   )
    {
      console.log(this.data);
    this.service.post('meter' ,data).subscribe((item:any)=>{
    });
    }
    else{
      console.log("dd");
     const alert = await  this.alertController.create({
        message: 'الرجاء ادخال جميع البيانات',
        buttons:  [{
          text :'خروج' ,
          role : 'cancel'
        }],
      });   
      await alert.present();
    }
    
  }
  
  
  readingCal(){
console.log(this.data);
console.log(this.data.meter_val  );

if(this.data.servics_no!="" && this.data.meter_val!=""){

 var isfalse ;
 this.service.readingCal(this.data.service_no , this.data.meter_val).subscribe((data:any)=>{
     console.log(data);
      this.result = data;
      if(data['msg']!='DONE'){
        isfalse='blue';
        this.result="تم اصدار فاتورة سابقة"
      } 
      else{
        this.result = data['cons_amt'];
      }
    });
  }
  else{
    isfalse='red';
    this.result = "يرجى ادخال رقم الخدمة و قراءة العداد";
  }
}
 
 }


