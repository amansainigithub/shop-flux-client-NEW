import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { OrderManagementService } from 'src/app/ad_services/order-management-service/order-management.service';
import { OrderDetailsPaidComponent } from '../order-details-paid/order-details-paid.component';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  condition: any;

  constructor(private _oms:OrderManagementService,
              private _activateRoute:ActivatedRoute,
              public dialog: MatDialog
    ) { }

  progressBar:any ={
    dynamicValue:false
  }

  ngOnInit(): void {
    this.condition = this._activateRoute.snapshot.params.condition;
    
    //GET ALL ORDERS
    if(this.condition == "NONE")
    {
      this.getPaidCurrentOrder();
    }

    // ORDER PENDING
    if(this.condition == "N")
    {
      this.getCurrentPaidOrdersByStatus();
    }

    //DELIVERY ON A WAY
    if(this.condition == "R")
    {
      this.getCurrentPaidOrdersByStatus();
    }

    //DELIVERY SUCCESS
    if(this.condition == "Y")
    {
      this.getCurrentPaidOrdersByStatus();
    }
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

  getCurrentPaidOrdersByStatus()
  {
    this.progressBar_Starting();
    this._oms.getCurrentPaidOrdersByStatus(this.condition).subscribe(data=>{
      this.currentPaidOrder = data;
      console.log(this.currentPaidOrder);
      this.progressBar_Stop();
      
    },error=>{
      console.log(error);
      this.progressBar_Stop();
    })
  }

  moreOrderDetails(orderId:any)
  {
    console.log(orderId);

    this.dialog.open(OrderDetailsPaidComponent, {
      data: {
        razorPayOrderId: orderId,
      },
    });
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
