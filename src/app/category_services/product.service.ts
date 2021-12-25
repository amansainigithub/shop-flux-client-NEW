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



}
