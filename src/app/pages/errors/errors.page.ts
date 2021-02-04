import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.page.html',
  styleUrls: ['./errors.page.scss'],
})
export class ErrorsPage implements OnInit {
  folder: any;
  constructor(private activatedRoute: ActivatedRoute , private router : Router)  {
    
  }

ngOnInit() {
   this.folder = this.activatedRoute.snapshot.paramMap.get('id');
 } 

 GoToPage(url){
   this.router.navigate([url]);
 }
}
