import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from '../helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class CreateProductSizeService {

  constructor(private http: HttpClient,private auth_URL:AuthURLService) { }

    //SAVE-PRODUCT-SIZE
    saveProductSize(productSizeForm:any)
    {
      return this.http.post(this.auth_URL.authUrl+"createProductSize",productSizeForm);
    }

    getProductSizeList()
    {
      return this.http.get(this.auth_URL.authUrl+"getProductSizeList");
    }

    removeProductSizeById(sizeId:any)
    {
      return this.http.delete(this.auth_URL.authUrl+"deleteProductSize/"+sizeId);
    }

    getProductSizeById(sizeId:any)
    {
      return this.http.get(this.auth_URL.authUrl+"getProductDetailsSizeById/"+sizeId);
    }

    updateProductSizeForProductService(productId:any,updateProductSizeForm:any)
    {
      return this.http.post(this.auth_URL.authUrl+"saveProductSizeSetForProduct/"+productId,updateProductSizeForm);
    }
  

    //Remove Product Size
    removeProductSizeForProductByIdService(sizeId:any)
    {
      return this.http.delete(this.auth_URL.authUrl+"removeProductSizeForProductById/"+sizeId);
    }

     //Update Product Size
     getProductSizeForProductByIdService(sizeId:any)
     {
       return this.http.get(this.auth_URL.authUrl+"getProductSizeForProductById/"+sizeId);
     }
}
