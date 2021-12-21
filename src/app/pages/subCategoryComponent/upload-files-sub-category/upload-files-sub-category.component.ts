import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryService } from 'src/app/category_services/sub-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-upload-files-sub-category',
  templateUrl: './upload-files-sub-category.component.html',
  styleUrls: ['./upload-files-sub-category.component.css']
})
export class UploadFilesSubCategoryComponent implements OnInit {

  constructor(private _show_subcategory:SubCategoryService,
    private _snackbar_helper:SnackbarHelperService,
    private _router:Router,
    public _activateRouter:ActivatedRoute
    ) {
}
public subCategoryData:any;

progressBar:any ={
  dynamicValue:false
}

  ngOnInit(): void {
    this.reteriveSubCatergoryData();
  }


   //********************ReteriveRootCategory****************************
   reteriveSubCatergoryData()
   {
     this._show_subcategory.reteriveSubCategoryList().subscribe(
       data=>{
             this.subCategoryData=data;
             console.log(data);
             
       },
       error=>
       {
           console.log(error);
       }
     );
   }


}
