import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

 

  constructor(private http: HttpClient,private auth_URL:AuthURLService) { }

  saveBannerService(bannerForm:any)
  {
    return this.http.post(this.auth_URL.authUrl+"createBanner",bannerForm);
  }

  getchBannerService()
  {
    return this.http.get(this.auth_URL.authUrl+"getBannerList");
  }

  uploadBannerFile(files:any,bannerId:any)
  {
    const formData: FormData = new FormData();
    formData.append('file', files);
    
    //COLLECT URL
    var url=this.auth_URL.authUrl+"uploadBannerFileByBannerId/"+bannerId;
    return this.http.post(url,formData);
  }


}
