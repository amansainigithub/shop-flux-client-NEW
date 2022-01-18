import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/category_services/product.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';
import { ShowProductComponent } from '../show-product/show-product.component';

@Component({
  selector: 'app-upload-files-product',
  templateUrl: './upload-files-product.component.html',
  styleUrls: ['./upload-files-product.component.css']
})
export class UploadFilesProductComponent implements OnInit {

  constructor(private _productService:ProductService,
    private _snackbar_helper:SnackbarHelperService) { }

    productList:any=null;
  ngOnInit(): void {
    this.getProductList();
  }


  getProductList()
  {
      this._productService.getProductList().subscribe(data=>{
         this.productList=data;
        //  console.log(data);
         
      },
      error=>{
          console.log(error);
          
      })
  }
}
