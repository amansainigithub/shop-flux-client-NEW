import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubCategoryService } from 'src/app/category_services/sub-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  constructor(private _snackbar : MatSnackBar,
              private _sub_category_service:SubCategoryService,
              private _snackbar_helper:SnackbarHelperService ) { }

  ngOnInit(): void {
    this.getRootCategoryList();
  }
  subCategoryForm:any={
    creationOwnTime: "",
    description: "",
    imageUrl: "",
    longDescription: "",
    subCategoryName: "",
    subCategoryStatus: true,
    shortDescription: "",
    userCreatingTime: "",
    videoUrl: "",
    productRootCategoryForm:
                            {
                              productRootCategoryId:""
                            }

}
progressBar:any ={
  dynamicValue:false
}

checkbox:any={
  isChecked: "",
}

selectedRootCategoryId:number =0;

rootCategoryData:any=[];


//create Sub category
createSubCategory()
{
  

  //Progress bar starting 
  this.progressBar_Starting();

  if(this.selectedRootCategoryId == null || this.selectedRootCategoryId == undefined)
  {
    this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("Something went wrong !!", "cancel",2000);
      this.progressBar_Stop();
    return ;
  }

  //Set Root Category Id
  this.subCategoryForm.productRootCategoryForm.productRootCategoryId=this.selectedRootCategoryId;

    //checking check box conditions
    if(this.checkbox.isChecked ==false || this.checkbox.isChecked == null)
    { 
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("please check the mark", "cancel",2000);
      this.progressBar_Stop()
      return;
    }

    this._sub_category_service.saveSubCategory(this.subCategoryForm).subscribe(
      data => {
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("category created !", "ok",2000);
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


//getRootCategoryList
getRootCategoryList()
{
  this._sub_category_service.getRootCategoryList().subscribe(
    data=>{
          this.rootCategoryData=data;
    },
    error=>
    {
        console.log(error);
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
