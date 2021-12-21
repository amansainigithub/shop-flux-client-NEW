import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RootCategoryService } from 'src/app/category_services/root-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-show-root-category',
  templateUrl: './show-root-category.component.html',
  styleUrls: ['./show-root-category.component.css']
})
export class ShowRootCategoryComponent implements OnInit {

  constructor(private _show_rootcategory:RootCategoryService,
              private _snackbar_helper:SnackbarHelperService,
              private _router:Router,
              public _activateRouter:ActivatedRoute
              ) {
   }

   progressBar:any ={
    dynamicValue:false
  }


  public rootCategoryData:any;

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

  //*************REMOVE ROOT CATEGORY*******************
  removeRootCategory(rootCategoryId:any)
  {
    this._show_rootcategory.removeRootCategory(rootCategoryId).subscribe(
      data=>
      {
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("delete success", "ok",2000);
        this.reteriveRootCatergoryData();
      },error=>{
        console.log(error);
        
        this._snackbar_helper.
        OpenSnackbar_horizontalPosition_end("something went wrong", "cancel",2000);
      }
    )
    
  }


  //PROGRESS BAR START
  progressBar_Starting()
  {
    this.progressBar.dynamicValue=true;
  }

  //PROGRESS BAR STOP
  progressBar_Stop()
  {
    this.progressBar.dynamicValue=false;
  }

}
