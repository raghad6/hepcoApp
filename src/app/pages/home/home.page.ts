import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  galleryType = "regular";
  public folder: string;
 
  constructor(private activatedRoute: ActivatedRoute 
    , private router : Router
    )  {
    
   }
   
   ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  } 

  GoToPage(url){
    this.router.navigate([url]);
  }
  OpenFacebook(){
    window.open("https://www.facebook.com/hepco")

  }
}

