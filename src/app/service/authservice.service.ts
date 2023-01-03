import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
authentication:any = {};

constructor() { }


setAuthData(authData){
  this.setLocalStorage(authData);
}

setLocalStorage(authData){
  localStorage.setItem("authData", JSON.stringify(authData));
}

getLocalStorage(){
 let authData =  localStorage.getItem("authData");
  this.authentication = authData ? JSON.parse(authData) : {};
}

removeLocalStorge(key :string):  void {
  localStorage.removeItem(key);
}

setLocalItem(key, value, encoded): void {
  value = JSON.stringify(value);
  if (encoded) {
    value = btoa(value.replace(/[\u00A0-\u2666]/g, (c) => {
      return '&#' + c.charCodeAt(0) + ';';
  }));
  }
  localStorage.setItem(key, value);
}

getLocalItem(key, decoded): any {
  let value = localStorage.getItem(key);
  try {
    value = value ? JSON.parse(decoded ? atob(value) : value) : null;
    return value;
  } catch (e) {
    return null;
  }
}

getAuthStatus() {
  let val: boolean;
  let authData = this.getLocalItem('authData', true);
  this.authentication = authData ? authData : null;
    if(this.authentication) {
      val = true
    } else {
      val = false
    }
    console.log(val);
    return val;
}

}
