import { Component, OnInit } from '@angular/core';
import { OrderManagementService } from 'src/app/ad_services/order-management-service/order-management.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {

  constructor(private _oms:OrderManagementService) { }

  progressBar:any ={
    dynamicValue:false
  }

  ngOnInit(): void {
    this.getPaidCurrentOrder()
  }

  currentPaidOrder:any;
  getPaidCurrentOrder()
  {
    this.progressBar_Starting();
    this._oms.getPaidCurrentOrders().subscribe(data=>{
      this.currentPaidOrder = data;
      console.log(this.currentPaidOrder);
      this.progressBar_Stop();
      
    },error=>{
      console.log(error);
      this.progressBar_Stop();
    })
  }


  progressBar_Starting()
  {
    this.progressBar.dynamicValue=true;
  }

  progressBar_Stop()
  {
    this.progressBar.dynamicValue=false;
  }



}
