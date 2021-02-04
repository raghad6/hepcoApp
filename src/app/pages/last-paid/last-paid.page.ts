import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servieces/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';

@Component({
  selector: 'app-last-paid',
  templateUrl: './last-paid.page.html',
  styleUrls: ['./last-paid.page.scss'],
})
export class LastPaidPage implements OnInit {

  data :any = [];
  item=1;
  folder: string;
  page =1 ;
  visable:boolean = true;

  constructor(private activatedRoute: ActivatedRoute
    , private router : Router
    ,  private service :ApiService) { 

    }

  ngOnInit() {
    this.service.getBill( localStorage.id , localStorage.password , 'payments' , '1').subscribe((item:any)=>{
      this.visable = false;
      console.log(this.data);

      item.forEach(element => {
        var obj = {
          'AMT' : element.AMT,
          'DT' : element.DT
        }
        this.data.push(obj);
      });
  });
}
    
 postData(da){
      this.service.getBill(localStorage.id , localStorage.password , 'payments' , this.page+"").subscribe((item:any)=>{
        console.log(this.data);
        item.forEach(element => {
        var obj = {
          'AMT' : element.AMT,
          'DT' :element.DT
        }
        this.data.push(obj);
      });
      if(da){
        da.target.complete();
      }
    });
  }

  loadMore(da){
    this.page++;
    console.log("access", this.page);
    this.postData(da); 
  }
}
