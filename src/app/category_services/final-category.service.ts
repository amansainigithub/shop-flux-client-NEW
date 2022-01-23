import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from '../helper-msg/auth-url.service';
import { RootCategoryService } from './root-category.service';

@Injectable({
  providedIn: 'root'
})
export class FinalCategoryService {

  constructor(private _http:HttpClient,private auth_URL:AuthURLService,private _rootCategoryService:RootCategoryService) { }

  saveFinalCategory(finalCategoryForm:any)
  {
    return this._http.post(this.auth_URL.authUrl+"saveFinalProductCategory",finalCategoryForm);
  }

  reteriveFinalCategoryList()
  {
    return this._http.get(this.auth_URL.authUrl+"getFinalCategoryList");
  }

  getFinalCategoryDataById(finalCategoryId:any)
  {
    return this._http.get(this.auth_URL.authUrl+"getFinalCategoryById/"+finalCategoryId);
  }

}
