import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from '../helper-msg/auth-url.service';
import { SnackbarHelperService } from '../helper-msg/snackbar-helper.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RootCategoryService {

  constructor(private http: HttpClient,private auth_URL:AuthURLService) { }

  saveRootCategory(rootCategoryForm:any)
  {
    return this.http.post(this.auth_URL.authUrl+"saveProductRootCategory",rootCategoryForm);
  }


  getRootCategory()
  {
    return this.http.get(this.auth_URL.authUrl+"getRootCategoryList");
  }

  removeRootCategory(rootCategoryId:any)
  {
    return this.http.delete(`${this.auth_URL.authUrl}removeRootCategory/${rootCategoryId}`);
  }

  getRootCategoryById(rootCategoryId:any)
  {
    return this.http.get(`${this.auth_URL.authUrl}getRootCategoryById/${rootCategoryId}`);
  }




}



