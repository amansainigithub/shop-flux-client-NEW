import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinalCategoryService } from 'src/app/category_services/final-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-upload-files-final-category',
  templateUrl: './upload-files-final-category.component.html',
  styleUrls: ['./upload-files-final-category.component.css']
})
export class UploadFilesFinalCategoryComponent implements OnInit {

  constructor(private _final_category_service:FinalCategoryService,
    private _snackbar_helper:SnackbarHelperService,
    private _router:Router,
    public _activateRouter:ActivatedRoute) { }

public finalCategoryData:any;

progressBar:any ={
  dynamicValue:false
}
  ngOnInit(): void {
    this.reteriveFinalCatergoryData();
  }

   //********************FINAL-CATEGORY-DATA****************************
   reteriveFinalCatergoryData()
   {
     this._final_category_service.reteriveFinalCategoryList().subscribe(
       data=>{
             this.finalCategoryData=data;
             console.log(this.finalCategoryData);
             
       },
       error=>
       {
           console.log(error);
       }
     );
   }

}
