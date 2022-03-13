import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderManagementService } from 'src/app/ad_services/order-management-service/order-management.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-update-order-management',
  templateUrl: './update-order-management.component.html',
  styleUrls: ['./update-order-management.component.css']
})
export class UpdateOrderManagementComponent implements OnInit {

  constructor(private _oms:OrderManagementService,
                private _snackbar_helper:SnackbarHelperService,
                private _activateRouter:ActivatedRoute) { }

  orderId:any;
  singleOrder:any;
  dataSelector:any;

  progressBar:any ={
    dynamicValue:false
  }

  ngOnInit(): void {
    this.orderId=this._activateRouter.snapshot.params.orderId;
      this.getCuurentPaidOrderById();
  }


  getCuurentPaidOrderById()
  {
      this._oms.getCurrentPaidOrderById(this.orderId).subscribe(data=>{
        this.singleOrder = data;
        console.log(this.singleOrder);
        
            },error=>{
        console.log(error);
        
      })
  }
  selectDeliveryDate(event:any)
  {
    this.singleOrder.deliveryDate ="";  
     this.singleOrder.deliveryDate = event.target.value;
     this.singleOrder.deliveryStatus = "R";
  }

  selectdeliveyType(event:any)
  {
    this.singleOrder.deliveryStatus =  event.target.value;
    this.updateOrderCurrentData()
  }



  updateOrderCurrentData(){

    this.progressBar_Starting()
    
    this._oms.updatePaidOrder(this.singleOrder).subscribe
      (data=>{
        this.singleOrder = data;

        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("UPDATE PAID ORDER..", "cancel",2000);
        this.progressBar_Stop();
        
      },
      error=>
      {
        console.log(error);

        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("FAILED TO UPDATE..", "cancel",2000);
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
