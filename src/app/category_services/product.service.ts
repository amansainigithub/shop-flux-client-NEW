import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from '../helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,private auth_URL:AuthURLService) { }


  //SAVE-PRODUCT
  saveRootCategory(product:any)
  {
    return this.http.post(this.auth_URL.authUrl+"saveProduct",product);
  }


  getProductList()
  {
    return this.http.get(this.auth_URL.authUrl+"getProductList");
  }


  getProductById(productId:any)
  {
    return this.http.get(`${this.auth_URL.authUrl}getProductById/${productId}`);
  }


  removeProductById(productId:any)
  {
    return this.http.delete(`${this.auth_URL.authUrl}deleteProductById/${productId}`);
  }



}
