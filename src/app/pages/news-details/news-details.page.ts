import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servieces/api.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  [x: string]: any;
  folder: string;
  

  constructor(private activatedRoute: ActivatedRoute ,
    private router : Router,
    public http: HttpClient,
    private service :ApiService
    ) { }

  ngOnInit() {
    this.ddd = (this.activatedRoute.snapshot.paramMap.get('d'));
    this.d  = JSON.parse(this.ddd);
  } 

  GoToPage(url){
    this.router.navigate([url]);
  }

  getData() {
    this.service.get('contents').subscribe((news:any)=>{
      this.data = news.data;
    });
  }

}
