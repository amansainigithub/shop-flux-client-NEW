import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/ad_services/banner/banner.service';
import { BannerTypeService } from 'src/app/ad_services/bannerType/banner-type.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-banner-type',
  templateUrl: './banner-type.component.html',
  styleUrls: ['./banner-type.component.css']
})
export class BannerTypeComponent implements OnInit {

  constructor(private _bannerTypeService:BannerTypeService, private _snackbar_helper:SnackbarHelperService) { }

  progressBar:any ={
    dynamicValue:false
  }

  bannerTypeForm:any={
    "bannerLongDesc":"",
    "bannerTypeDesc": "",
    "bannerTypeName": "",
  }

  bannerTypeData:any=[];

  ngOnInit(): void {
   this.fetchBannerTypeData();
  }

  createBannerType(){
    //Progress bar starting 
     this._bannerTypeService.saveBannerTypeService(this.bannerTypeForm).subscribe
     (data=>{
          this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("BANNER-TYPE CREATED", "cancel",2000);
          this.progressBar_Stop();
          this.fetchBannerTypeData();
          return;
     },
     error=>{
            this._snackbar_helper.
            OpenSnackbar_verticalPosition_top_right(error.error.message, "cancel",2000);
            this.progressBar_Stop();
            return;

     })
  }

  fetchBannerTypeData()
  { 
      this._bannerTypeService.getBannerTypeList().subscribe(
        data=>{
            this.bannerTypeData=data;
        },
        error=>{
            console.log(error);
            
        }
      );
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
