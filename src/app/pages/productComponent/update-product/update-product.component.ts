import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/category_services/product.service';
import { SubCategoryService } from 'src/app/category_services/sub-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,
    private productService:ProductService,
    private _snackbar_helper:SnackbarHelperService,
    private _sub_category:SubCategoryService) { }

    productId:any=0;
    productData:any;
    subCategoryList:any ;
    selectedSubCategoryId:number =0;

    progressBar:any ={
      dynamicValue:false
    }
  
    checkbox:any={
      isChecked: "",
  }
  

  ngOnInit(): void {

    this.productId=this._activateRouter.snapshot.params.productId;
    this.getProductById(this.productId);


    this._sub_category.reteriveSubCategoryList().subscribe(
      data=>{
           this.subCategoryList =data;
           
      },
      error =>{
           console.log(error);
           
      }
    )
  }

  getProductById(productId:any)
  {
      this.productService.getProductById(productId).subscribe(
        data=>{
              this.productData=data;
              console.log(this.productData);
              
        },
        error=>{
            console.log(error);
            
        }
      )
  }


  updateProduct()
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

 this.productData.productSubCategoryForm.productSubCategoryId=this.selectedSubCategoryId;

 this.productService.saveRootCategory(this.productData).subscribe
 (data=>{
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("update product success", "cancel",2000);
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
