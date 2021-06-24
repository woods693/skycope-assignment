import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private Url = 'http://localhost:4200/api/';

  login(cred: any): Observable<any>{
    return this.http.post<any>(this.Url.concat('login'), cred);
  };

  logout(): Observable<any>{
    return this.http.get<any>(this.Url.concat('logout'));
  };

  isLoggedIn(): boolean{
    if(localStorage.token == "true"){
      return true;
    };
    return false;
  };

  constructor(private http: HttpClient) { }
}
