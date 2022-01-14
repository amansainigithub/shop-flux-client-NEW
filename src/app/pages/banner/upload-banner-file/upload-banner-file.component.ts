import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BannerService } from 'src/app/ad_services/banner/banner.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-upload-banner-file',
  templateUrl: './upload-banner-file.component.html',
  styleUrls: ['./upload-banner-file.component.css']
})
export class UploadBannerFileComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,
              private _snackbar_helper:SnackbarHelperService,
              private _bannerService:BannerService) { }

  bannerId:any;
  files:any=FileList;
  filterData:any;
  linkingNode:any=[];

  ngOnInit(): void {
    this.bannerId = this._activateRouter.snapshot.params.bannerId;
  }

  selectEvent(event:any)
  {
      this.files=event.target.files;
     // console.log(this.files);
  }

  progressBar:any ={
    dynamicValue:false
  }


  uploadBannerFile()
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

      this._bannerService.uploadBannerFile(this.files[0],this.bannerId).subscribe
      (data=>{
         //SNACK BAR MESSAGE
          this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("files upload success!!", "ok",2000);
           //STOP PROGRESS BAR
      this.progressBar_Stop();
          
      },
      error=>{
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("files upload Failed!!", "cancel",2000);
        //STOP PROGRESS BAR
      this.progressBar_Stop();
      return;
      
    });
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
