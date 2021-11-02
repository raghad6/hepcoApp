import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Servieces/api.service';

@Component({
  selector: 'app-last-bills',
  templateUrl: './last-bills.page.html',
  styleUrls: ['./last-bills.page.scss'],
})
export class LastBillsPage implements OnInit {
  data :any = [];
  item=1;
  folder: string;
  page =1 ;
  visable:boolean = true;


  constructor(private activatedRoute: ActivatedRoute
    , private router : Router
    ,  private service :ApiService) { }

    ngOnInit() { 
      this.service.getBill( localStorage.id , localStorage.password , 'vouchers' , '1').subscribe((item:any)=>{
        console.log(item);
        this.visable = false;
        item.forEach(element => {
         var color = element.PAMT != element.AMT ? 'red' : 'black';
         console.log(color);
          var obj = {
            'AMT' : element.AMT,
            'DT' : element.DT,
            'PAMT' :element.PAMT,
            'NO' : element.NO,
            'color' : color
          } 
          this.data.push(obj);
        });
    });
    }
  postData(da){
    this.service.getBill(localStorage.id , localStorage.password , 'vouchers' , this.page+"").subscribe((item:any)=>{
      item.forEach(element => {
        var obj={
          'DT' : element.DT ,
          'AMT' : element.AMT ,
          'PAMT' : element.PAMT,
          'NO' : element.NO
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
    console.log(this.page);
    this.postData(da);
  }
}
