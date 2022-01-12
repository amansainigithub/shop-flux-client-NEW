import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/ad_services/banner/banner.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';

@Component({
  selector: 'app-show-banner',
  templateUrl: './show-banner.component.html',
  styleUrls: ['./show-banner.component.css']
})
export class ShowBannerComponent implements OnInit {

  constructor(private _bannerService:BannerService) { }

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
      )
  }


  deleteBannerById(bannerId:any)
  {
      console.log(bannerId);
      
      
  }

}
