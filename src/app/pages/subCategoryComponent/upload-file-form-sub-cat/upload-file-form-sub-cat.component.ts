import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadFilesService } from 'src/app/category_services/upload-files.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-upload-file-form-sub-cat',
  templateUrl: './upload-file-form-sub-cat.component.html',
  styleUrls: ['./upload-file-form-sub-cat.component.css']
})
export class UploadFileFormSubCatComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,
    private _uploadService:UploadFilesService,
    private _snackbar_helper:SnackbarHelperService) { }

subCategoryId:any;
files:any=FileList;
filterData:any;

progressBar:any ={
  dynamicValue:false
}

  ngOnInit(): void {
    this.subCategoryId = this._activateRouter.snapshot.params.subCategoryId;
    this.getSubCategoryFilesById();
  }

  selectEvent(event:any)
  {
      this.files=event.target.files;
     // console.log(this.files);
      
  }

  uploadSubFiles(categoryTemplateName:any)
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

      this._uploadService.genericUploadFileService(this.files[i],this.subCategoryId,categoryTemplateName).subscribe
      (data=>{
        this.getSubCategoryFilesById();
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
  getSubCategoryFilesById()
  {
     //STARTING PROGRESS BAR
     this.progressBar_Starting();
      console.log(this.subCategoryId);
    this._uploadService.getGenericBucketFilesById(this.subCategoryId).subscribe(
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
  bindFileWithSubCategoryImageUrl(bucketId:any)
  {
      //STARTING PROGRESS BAR
      this.progressBar_Starting();

    this.bindForm.bucketId=bucketId;
    this.bindForm.categoryId=this.subCategoryId;
    this.bindForm.categoryHierarchyName="SUB",
    this.bindForm.fileTemplateName="IMAGE"
    
    this._uploadService.bindFileWithUrls(this.bindForm).subscribe
    (data=>{

       //SHOW-MESSAGE
       this._snackbar_helper.
       OpenSnackbar_verticalPosition_top_right("[ LINKING SUCCESS ]", "ok",2000);
   //STARTING PROGRESS BAR
     this.progressBar_Stop();

     //FWTCH SUB-CATEGORY-LIST  
     this.getSubCategoryFilesById();
    },
    error=>{
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("[ LINKING FAILED !! ]", "cancel",2000);

        //STARTING PROGRESS BAR
        this.progressBar_Stop();
          
    })
  }

//Bind Videos
  bindFileWithSubCategoryVideoUrl(bucketId:any)
  {
      //STARTING PROGRESS BAR
      this.progressBar_Starting();

    this.bindForm.bucketId=bucketId;
    this.bindForm.categoryId=this.subCategoryId;
    this.bindForm.categoryHierarchyName="SUB",
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
