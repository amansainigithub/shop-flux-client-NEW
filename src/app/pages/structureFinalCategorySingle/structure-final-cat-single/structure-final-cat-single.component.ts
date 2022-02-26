import { Component, OnInit } from '@angular/core';
import { CStructureFinalCategoryService } from 'src/app/category_services/c-structure-final-category.service';
import { FinalCategoryService } from 'src/app/category_services/final-category.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-structure-final-cat-single',
  templateUrl: './structure-final-cat-single.component.html',
  styleUrls: ['./structure-final-cat-single.component.css']
})
export class StructureFinalCatSingleComponent implements OnInit {

  constructor(private _snackbar_helper:SnackbarHelperService,private finalCategoryService:FinalCategoryService,private csfcService:CStructureFinalCategoryService) { }

  finalCategoryList :any;
  finalCategoryId:any;
  cStructureFCData:any;

  CSFData:any={
    "finalCategoryName":"",
    "finalCategoryId":"",
    "finalCategoryType":"",
    "finalCategoryDesc":""


  }

  ngOnInit(): void {
    this.getCStructureFinalCategoryList();
    this.getFinalCategoryList();
  }


  getFinalCategoryList()
  {
      this.finalCategoryService.reteriveFinalCategoryList().subscribe(
        data=>{
              this.finalCategoryList=data;
              console.log(this.finalCategoryList);
              
        },
        error=>{
            console.log(error);
            
        }
      )
  }

  selectFinalCategory(e:any)
  {
    this.finalCategoryId=e.target.value;
  
  }

  createCSFC()
  {
      this.CSFData.finalCategoryId=this.finalCategoryId;
      console.log(this.CSFData);
      this.csfcService.saveCSFC(this.CSFData).subscribe(
        data=>{
            console.log(data);
            this.getCStructureFinalCategoryList();
            this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("category created !", "ok",2000);
            
        },
        error=>{
            console.log(error);
            this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("SOMETHING WENT WRONG !", "error",2000);
            
        }
      )
      
  }



  getCStructureFinalCategoryList()
  {
      this.csfcService.getCStructureFCList().subscribe(
        data=>{
              this.cStructureFCData=data;
              console.log(this.cStructureFCData);
        
        },
        error=>{
            console.log(error);
            
        }
      )
  }

  deleteCSFC(cSFCid:any)
  { 


  console.log(cSFCid);
  
  
    this.csfcService.deleteCStructureFinalCategory(cSFCid).subscribe(
      data=>{
        this.getCStructureFinalCategoryList();
          this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("DELETE SUCCESS !", "ok",2000);
          
      },
      error=>{
          console.log(error);
          this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("SOMETHING WENT WRONG !", "error",2000);
          
      }
    )
  }


}
