import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {

  constructor(private http: HttpClient,private auth_URL:AuthURLService) { }

  getPaidCurrentOrders()
  {
    return this.http.get(this.auth_URL.authUrl+"getCurrentPaidOrders");
  }

  //GET CURRENT PAID ORDER BY ID
  getCurrentPaidOrderById(orderId:any)
  {
    return this.http.get(this.auth_URL.authUrl+"getCurrentPaidOrdersById/"+orderId);
  }

  //UPDATED PAID ORDER
  updatePaidOrder(singleOrder:any)
  {
    return this.http.post(this.auth_URL.authUrl+"updateCurrentPaidOrder",singleOrder);
  }
}
