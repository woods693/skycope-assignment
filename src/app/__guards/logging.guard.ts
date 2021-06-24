import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../__services/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggingGuard implements CanActivate {
  
  canActivate(){
    if (this.auth.isLoggedIn()){
      return true;
    }else{
      window.alert("Not an autorized user, please login");
      this.router.navigate(['/login']);
      return false;
    };
  };
  
  constructor(private auth: AuthenticationService, private router: Router) {};
}
