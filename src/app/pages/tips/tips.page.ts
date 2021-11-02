import { Component, OnInit } from '@angular/core';
import { DomSanitizer , SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  vidUrl:SafeResourceUrl;
  url : string;
  constructor(  private domSanitizer : DomSanitizer
    ) { }

  ngOnInit() {
   this.url = "hrportal.hepco.ps:8080";
  }

}
