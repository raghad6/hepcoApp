import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servieces/api.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adds-details',
  templateUrl: './adds-details.page.html',
  styleUrls: ['./adds-details.page.scss'],
})
export class AddsDetailsPage implements OnInit {
  folder: string;
  data: any;
  ddd: string;
  d: any;

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
    this.service.get('news?page=1&type=adv').subscribe((item:any)=>{
      console.log(item);
      this.data = item.data;
    });
  }
}
