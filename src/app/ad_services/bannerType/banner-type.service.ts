import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class BannerTypeService {

  constructor(private http: HttpClient,private auth_URL:AuthURLService) { }



  saveBannerTypeService(bannerTypeForm:any)
  {
    return this.http.post(this.auth_URL.authUrl+"addBannerType",bannerTypeForm);
  }

  getBannerTypeList()
  {
    return this.http.get(this.auth_URL.authUrl+"getBannerTypeList");
  }


}

