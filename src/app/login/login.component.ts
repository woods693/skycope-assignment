import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../__services/authentication.service'; 
import { User } from '../__models/user';


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

  constructor(private auth: AuthenticationService) { }

  onLogin(): void{
    this.auth.login(this.user).subscribe(data => {
      localStorage.setItem('token', (data as any).result)
    });
  };

  ngOnInit(): void {
  /*  
    let sampleUser: any = {
      username: 'user' as string,
      password: 'user1' as string
    };
    
    this.auth.login(sampleUser).subscribe(data => {
      this.authentication = data
      console.log(this.authentication)
    });
 */
  };
}
