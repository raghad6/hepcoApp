import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servieces/api.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.page.html',
  styleUrls: ['./stations.page.scss'],
})
export class StationsPage implements OnInit {
  [x: string]: any;
  folder: string;
  visable : boolean = true;

  constructor(private activatedRoute: ActivatedRoute ,
    private router : Router,
    public http: HttpClient,
    private service :ApiService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData();
  } 

  GoToPage(d){
    console.log(d);
    this.router.navigate(['/stations-details',{'d':JSON.stringify(d)}]);
  }

  getData() {
    
    this.service.get('station').subscribe((item:any)=>{
      this.data = item.data;
      this.visable = false;

    });
  }


}
