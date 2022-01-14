import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/ad_services/banner/banner.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private _bannerService:BannerService, private _snackbar_helper:SnackbarHelperService) { }

  
  progressBar:any ={
    dynamicValue:false
  }

  bannerForm:any={
    "bannerId": 0,
    "defaultName":"",
    "bannerName": "",
    "description": "",
    "fileContentType": "",
    "fileSize": "",
    "fileUrl": "",
    "filename": "",
    "folderName": "",
    "longDescription": "",
    "shortDescription": ""
  }

  ngOnInit(): void {
  }

  createBanner(){
    //Progress bar starting 
    this.progressBar_Starting();
     this._bannerService.saveBannerService(this.bannerForm).subscribe
     (data=>{
          this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("BANNER CREATED", "cancel",2000);
          this.progressBar_Stop();
          return;
     },
     error=>{
            this._snackbar_helper.
            OpenSnackbar_verticalPosition_top_right(error.error.message, "cancel",2000);
            this.progressBar_Stop();
            return;

     })
  }

  progressBar_Starting()
  {
    console.log("STARTING");
          
    this.progressBar.dynamicValue=true;
  }

  progressBar_Stop()
  {
    console.log("ending");
          
    this.progressBar.dynamicValue=false;
  }


}
