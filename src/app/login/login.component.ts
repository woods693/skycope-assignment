import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../__services/authentication.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test: string = "Login Page";
  authentication: any
  user: any = {
    username: "",
    password: ""
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  onLogin(): void{
    this.auth.login(this.user).subscribe(data => {
      localStorage.setItem('token', (data as any).result)
      localStorage.setItem('username', (data as any).username)
      localStorage.setItem('privilege', (data as any).privilege)
      this.router.navigate(['/logging']);
    });
  };

  logging():  void{
    console.log("After Logging Out " + localStorage['token'] + " " + localStorage['username'] + " " + localStorage['privilege']);
  }

  ngOnInit(): void {

  };
}
