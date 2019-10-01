import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../http-services.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit  {
  
  data: any;
  dataList: any;
  hits:any=[];
  model: any;
  subscription: Subscription;
  // data: Object;
  //subscription: Subscription;
  statusText: string;
  constructor(private httpService:HttpServicesService){

  }
  ngOnInit(){
    this.httpService.getMethod().subscribe(Response=>{
   this.data=Response;
  this.dataList=this.data.hits;
  console.log(this.data)
  this.subscription = timer(0, 10000).pipe(
    switchMap(() => this.httpService.getMethod())
  ).subscribe(resp=>this.data=resp);

   })
  }

  edit(id){
    console.log(id)
   this.model=id;
  }
}