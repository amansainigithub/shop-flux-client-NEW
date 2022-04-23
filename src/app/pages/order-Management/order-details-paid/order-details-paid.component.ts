import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { OrderManagementService } from 'src/app/ad_services/order-management-service/order-management.service';

@Component({
  selector: 'app-order-details-paid',
  templateUrl: './order-details-paid.component.html',
  styleUrls: ['./order-details-paid.component.css']
})
export class OrderDetailsPaidComponent implements OnInit {

  progressBar:any ={
    dynamicValue:false
  }

  constructor(private _activateRouter:ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: {razorPayOrderId: string},
              private _oms:OrderManagementService,
    ) { 
      this. razorpayGetOrderDetailsByOrderId();
    }
 
  ngOnInit(): void {
    console.log(this.data.razorPayOrderId);
    console.log("***********");
    
 
  }

  rpOrder:any;
  razorpayGetOrderDetailsByOrderId()
  {
    this.progressBar_Starting();
    this._oms.razorpayGetOrderDetailsByOrderId(this.data.razorPayOrderId).subscribe(data=>{
      console.log(data);
      
      this.rpOrder = data;
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
