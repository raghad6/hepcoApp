import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/Servieces/api.service';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {
  [x: string]: any;
  folder: string;
  formlogin  : FormGroup;
  data :any={};

  constructor(private activatedRoute: ActivatedRoute,
    public http: HttpClient,
    private service :ApiService,
    private formBuilder: FormBuilder,
    private alertController: AlertController) 
    { 

      this.data.name = localStorage.name;
      this.data.service_no =localStorage.id;
      this.data.phone= "";
      this.data.address= "";
      this.data.identity= "";


  this.formlogin = this.formBuilder.group({
        name : new FormControl('', Validators.compose([
                Validators.required
            ])),        
         service_no: new FormControl('', Validators.compose([
                 Validators.required
            ])),
         phone : new FormControl('', Validators.compose([
              Validators.required
          ])),
        address : new FormControl('', Validators.compose([
            Validators.required
        ])),
        identity : new FormControl('', Validators.compose([
          Validators.required
      ]))

        });
    }

  ngOnInit() {
  } 


  async postData(data) {
    
   
    if( this.data.name!="" && this.data.service_no!=""  && this.data.meter_val!=""  && this.data.phone!=""   )
    {
      console.log(this.data);
    this.service.post('custmor' ,data).subscribe((item:any)=>{
    });
    }
    else{
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
