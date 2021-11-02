import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/Servieces/api.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  [x: string]: any;
  folder: string;
  page=1;  
  data :any = [];
  visable : boolean = true;

  constructor(private activatedRoute: ActivatedRoute ,
    private router : Router,
    public http: HttpClient,
    private service :ApiService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.get('news?page=1&type=news').subscribe((item:any)=>{
      console.log(item.data);
      this.visable = false;
      item.data.forEach(d => {
        console.log(d);
         var obj = {
           'title' : d.title,
           'date' : d.created_at,
           'desc' : d.desc,
           'id' : d.id
         }
         this.data.push(obj);
      });
    });
  } 

  GoToPage(d){
    console.log(d);
    this.router.navigate(['/news-details',{'d':JSON.stringify(d)}]);
  }

  getData(event) {
    console.log("event", event);
    this.service.get('news?page='+this.page+'&type=news').subscribe((item:any)=>{
      item.data.forEach(d => {
        console.log(d);
         var obj = {
           'title' : d.title,
           'date' : d.created_at,
           'desc' : d.desc,
           'id' : d.id
         }
         this.data.push(obj);
      });
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
