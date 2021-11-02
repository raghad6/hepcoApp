import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ApiService } from 'src/app/Servieces/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-premiums',
  templateUrl: './premiums.page.html',
  styleUrls: ['./premiums.page.scss'],
})
export class PremiumsPage implements OnInit {
  data :any = [];
  item=1;
  folder: string;
  page =1 ;
  visable:boolean = true;

  constructor(private activatedRoute: ActivatedRoute
    , private router : Router
    ,  private service :ApiService) { 

    }

    // deloits
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.gett('GetExtinsionByCustId/' ,localStorage.id ).subscribe((item:any)=>{
      if(item.STATUS=='OK') {

        localStorage.type=item.TYPE;
        
       this.visable = false;
       console.log("data" ,this.data);
       item.data.forEach(element => {
        console.log(element);
        var obj = {
        'FeeName' : element.FeeName,
        'StartDate' : element.StartDate,
        'date' : element.date,
        'FeeValue': element.FeeValue,
        'CallTimes' : element.CalTimes,
        'sum' : parseInt(element.FeeValue) * element.CalTimes,
        'FeeTimes' : element.FeeTimes,
        'sum1' : parseInt(element.FeeValue) * element.FeeTimes,
              }
              console.log("datadd" ,this.data);
        this.data.push(obj);
      });
    }
  });
  }

}
