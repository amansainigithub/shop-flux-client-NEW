import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RootCategoryService } from 'src/app/category_services/root-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-update-root-category',
  templateUrl: './update-root-category.component.html',
  styleUrls: ['./update-root-category.component.css']
})
export class UpdateRootCategoryComponent implements OnInit {

 
progressBar:any ={
  dynamicValue:false
}

checkbox:any={
  isChecked: "",
}

  private rootCategoryId=0;
  public updateData:any;

  constructor(private _activateRouter:ActivatedRoute,
              private rootServices:RootCategoryService,
              private _snackbar_helper:SnackbarHelperService) { }


  ngOnInit(): void {
    this.rootCategoryId=this._activateRouter.snapshot.params.rootCategoryId;
   
    this.getRootCategoryById(this.rootCategoryId);
  }


  getRootCategoryById(rootCategoryId:any)
  {
    this.rootServices.getRootCategoryById(this.rootCategoryId).subscribe(
      data=>{
           this.updateData=data;
      },
      error=>{
          console.log(error);
          
      }
    )
  }

  updateRootCategory()
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

     this.rootServices.saveRootCategory(this.updateData).subscribe(
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

  
  progressBar_Starting()
  {
    this.progressBar.dynamicValue=true;
  }

  progressBar_Stop()
  {
    this.progressBar.dynamicValue=false;
  }

}
