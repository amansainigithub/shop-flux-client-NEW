import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from '../helper-msg/auth-url.service';
import { RootCategoryService } from './root-category.service';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  constructor(private _http:HttpClient,
              private auth_URL:AuthURLService,
              private _rootCategoryService:RootCategoryService) { }



  genericUploadFileService(files:any,genericCategoryId:any,categoryTemplatename:any)
  {
    const formData: FormData = new FormData();
    formData.append('files', files);
    
    //COLLECT URL
    var url=this.auth_URL.authUrl+"uploadFiles/"+categoryTemplatename+"/"+genericCategoryId;
    
    return this._http.post(url,formData);
  }


  getGenericBucketFilesById(genericId:any)
  {
    var url= this.auth_URL.authUrl+"getFiles/"+genericId;
    return this._http.get(url);
  }


  getProductLinkingFilesByProductId(genericId:any)
  {
    var url= this.auth_URL.authUrl+"getProductFilesByProductId/"+genericId;
    return this._http.get(url);
  }

  


  deleteFileByBucketId(bucketId:any)
  {
      var url = this.auth_URL.authUrl+"deleteFiles/"+bucketId;
      return this._http.delete(url);
  }

  
  bindFileWithUrls(bindForm:any)
  {
    var url = this.auth_URL.authUrl+"bindFile";
    return this._http.put(url,bindForm);
  }


  setProductThumbNail(bucketId:any,productId:any)
  {
    var url = this.auth_URL.authUrl+"setProductThumbNail/"+productId+"/"+bucketId;
    return this._http.post(url,"");
  }
}
