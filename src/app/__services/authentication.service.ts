import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private Url = 'http://localhost:5000/api/login';

  login(cred: any): Observable<any>{

    return this.http.post<any>(this.Url, cred)
  };

  isLoggedIn(user: any){
    if(localStorage.token){
      console.log("Wow this actually worked")
    }
    console.log("Nope, didnt work")
  }
  constructor(private http: HttpClient) { }
}
