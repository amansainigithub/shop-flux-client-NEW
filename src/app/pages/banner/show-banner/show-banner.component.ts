import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/ad_services/banner/banner.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-show-banner',
  templateUrl: './show-banner.component.html',
  styleUrls: ['./show-banner.component.css']
})
export class ShowBannerComponent implements OnInit {

  constructor(private _bannerService:BannerService,private _snackbar_helper:SnackbarHelperService) { }

  bannerData:any=[];

  ngOnInit(): void {
      this.fetchBannerData();
  }

  fetchBannerData()
  { 
      this._bannerService.getchBannerService().subscribe(
        data=>{
            this.bannerData=data;
            console.log(this.bannerData);
            
        },
        error=>{
            console.log(error);
            
        }
      );
  }


  deleteBannerById(bannerId:any)
  { 
    this._bannerService.deleteBannerById(bannerId).subscribe(
      data=>{
           //SHOW-MESSAGE
       this._snackbar_helper.
       OpenSnackbar_verticalPosition_top_right("[ DELETE SUCCESS ]", "ok",2000);

        this.fetchBannerData();   
      },
      error=>{
       //SHOW-MESSAGE
       this._snackbar_helper.
       OpenSnackbar_verticalPosition_top_right("[ DELETE FAILED ]", "cancle",2000);
          
      }
    );
  }

}
