import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from '../helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class CStructureFinalCategoryService {


  constructor(private _http:HttpClient,private auth_URL:AuthURLService) { }

  saveCSFC(csfcData:any)
  {
    return this._http.post(this.auth_URL.authUrl+"saveFinalCategorySingle",csfcData);
  }


  getCStructureFCList()
  {
    return this._http.get(this.auth_URL.authUrl+"getCStructureFinalCategoryList");
  }

  deleteCStructureFinalCategory(cSFCid:any)
  {
    return this._http.delete(this.auth_URL.authUrl+"deleteCStructureFinalCategory/"+cSFCid);
  }
}
