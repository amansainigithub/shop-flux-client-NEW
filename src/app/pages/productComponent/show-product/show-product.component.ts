import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/category_services/product.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private _productService:ProductService,
    private _snackbar_helper:SnackbarHelperService) { }

  ngOnInit(): void {
    this.getProductList();
  }
  productList:any=null;

  getProductList()
  {
      this._productService.getProductList().subscribe(data=>{
         this.productList=data;
      },
      error=>{
          console.log(error);
          
      })
  }


  //*************REMOVE PRODUCT By ID*******************
  removeProduct(rootCategoryId:any)
  {
    this._productService.removeProductById(rootCategoryId).subscribe(
      data=>
      {
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("delete success", "ok",2000);
        this.getProductList();
      },error=>{
        console.log(error);
        
        this._snackbar_helper.
        OpenSnackbar_horizontalPosition_end("something went wrong", "cancel",2000);
      }
    )
    
  }

 


}
