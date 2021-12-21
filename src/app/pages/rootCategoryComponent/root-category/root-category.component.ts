import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { RootCategoryService } from 'src/app/category_services/root-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';
@Component({
  selector: 'app-root-category',
  templateUrl: './root-category.component.html',
  styleUrls: ['./root-category.component.css']
})
export class RootCategoryComponent implements OnInit {

  constructor(private _snackbar : MatSnackBar,private _root_category_service:RootCategoryService,
              private _snackbar_helper:SnackbarHelperService ) { }

  ngOnInit(): void {
  }

  rootCategoryForm:any={
            creationOwnTime: "",
            description: "",
            imageUrl: "",
            longDescription: "",
            rootCategoryName: "",
            rootCategoryStatus: true,
            shortDescription: "",
            userCreatingTime: "",
            videoUrl: ""

  }

  progressBar:any ={
    dynamicValue:false
  }

  checkbox:any={
    isChecked: "",
}

  createRootCategory()
  {
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

      this._root_category_service.saveRootCategory(this.rootCategoryForm).subscribe(
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

  progressBar_Starting()
  {
    this.progressBar.dynamicValue=true;
  }

  progressBar_Stop()
  {
    this.progressBar.dynamicValue=false;
  }

}
