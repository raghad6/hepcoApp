import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/Servieces/api.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {
  [x: string]: any;
  folder: string;
  visable : boolean = true;


  constructor(private activatedRoute: ActivatedRoute ,
    private router : Router,
    public http: HttpClient,
    private service :ApiService
    ) { }

  ngOnInit() {

    this.getData();
  }

  getData() {
    
    this.service.get('traiff').subscribe((item:any)=>{
      this.data = item;
      this.visable = false;
      console.log(item);
    });
  }
  

}
