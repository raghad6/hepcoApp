import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://hepco.ps/mob/public/api/';
  bill_url= 'http://api.hepco.ps:8084/integration/fawateryapi.php?';
  link='http://testportal.hepco.ps:7654/api/'
  constructor(public http: HttpClient) { }

  get(subUrl:string): Observable<any> {
    return this.http.get(this.url + subUrl).pipe(
      map(res=>res)
      );
  }

  gett(subUrl:string , i:string): Observable<any> {
    return this.http.get(this.link + subUrl + i).pipe(
      map(res=>res)
      );
  }

  getBill(id:string, password:string,  fun:string , page:string): Observable<any> {
    return this.http.get(this.bill_url + 'id='+id +'&pass='+password + '&fun='+fun+ '&page='+page).pipe(
      map(res=>res)
      );
  }

  debit(id:string, password:string,  fun:string , filter:string): Observable<any> {
    return this.http.get(this.bill_url + 'id='+id +'&pass='+password + '&fun='+fun+ '&filter='+filter).pipe(
      map(res=>res)
      );
  }
  register(id:string, password:string,  fun:string , lastv:string): Observable<any> {
    return this.http.get(this.bill_url + 'id='+id +'&pass='+password + '&fun='+fun+ '&lastv='+lastv).pipe(
      map(res=>res)
      );
  }
readingCal(aggrement_id : string , value:string): Observable<any> {
  return this.http.get(this.bill_url +'agg2_id='+aggrement_id + '&value=' +value + '&fun=reading').pipe(
    map(res=>res)
      );
}

  getCon(id:string, password:string,  fun:string , year:number): Observable<any> {
    return this.http.get(this.bill_url + 'id='+id +'&pass='+password + '&fun='+fun+ '&year='+year).pipe(
      map(res=>res)
      );
  }

  post(subUrl:string , param:any): Observable<any> {
    return this.http.post(this.url + subUrl, param).pipe(
      map(res=>res)
      );
  }
 
}
  

