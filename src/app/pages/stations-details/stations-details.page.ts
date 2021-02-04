import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/Servieces/api.service';

@Component({
  selector: 'app-stations-details',
  templateUrl: './stations-details.page.html',
  styleUrls: ['./stations-details.page.scss'],
})
export class StationsDetailsPage implements OnInit {
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
