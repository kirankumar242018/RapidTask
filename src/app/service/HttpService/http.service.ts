import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  juryData:any;
  constructor(public http:HttpClient) { }

  getJsonData(){
    this.juryData = this.http.get('../../assets/jury.json')
    //console.log('table data..!',this.clientData)
    return this.juryData
  }

}
