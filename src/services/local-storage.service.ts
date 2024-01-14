import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  set(key:string, value: any){
    window.localStorage[key] = value;
    return this;
  }

  get(key: string, defaultValue = null){
    return window.localStorage[key] || defaultValue;
  }

  setObject(key:string, value: any){
    window.localStorage[key] = JSON.stringify(value);
    return this;
  }

  getObject(key:string){
    return JSON.parse(window.localStorage.getItem(key) || '{}');
  }

  remove(key:any){
    window.localStorage.removeItem(key);
  }

}
