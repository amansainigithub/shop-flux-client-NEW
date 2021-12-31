import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/category_services/product.service';
import { SubCategoryService } from 'src/app/category_services/sub-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private _snackbar : MatSnackBar,
    private _productService:ProductService,
    private _snackbar_helper:SnackbarHelperService,
    private _sub_category:SubCategoryService ) { }
  
  progressBar:any ={
    dynamicValue:false
  }

  checkbox:any={
    isChecked: "",
}


  addProduct:any = {
    "productName": "",
    "description": "",
    "discount": "",
    "discountAvailable": true,
    "longDescription": "",
    "manufacturingPrice": "",
    "mrpPrice": "",
    "note": "",
    "productAvailable": "",
    "productDetails": "",
    "productId": 0,
    "productLongDetails": "",
    "productShortDetails": "",
    "productUSN": "",
    "quantity": "",
    "rootCategoryId": "",
    "savePrice": "",
    "savePricePercentage": "",
    "sellPrice": "",
    "shortDescription": "",
    "isEnabled":"",
    "subCategoryId": "",
    "productHeight":"",
    "productLength":"",
    "productWidth":"",
    "productWeight":"",
    
    "sizeXS":"",
    "sizeS":"",
    "sizeM":"",
    "sizeL":"",
    "sizeXL":"",
    "sizeXXL":"",
    productSubCategoryForm:
    {
      productSubCategoryId:""
    }
  }

  subCategoryList:any ;
  selectedSubCategoryId:number =0;
  ngOnInit(): void {
   this._sub_category.reteriveSubCategoryList().subscribe(
     data=>{
          this.subCategoryList =data;
          
     },
     error =>{
          console.log(error);
          
     }
   )
  
  }

  saveProduct()
  {
     //Progress bar starting 
     this.progressBar_Starting();

     if(this.selectedSubCategoryId == null || this.selectedSubCategoryId == undefined)
     {
       this._snackbar_helper.
         OpenSnackbar_verticalPosition_top_right("Something went wrong !!", "cancel",2000);
         this.progressBar_Stop();
          return ;
     }

     this.addProduct.productSubCategoryForm.productSubCategoryId=this.selectedSubCategoryId;

     this._productService.saveRootCategory(this.addProduct).subscribe
     (data=>{
          this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("product added", "cancel",2000);
          this.progressBar_Stop()
          return;
     },
     error=>{
            this._snackbar_helper.
            OpenSnackbar_verticalPosition_top_right("something went wrong", "cancel",2000);
            this.progressBar_Stop()
            return;

     })

     //STOP-PROGRESS_BAR
     this.progressBar_Stop()
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
