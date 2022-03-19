import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProductSizeService } from 'src/app/category_services/create-product-size.service';
import { ProductService } from 'src/app/category_services/product.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-update-product-size',
  templateUrl: './update-product-size.component.html',
  styleUrls: ['./update-product-size.component.css']
})
export class UpdateProductSizeComponent implements OnInit {

  constructor(
    private _activateRouter:ActivatedRoute,
    private productService:ProductService,
    private _snackbar : MatSnackBar,
    private _router : Router,
    private _cpss:CreateProductSizeService,
    private _snackbar_helper:SnackbarHelperService) { }

  productId:any=0;
  currentUrl:any;

  progressBar:any ={
    dynamicValue:false
  }

  updateProductSizeForm:any={
    "id":"",
    "productSize":"",
    "productSizeName":"",
    "productSizeQuantity":"",
    "shortDescription":"",
    "longDescription":"",
    "sequenceNum":"",
    "status":""
  };



  ngOnInit(): void {
    
    this.productId=this._activateRouter.snapshot.params.productId;

    //GET CURRENT URL
     this.currentUrl  = this._router.url;
    

    // CALL PRODUCT BY ID
     this.getProductById(this.productId);


     //CALL PRODUCT-SIZE LIST
     this.getProductSizeList();
  }

  productData:any;
  currentProductSizeList:any;
  getProductById(productId:any)
  {
      this.productService.getProductById(productId).subscribe(
        (data:any)=>{
              this.productData=data;
              this.currentProductSizeList  =  data.productSizeSetForProductForms;
              console.log(this.productData);
              console.log(this.currentProductSizeList);
              
        },
        error=>{
            console.log(error);
            
        }
      )
  }


  productSizeList:any;
  getProductSizeList()
  {
     //Progress bar starting 
     this.progressBar_Starting();

    this._cpss.getProductSizeList().subscribe(data=>{
      this.productSizeList = data;

      this.progressBar_Stop();
       return ;

    },error=>{
      this.progressBar_Stop();
      return ;
    })
  }

  productSize:any;
  selectProductSize(e:any)
  {
    this.productSize=e.target.value;
    this.updateProductSizeForm.productSize= this.productSize;
    console.log(this.productSize);
    
  }
  

  updateProductSizeForProduct()
  {
    this._cpss.
    updateProductSizeForProductService
    (this.productId,this.updateProductSizeForm).subscribe(data=>{

      this.getProductById(this.productId);      
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("PRODUCT-SIZE FOR PRO UPDATE", "cancel",2000);

        //console.log(data);
    },error=>{
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("PRODUCT-SIZE FOR PRO UPDATION FAILED !!!", "cancel",2000);
      console.log(error);
    })
  }




  removeProductSizeForProductById(sizeId:any)
  {
    this._cpss.removeProductSizeForProductByIdService(sizeId).subscribe(data=>{
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("REMOVE SUCCESS", "cancel",2000);

      //GET PRODUCT BY ID 
      this.getProductById(this.productId);

    },error=>{

      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("REMOVE FAILED", "cancel",2000);
    })
  }


  getProductSizeForProductById(sizeId:any)
  {
    this._cpss.getProductSizeForProductByIdService(sizeId).subscribe(data=>{
      this.updateProductSizeForm = data;
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("FETCH SUCESS", "cancel",2000);

      //GET PRODUCT BY ID 
      this.getProductById(this.productId);

    },error=>{

      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("REMOVE FAILED", "cancel",2000);
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
