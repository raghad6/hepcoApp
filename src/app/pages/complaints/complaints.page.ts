import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Servieces/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {
  data:any= {};

  constructor( public http: HttpClient ,    
     private service :ApiService
    ) { 
      
  this.data.title = "";
  this.data.address = "";
  this.data.phone = "";
  this.data.desc = "";
  this.data.cat = "1";
  this.data.type= "1";
  this.data.primary_image= "3123";

    }

    
  ngOnInit() {
  }
  
  postData(da){
    console.log(this.data);
    console.log(da);
    this.service.post('sugg' ,da).subscribe((item:any)=>{
    });
  }

}
