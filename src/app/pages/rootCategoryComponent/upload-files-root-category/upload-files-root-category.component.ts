import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootCategoryService } from 'src/app/category_services/root-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-upload-files-root-category',
  templateUrl: './upload-files-root-category.component.html',
  styleUrls: ['./upload-files-root-category.component.css']
})
export class UploadFilesRootCategoryComponent implements OnInit {

  constructor(private _show_rootcategory:RootCategoryService,
    private _snackbar_helper:SnackbarHelperService,
    private _router:Router,
    public _activateRouter:ActivatedRoute
    ) {
}
public rootCategoryData:any;

progressBar:any ={
  dynamicValue:false
}

  ngOnInit(): void {
    this.reteriveRootCatergoryData();
  }

   //********************ReteriveRootCategory****************************
   reteriveRootCatergoryData()
   {
     this._show_rootcategory.getRootCategory().subscribe(
       data=>{
             this.rootCategoryData=data;
       },
       error=>
       {
           console.log(error);
       }
     );
   }

}
