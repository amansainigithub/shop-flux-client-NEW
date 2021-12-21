import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoryService } from 'src/app/category_services/sub-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-update-sub-category',
  templateUrl: './update-sub-category.component.html',
  styleUrls: ['./update-sub-category.component.css']
})
export class UpdateSubCategoryComponent implements OnInit {

  constructor(private _activateRoute:ActivatedRoute,
              private _subCategoryService:SubCategoryService,
              private _snackbar_helper:SnackbarHelperService) { }

  subCategoryId=0;
  selectedRootCategoryId:number=0;

  progressBar:any ={
    dynamicValue:false
  }

  checkbox:any={
    isChecked: "",
  }

  public updateSubCategoryData:any;
  public rootCategoryData:any=[];

  ngOnInit(): void {

    this.subCategoryId = this._activateRoute.snapshot.params.subCategoryId;
    console.log(this.subCategoryId);
  
   
    this.getSubCategoryById(this.subCategoryId);
    this.getRootCategoryList();
    
    
  }

  getRootCategoryList()
  {
    this._subCategoryService.getRootCategoryList().subscribe(
      data=>{
            this.rootCategoryData=data;
            console.log(this.getRootCategoryList);
            
      },
      error=>
      {
          console.log(error);
      }
    );
  }

  getSubCategoryById(subCategoryId:any)
  {
    console.log(subCategoryId);
    
      this._subCategoryService.getSubCategoryById(subCategoryId).subscribe
      (data=>{
        this.updateSubCategoryData=data;
        console.log();
        
        console.log(this.updateSubCategoryData);
        
      },
      error=>{
          console.log(error);
          
      })
  }


updateSubCategory()
{ 
  console.log(this.selectedRootCategoryId);
  

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

 if(this.selectedRootCategoryId == null || this.selectedRootCategoryId == undefined || this.selectedRootCategoryId==0)
 {
  this._snackbar_helper.
  OpenSnackbar_verticalPosition_top_right("SELECT ROOT CATEGORY ! NOT NULL !!!", "ERROR",2000);

   //Progress bar stop 
   this.progressBar_Stop()
   return;
 }


  this.updateSubCategoryData.productRootCategoryForm.productRootCategoryId=this.selectedRootCategoryId;
  

  this._subCategoryService.saveSubCategory(this.updateSubCategoryData).subscribe(
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
