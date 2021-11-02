import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/Servieces/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.page.html',
  styleUrls: ['./consumption.page.scss'],
})
export class ConsumptionPage implements OnInit {
  [x: string]: any;

 @ViewChild('barChart') barChart;

    bars: any =[];
    colorArray: any;
    data:any=[];
    years:any=[];
    year=2020; 
    visable:boolean = true;
  

  constructor(private activatedRoute: ActivatedRoute
    , private router : Router
    ,  private service :ApiService) { 

     var curyear = new Date().getFullYear();
     let i = 1990; 
      for(i=curyear;i>1990;i--)
      {
        this.years.push(i)
      }
      
    }

    ngOnInit() { 
      this.service.getCon( localStorage.id , localStorage.password , 'consumption' , this.year).subscribe((item:any)=>{
        this.visable = false;

        item.forEach(element => {
                var obj={
                  'x' : element.DT,
                  'y' : element.CON
                }
                this.data.push(obj);
              });
              // console.log(item);
              this.ionViewDidEnter();

    });
    }

    Change(event:any){
      console.log(event.detail.value);
      this.data = [];
      this.service.getCon(localStorage.id , localStorage.password , 'consumption' , event.detail.value).subscribe((item:any)=>{
        item.forEach(element => {
          var obj={
            'x' : element.DT,
            'y' : element.CON
          }
          this.data.push(obj);
        });
      });
      this.ionViewDidEnter();
    }
   
  
    ionViewDidEnter() {
      this.createBarChart();
    }
    createBarChart() {
      setTimeout(() => {
        this.bars = new Chart('canvas', {
          type: 'line',
          data: {
            labels : [1,2,3,4,5,6,7,8,9,10,11,12],
            datasets: [
              { 
                data: this.data,
                borderColor: "#3cba9f",
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      }, 1000); 
    }
  }
 

