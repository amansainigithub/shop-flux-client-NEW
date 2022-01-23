import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadFilesService } from 'src/app/category_services/upload-files.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-upload-files-form-final-cat',
  templateUrl: './upload-files-form-final-cat.component.html',
  styleUrls: ['./upload-files-form-final-cat.component.css']
})
export class UploadFilesFormFinalCatComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,
    private _uploadService:UploadFilesService,
    private _snackbar_helper:SnackbarHelperService) { }

    finalCategoryId:any;
    files:any=FileList;
    filterData:any;
    
    progressBar:any ={
      dynamicValue:false
    }

  ngOnInit(): void {
    this.finalCategoryId = this._activateRouter.snapshot.params.finalCategoryId;
    this.getFinalCategoryFilesById();
  }

  selectEvent(event:any)
  {
      this.files=event.target.files;
     // console.log(this.files);
      
  }

  
  uploadFinalFiles(categoryTemplateName:any)
  {
    //STARTING PROGRESS BAR
    this.progressBar_Starting();

    if(this.files.length == 0)
    {
      //SNACK BAR MESSAGE
    this._snackbar_helper.
    OpenSnackbar_verticalPosition_top_right("please Select file", "ok",2000);
    //STARTING PROGRESS BAR
    this.progressBar_Stop();
      return;
    }

    for (let i = 0; i < this.files.length; i++) {

      this._uploadService.genericUploadFileService(this.files[i],this.finalCategoryId,categoryTemplateName).subscribe
      (data=>{
        this.getFinalCategoryFilesById();
      },
      error=>{
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("files upload Failed!!", "cancel",2000);
        
        //STOP PROGRESS BAR
      this.progressBar_Stop();
      return;
      
    });
    }

    //SNACK BAR MESSAGE
    this._snackbar_helper.
    OpenSnackbar_verticalPosition_top_right("files upload success!!", "ok",2000);

  //STOP PROGRESS BAR
  this.progressBar_Stop();

  }


    //************GET FILES BY ID */
    getFinalCategoryFilesById()
    {
       //STARTING PROGRESS BAR
       this.progressBar_Starting();
        console.log(this.finalCategoryId);
      this._uploadService.getGenericBucketFilesById(this.finalCategoryId).subscribe(
        data=>{
              this.filterData=data;
              //STOP PROGRESS BAR
              this.progressBar_Stop();
        },
        error=>{
                console.log(error);
               //STOP PROGRESS BAR
               this.progressBar_Stop();
            
        }
      )
  
    }



      ////DELETE BUCKET FILES 
item:any;
deleteFileByBucketId(bucketId:any)
{
  //STARTING PROGRESS BAR
  this.progressBar_Starting();

  this._uploadService.deleteFileByBucketId(bucketId).subscribe(
    data=>{
      history.go(0);
          //SNACK BAR MESSAGE
          this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("delete files success", "ok",2000);
      //STARTING PROGRESS BAR
        this.progressBar_Stop();
    },
    error=>{
      console.log(error);
      
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("files deleted Failed!!", "cancel",2000);

      //STARTING PROGRESS BAR
      this.progressBar_Stop();
    });
}



  //BIND IMAGE

  bindForm={
    "bucketId":"",
    "categoryId":"",
    "categoryHierarchyName":"",
    "fileTemplateName":""
  }

   //Bind Image
bindFileWithFinalCategoryImageUrl(bucketId:any)
{
    //STARTING PROGRESS BAR
    this.progressBar_Starting();

  this.bindForm.bucketId=bucketId;
  this.bindForm.categoryId=this.finalCategoryId;
  this.bindForm.categoryHierarchyName="FINALCATEGORY",
  this.bindForm.fileTemplateName="IMAGE"
  
  this._uploadService.bindFileWithUrls(this.bindForm).subscribe
  (data=>{

     //SHOW-MESSAGE
     this._snackbar_helper.
     OpenSnackbar_verticalPosition_top_right("[ LINKING SUCCESS ]", "ok",2000);
 //STARTING PROGRESS BAR
   this.progressBar_Stop();

   //FWTCH SUB-CATEGORY-LIST  
   this.getFinalCategoryFilesById();
  },
  error=>{
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("[ LINKING FAILED !! ]", "cancel",2000);

      //STARTING PROGRESS BAR
      this.progressBar_Stop();
        
  })
}


//Bind Videos
bindFileWithFinalCategoryVideoUrl(bucketId:any)
{
    //STARTING PROGRESS BAR
    this.progressBar_Starting();

  this.bindForm.bucketId=bucketId;
  this.bindForm.categoryId=this.finalCategoryId;
  this.bindForm.categoryHierarchyName="FINALCATEGORY",
  this.bindForm.fileTemplateName="VIDEO"
  
  this._uploadService.bindFileWithUrls(this.bindForm).subscribe
  (data=>{

     //SNACK BAR MESSAGE
     this._snackbar_helper.
     OpenSnackbar_verticalPosition_top_right("[ LINKING SUCCESS ]", "ok",2000);
 //STARTING PROGRESS BAR
   this.progressBar_Stop();
  },
  error=>{
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("[ LINKING FAILED !! ]", "cancel",2000);

      //STARTING PROGRESS BAR
      this.progressBar_Stop();
        
  })
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
