import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/Servieces/api.service';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { AlertController, ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-idea',
  templateUrl: './idea.page.html',
  styleUrls: ['./idea.page.scss'],
})
export class IdeaPage implements OnInit {
  formlogin  : FormGroup;
  data:any= {};
  alert: any;

  constructor(public http: HttpClient ,    
    private service :ApiService,
    private formBuilder: FormBuilder,
    private alertController: AlertController ,
    private actionSheet : ActionSheetController) { 

      this.data.title = "";
      this.data.phone = "";
      this.data.desc = "";
      this.data.type= "2";
      this.data.primary_image= "3123";

      this.formlogin = this.formBuilder.group({
        name: new FormControl('', Validators.compose([
                Validators.required
            ])),        
            phone: new FormControl('', Validators.compose([
                 Validators.required
            ])),
            desc : new FormControl('', Validators.compose([
              Validators.required
          ])),
          type : new FormControl('', Validators.compose([
            Validators.required
        ])),
        });
        }
    

  ngOnInit() {
    this.postData(this.data);
  }

  async  postData(da){
     if( this.data.name!="" && this.data.service_no!=""  && this.data.meter_val!=""  && this.data.phone!=""   )
    {
    console.log(this.data);
    console.log(da);
    this.service.post('sugg' ,da).subscribe((item:any)=>{
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
}
