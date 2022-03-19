import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateProductSizeService } from 'src/app/category_services/create-product-size.service';
import { ProductService } from 'src/app/category_services/product.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-product-size-component',
  templateUrl: './product-size-component.component.html',
  styleUrls: ['./product-size-component.component.css']
})
export class ProductSizeComponentComponent implements OnInit {

  progressBar:any ={
    dynamicValue:false
  }

  constructor( 
    private _snackbar : MatSnackBar,
    private _snackbar_helper:SnackbarHelperService,
    private _cpss:CreateProductSizeService,
    private _productService:ProductService,
    ) { }

  productSizeForm:any={
          "id":"",
          "productSize":"",
          "defaultName":"",
          "description":"",
          "longDescription":"",
          "status":""
  }

  ngOnInit(): void {

      //calling PRODUCT_SIZE_LIST
      this.getProductSizeList();

  }


  productSizeStatus:any;
  selectProductSizeStatus(e:any)
  {
    this.productSizeStatus=e.target.value;
  }

  saveProductSize()
  {
     //Progress bar starting 
     this.progressBar_Starting();

    this.productSizeForm.status = this.productSizeStatus;

    this._cpss.saveProductSize(this.productSizeForm).subscribe((data)=>{
      this._cpss.saveProductSize(this.productSizeForm);

      //calling PRODUCT_SIZE_LIST
      this.getProductSizeList();

      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("PRODUCT-SIZE CREATE SUCCESS", "cancel",2000);
      this.progressBar_Stop();
       return ;
      
    },error=>{

      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("Something went wrong !!", "cancel",2000);
      this.progressBar_Stop();
       return ;

    });

    //STOP-PROGRESS_BAR
    this.progressBar_Stop()
    
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



  //REMOVE PRODUCT SIZE
  removeProductSizeById(sizeId:any)
  {
    //Progress bar starting 
    this.progressBar_Starting();

    this._cpss.removeProductSizeById(sizeId).subscribe(data=>{
      this.productSizeList = data;

      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("DELETE-SUCCESS", "cancel",2000);
      this.progressBar_Stop();

      //CALL PRODUCT_SIZE_LIST
      this.getProductSizeList();

       return ;

    },error=>{
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("DELETE-FAILED", "cancel",2000);
      this.progressBar_Stop();
      return ;
    })
  }



  //UPDATE PRODUCT SIZE
  getProductSizeById(sizeId:any)
  {
    //Progress bar starting 
    this.progressBar_Starting();

    this._cpss.getProductSizeById(sizeId).subscribe(data=>{
      this.productSizeForm = data

      console.log(data);
      

      //SNACKBAR 
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("FETCH-DATA-SUCCESS", "cancel",2000);

      //PROGRESS BAR STOP
      this.progressBar_Stop();
      
       return ;

    },error=>{

          //SNACKBAR 
          this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("FAILED TO FETCH", "cancel",2000);

      //PROGRESS BAR STOP
      this.progressBar_Stop();
      return ;
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
