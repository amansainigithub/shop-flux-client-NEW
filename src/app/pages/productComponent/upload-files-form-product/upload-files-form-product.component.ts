import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadFilesService } from 'src/app/category_services/upload-files.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-upload-files-form-product',
  templateUrl: './upload-files-form-product.component.html',
  styleUrls: ['./upload-files-form-product.component.css']
})
export class UploadFilesFormProductComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,
    private _uploadService:UploadFilesService,
    private _snackbar_helper:SnackbarHelperService) { }

    productId:any;
    files:any=FileList;
    filterData:any;

  ngOnInit(): void {
    this.productId = this._activateRouter.snapshot.params.productId;
    this.getProductFilesById();
  
  }

  selectEvent(event:any)
  {
      this.files=event.target.files;
     // console.log(this.files);
      
  }

  progressBar:any ={
    dynamicValue:false
  }

  
  uploadProductFiles(categoryTemplateName:any)
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

      this._uploadService.genericUploadFileService(this.files[i],this.productId,categoryTemplateName).subscribe
      (data=>{
       
      },
      error=>{
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("files upload Failed!!", "cancel",2000);
        
        //STOP PROGRESS BAR
      this.progressBar_Stop();
      return;
      
    });
      
    }

    //GET PRODUCT FILES
    this.filterData=null;
    this.getProductFilesById();


    //SNACK BAR MESSAGE
    this._snackbar_helper.
    OpenSnackbar_verticalPosition_top_right("files upload success!!", "ok",2000);

  //STOP PROGRESS BAR
  this.progressBar_Stop();
  }


   //************GET FILES BY ID */
   getProductFilesById()
   {
      //STARTING PROGRESS BAR
      this.progressBar_Starting();

     this._uploadService.getGenericBucketFilesById(this.productId).subscribe(
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

  deleteFileByBucketId(bucketId:any)
  {
    //STARTING PROGRESS BAR
    this.progressBar_Starting();

    this._uploadService.deleteFileByBucketId(bucketId).subscribe(
      data=>{
            //SNACK BAR MESSAGE
            this._snackbar_helper.
            OpenSnackbar_verticalPosition_top_right("delete files success", "ok",2000);

            this.getProductFilesById();
        //STARTING PROGRESS BAR
          this.progressBar_Stop();
      },
      error=>{
        console.log(error);
        
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("files deleted Failed!!", "cancel",2000);

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
