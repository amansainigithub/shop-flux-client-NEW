import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from '../helper-msg/auth-url.service';
import { RootCategoryService } from './root-category.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {



  constructor(private _http:HttpClient,private auth_URL:AuthURLService,private _rootCategoryService:RootCategoryService) { }


  saveSubCategory(rootCategoryForm:any)
  {
    return this._http.post(this.auth_URL.authUrl+"addProductSubCategory",rootCategoryForm);
  }
  

  getRootCategoryList()
  {
      return this._rootCategoryService.getRootCategory();
  }

  reteriveSubCategoryList()
  {
    return this._http.get(this.auth_URL.authUrl+"getSubCategoryList");
  }

  getSubCategoryById(subCategoryId:any)
  {
    return this._http.get(this.auth_URL.authUrl+"getSubCategoryById/"+subCategoryId);
  }
}
