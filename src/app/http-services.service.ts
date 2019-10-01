import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http:HttpClient) { }
getMethod(){
    return this.http.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
  }
}
