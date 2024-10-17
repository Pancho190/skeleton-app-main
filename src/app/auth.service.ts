import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private authTokenKey ='authToken';

  isAuthenticated():boolean{
    const token = localStorage.getItem(this.authTokenKey);

    return !!token;
  }

  storeToken(token:string):void{
    const encodedToken = btoa(token); //conversion a base64
    localStorage.setItem(this.authTokenKey,encodedToken);

  }

  removeToken(){
    localStorage.removeItem(this.authTokenKey);
  }
}
