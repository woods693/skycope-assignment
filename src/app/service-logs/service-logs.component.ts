import { Component, OnInit } from '@angular/core';
import { LogService } from '../__services/log.service';
import { interval, Subscription } from 'rxjs';
import { AuthenticationService } from '../__services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-service-logs',
  templateUrl: './service-logs.component.html',
  styleUrls: ['./service-logs.component.css']
})

export class ServiceLogsComponent implements OnInit {

  //Logs that will be shown in the logViewer
  logs: string[] = []; //main array with all the logs from the backend
  
  selected_service = "";
  filter_keyword = '';
  highlight_keyword = '';

  subscription: Subscription[] = [];

  //Function that will be calling on the Html get service
  getLogs(serviceNumber: string): void{
    //console.log(serviceNumber);
    this.logService.getLogs(serviceNumber).subscribe(data => {
      this.logs = this.logs.concat((data as any).entry);
      //console.log(this.logs)
    }); 
  };

  onLogout(): void{
    this.auth.logout().subscribe(data => {
      localStorage.setItem('token', (data as any).result)
      localStorage.setItem('logged-username', '')
      this.subscription.forEach(element => element.unsubscribe());
      this.router.navigate(['/login']);
    })
  };

  serviceSelector(selected: string): void{
    //console.log(localStorage['token'] + " " + localStorage['logged-username']);
    if (this.selected_service != selected){
      this.logs = [];
      this.selected_service = selected;
      //console.log(this.selected_service);
      this.subscription.push(interval(450).subscribe(() => this.getLogs(this.selected_service)));
    };
  };

  getlocalStorage(id: string): string{
    return localStorage[id]
  }

  logging():  void{
    console.log("After Logging in " + localStorage['token'] + " as user " + localStorage['username'] + " " + localStorage['privilege']);
  }

  constructor( private logService: LogService, private auth: AuthenticationService, private router: Router ) { }

  ngOnInit(): void {

  }

}
