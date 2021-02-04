import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servieces/api.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.page.html',
  styleUrls: ['./adds.page.scss'],
})
export class AddsPage implements OnInit {
  folder: any;
  page=1;
  data :any = [];
  visable:boolean = true;
  
  constructor(private activatedRoute: ActivatedRoute ,
    private router : Router,
    public http: HttpClient,
    private service :ApiService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.get('news?page=1&type=adv').subscribe((item:any)=>{
      console.log(item.data);
      this.visable = false;
      item.data.forEach(d => {
        console.log(d);
         var obj = {
           'id' :d.id,
           'title' : d.title,
           'date' : d.created_at,
           'desc' : d.desc
         }
         this.data.push(obj);
      });
    })
  } 

  GoToPage(d){
    console.log(d);
    this.router.navigate(['/adds-details',{'d':JSON.stringify(d)}]);
  }

  getData(event) {
    console.log("event", event);
    this.service.get('news?page='+this.page+'&type=adv').subscribe((item:any)=>{
      item.data.forEach(d => {
        // console.log(d);
         var obj = {
           'id' :d.id,
           'title' : d.title,
           'date' : d.created_at,
           'desc' : d.desc

         }
         this.data.push(obj);
      });
      console.log("data",this.data);
      if(event){
        event.target.complete();
      }
    });
  }

  loadMore(event){
    this.page++;
    console.log("access", this.page);
    this.getData(event); 
  }
}
