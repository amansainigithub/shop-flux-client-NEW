import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthURLService {

  constructor() { }

  public authUrl:string = 'http://localhost:8080/api/admin/';
  
}
