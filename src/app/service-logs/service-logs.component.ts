import { Component, OnInit } from '@angular/core';

import { LogService } from '../__services/log.service';

import { interval } from 'rxjs';



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

  serviceSelector(selected: string): void{
    if (this.selected_service != selected){
      this.logs = [];
      this.selected_service = selected;
      //console.log(this.selected_service);
      interval(500).subscribe(() => this.getLogs(this.selected_service));
    };
  };

  constructor( private logService: LogService ) { }

  ngOnInit(): void {

  }

}
