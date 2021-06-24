import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//Service to get the logs
@Injectable({
  providedIn: 'root'
})
export class LogService {
  private Url = 'http://localhost:4200/api/';

  //private logsUrl = 'api/logs';
  getLogs(serviceNum: string): Observable<any>{
    //console.log(serviceNum);
    //console.log(this.http.get<String[]]>(this.Url))
    //console.log(serviceNum);
    //console.log(this.Url.concat(serviceNum))
    return this.http.get<any>(this.Url.concat(serviceNum));
  }
  constructor(private http: HttpClient) { }
}
 