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
  
  selected_service = '';
  filter_keyword = '';
  highlight_keyword = '';

  //Subscription array to hold the subscriptions from the interval, can be unsubscribed upon logout
  subscription: Subscription[] = [];

  getLogs(serviceNumber: string): void{
    this.logService.getLogs(serviceNumber).subscribe(data => {
      this.logs = this.logs.concat((data as any).entry);
    }); 
  };

  onLogout(): void{
    this.auth.logout().subscribe(data => {
      localStorage.setItem('token', (data as any).result)
      localStorage.setItem('logged-username', '')
      this.subscription.forEach(element => element.unsubscribe()); //unsubscribe all intervals subscriptions
      this.router.navigate(['/login']);
    })
  };

  serviceSelector(selected: string): void{
    if (this.selected_service != selected){
      this.logs = []; //resets log array when switching service
      this.selected_service = selected;
      this.subscription.push(interval(450).subscribe(() => this.getLogs(this.selected_service)));
    };
  };

  //grabs the privilege value from the localStorage for the html
  getlocalStorage(id: string): string{
    return localStorage[id]
  }

  //debugging
  logging():  void{
    console.log("Is logged in " + localStorage['token'] + " as " + localStorage['username'] + " with " + localStorage['privilege']);
  }

  constructor( private logService: LogService, private auth: AuthenticationService, private router: Router ) { }

  ngOnInit(): void {

  }

}
