import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinalCategoryService } from 'src/app/category_services/final-category.service';
import { SubCategoryService } from 'src/app/category_services/sub-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-update-final-category',
  templateUrl: './update-final-category.component.html',
  styleUrls: ['./update-final-category.component.css']
})
export class UpdateFinalCategoryComponent implements OnInit {

  
  constructor(private _activateRoute:ActivatedRoute,
    private _sub_category:SubCategoryService,
    private _final_category_service:FinalCategoryService,
    private _snackbar_helper:SnackbarHelperService) { }

    finalCategoryId=0;
    selectedFinalCategoryId:number=0;
    subCategoryList:any ;

  ngOnInit(): void {
    //GET FINAL CATEGORY ID
    this.finalCategoryId = this._activateRoute.snapshot.params.finalCategoryId;

    //GET SUB CATEGORY LIST
    this._sub_category.reteriveSubCategoryList().subscribe(
      data=>{
           this.subCategoryList =data;
           console.log(this.subCategoryList);
           
      },
      error =>{
           console.log(error);
           
      }
    )
   //GET FINAL CATEGORY DATA BY ID  
    this.getFinalCategoryDataById(this.finalCategoryId);
  }

  progressBar:any ={
    dynamicValue:false
  }

  checkbox:any={
    isChecked: "",
  }

  public updateFinalCategoryData:any;
  public rootCategoryData:any=[];

  getFinalCategoryDataById(finalCategoryId:any)
  {
      this._final_category_service.getFinalCategoryDataById(finalCategoryId).subscribe
      (data=>{
        this.updateFinalCategoryData=data;
        console.log("******************FINAL-CATEGORY-ID*****************");
        console.log(this.updateFinalCategoryData);
        
      },
      error=>{
          console.log(error);
          
      })
  }



  
updateFinalCategory()
{ 
  // console.log(this.selectedRootCategoryId);
 //Progress bar starting 
 this.progressBar_Starting();

 //checking check box conditions
 if(this.checkbox.isChecked ==false || this.checkbox.isChecked == null)
 { 
   this._snackbar_helper.
   OpenSnackbar_verticalPosition_top_right("please check the mark", "cancel",2000);
   this.progressBar_Stop()
   return;
 }

 if(this.selectedFinalCategoryId == null || this.selectedFinalCategoryId == undefined || this.selectedFinalCategoryId==0)
 {
  this._snackbar_helper.
  OpenSnackbar_verticalPosition_top_right("SELECT ROOT CATEGORY ! NOT NULL !!!", "ERROR",2000);

   //Progress bar stop 
   this.progressBar_Stop()
   return;
 }


  this.updateFinalCategoryData.productSubCategoryForm.productSubCategoryId=this.selectedFinalCategoryId;
  

  this._final_category_service.saveFinalCategory(this.updateFinalCategoryData).subscribe(
    data => {
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("update successfully !", "ok",2000);
      
       //Progress bar stop 
       this.progressBar_Stop()

    },
    err => {
      this._snackbar_helper.
      OpenSnackbar_horizontalPosition_end("data not found !!", "cancel",2000);
      //Progress bar stop 
      this.progressBar_Stop()
    }
  );
  
  
}

  //PROGRESS BAR STARTING
progressBar_Starting()
{
  this.progressBar.dynamicValue=true;
}

// PROGRESS BAR ENDING
progressBar_Stop()
{
  this.progressBar.dynamicValue=false;
}


}
