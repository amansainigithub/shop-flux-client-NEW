import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FinalCategoryService } from 'src/app/category_services/final-category.service';
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
    private _final_category_service:FinalCategoryService ) { }
  
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
    "productStatus":"",
    "subCategoryId": "",
    "finalCategoryId": "",
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
    "size3XL":"",

    "uk4":"",
    "uk5":"",
    "uk6":"",
    "uk7":"",
    "uk8":"",
    "uk9":"",
    "uk10":"",
    productFinalCategoryForm:
    {
      productFinalCategoryId:""
    }
  }

  finalCategoryList:any ;
  selectedFinalCategoryId:number =0;
  ngOnInit(): void {
   this._final_category_service.reteriveFinalCategoryList().subscribe(
     data=>{
          this.finalCategoryList =data;
          console.log(this.finalCategoryList);
          
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

     if(this.selectedFinalCategoryId == null || this.selectedFinalCategoryId == undefined)
     {
       this._snackbar_helper.
         OpenSnackbar_verticalPosition_top_right("Something went wrong !!", "cancel",2000);
         this.progressBar_Stop();
          return ;
     }

     this.addProduct.productFinalCategoryForm.productFinalCategoryId=this.selectedFinalCategoryId;

     console.log(this.addProduct);
     

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
