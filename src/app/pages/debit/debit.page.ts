import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servieces/api.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.page.html',
  styleUrls: ['./debit.page.scss'],
})
export class DebitPage implements OnInit {

  data :any = [];

  constructor( private service :ApiService) { }

  ngOnInit() {
    this.service.debit( localStorage.id , localStorage.password , 'debits' , 'all').subscribe((item:any)=>{
    console.log(item);
    item.forEach(element => {
       var obj = {
         'NM' : element.NM,
         'AMT' : element.AMT,
         'PAID' :element.PAID,
       } 
       this.data.push(obj);
     });
    });
  }

}
