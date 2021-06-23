import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../__services/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReturnLoginGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router){}
  canActivate(){
    if (!this.auth.isLoggedIn()){
      return true;
    }else{
      window.alert("Please logout before returning to Login page");
      this.router.navigate(['/logging']);
      return false;
    }
  }
  
}
