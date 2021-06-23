import { Component, OnInit } from '@angular/core';
import { LogService } from '../__services/log.service';
import { interval } from 'rxjs';
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

  //Function that will be calling on the Html get service
  getLogs(serviceNumber: string): void{
    this.logService.getLogs(serviceNumber).subscribe(data => {
      this.logs = this.logs.concat((data as any).entry);
    }); 
  };

  onLogout(): void{
    this.auth.logout().subscribe(data => {
      localStorage.setItem('token', (data as any).result)
      localStorage.setItem('logged-username', '')
      this.router.navigate(['/login']);
    })
  };

  serviceSelector(selected: string): void{
    console.log(localStorage['token'] + " " + localStorage['logged-username']);
    if (this.selected_service != selected){
      this.logs = [];
      this.selected_service = selected;
      //console.log(this.selected_service);
      interval(500).subscribe(() => this.getLogs(this.selected_service));
    };
  };

  logging():  void{
    console.log("After Logging in " + localStorage['token'] + " as user " + localStorage['username']);
  }

  constructor( private logService: LogService, private auth: AuthenticationService, private router: Router ) { }

  ngOnInit(): void {

  }

}
