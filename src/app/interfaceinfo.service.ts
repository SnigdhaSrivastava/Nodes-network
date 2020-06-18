import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceinfoService {

  url: string = 'assets/json/interfaces.json';
  
  constructor(private http: HttpClient) { }

  getInterfacesInfo() : Observable<any>{
    return this.http.get(this.url);
     
  }
}
