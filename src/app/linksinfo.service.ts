import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILinks } from './links';
@Injectable({
  providedIn: 'root'
})
export class LinksinfoService {
  // links = [
  //   { target : 'node_8', source : 'node_5', strength : 0.1 },
  //   { target : 'node_3', source : 'node_8', strength : 0.1 },
  //   { target : 'node_8', source : 'node_2', strength : 0.1 },
  //   { target : 'node_3', source : 'node_6', strength : 0.1 },
  //   { target : 'node_6', source : 'node_1', strength : 0.1 },
  //   { target : 'node_4', source : 'node_7', strength : 0.1 },
  //   { target : 'node_1', source : 'node_4', strength : 0.1 },
  //   { target : 'node_7', source : 'node_5', strength : 0.1 },
  //   { target : 'node_9', source : 'node_4', strength : 0.1 },
  //   { target : 'node_5', source : 'node_10', strength : 0.1 },
  // ]
  constructor(private http: HttpClient) { }

  // getLinksInfo(){
  //   return this.links
  // }

  getLinksInfo() : Observable<any>{
    console.log(this.http.get('http://127.0.0.1:8080/linkinfo'))
    return this.http.get('http://127.0.0.1:8080/linkinfo')
  }
  
}
