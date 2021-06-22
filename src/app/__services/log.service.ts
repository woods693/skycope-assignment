import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//Service to get the logs
@Injectable({
  providedIn: 'root'
})
export class LogService {
  private Url = 'http://127.0.0.1:5000/';

  private logsUrl = 'api/logs';
  getLogs(serviceNum: string): Observable<String[]>{
    //console.log(this.http.get<String[]]>(this.Url))
    //console.log(serviceNum);
    return this.http.get<String[]>(this.Url.concat(serviceNum));
  }
  constructor(private http: HttpClient) { }
}
