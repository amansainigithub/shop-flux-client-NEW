import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FinalCategoryService } from 'src/app/category_services/final-category.service';
import { SubCategoryService } from 'src/app/category_services/sub-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-final-category',
  templateUrl: './final-category.component.html',
  styleUrls: ['./final-category.component.css']
})
export class FinalCategoryComponent implements OnInit {

  constructor( private _snackbar : MatSnackBar,
    private _snackbar_helper:SnackbarHelperService,
    private _final_category_service:FinalCategoryService,
    private _sub_category:SubCategoryService) { }

    subCategoryList:any ;
    selectedSubCategoryId:number =0;
  ngOnInit(): void {
    this._sub_category.reteriveSubCategoryList().subscribe(
      data=>{
           this.subCategoryList =data;
           console.log(this.subCategoryList);
           
           
      },
      error =>{
           console.log(error);
           
      }
    )
   
   }
   progressBar:any ={
    dynamicValue:false
  }
  
  checkbox:any={
    isChecked: "",
  }

   finalCategoryForm:any={
    creationOwnTime: "",
    description: "",
    imageUrl: "",
    longDescription: "",
    finalCategoryName: "",
    finalCategoryStatus: true,
    shortDescription: "",
    userCreatingTime: "",
    videoUrl: "",
    productSubCategoryForm:
                            {
                              productSubCategoryId:""
                            }

}

createFinalCategory()
{

  console.log(this.finalCategoryForm);
  

  //Progress bar starting 
  this.progressBar_Starting();

  if(this.selectedSubCategoryId == null || this.selectedSubCategoryId == undefined)
  {
    this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("Something went wrong !!", "cancel",2000);
      this.progressBar_Stop();
    return ;
  }

  //Set Root Category Id
  this.finalCategoryForm.productSubCategoryForm.productSubCategoryId=this.selectedSubCategoryId;

    //checking check box conditions
    if(this.checkbox.isChecked ==false || this.checkbox.isChecked == null)
    { 
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("please check the mark", "cancel",2000);
      this.progressBar_Stop()
      return;
    }

    this._final_category_service.saveFinalCategory(this.finalCategoryForm).subscribe(
      data => {
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("Final category created !", "ok",2000);
         //Progress bar stop 
         this.progressBar_Stop()

      },
      err => {
        this._snackbar_helper.
        OpenSnackbar_horizontalPosition_end("category already used !!", "cancel",2000);
        //Progress bar stop 
        this.progressBar_Stop()
      }
    );

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
