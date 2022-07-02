import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  allOrders:any[]=[]
  
  constructor(private global:GlobalService) {
    this.global.getorders().subscribe(res=>{
    this.allOrders=res.data
    console.log(res.data) 
  })
  }

  ngOnInit(): void {
  }

}
