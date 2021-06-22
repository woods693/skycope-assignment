import { Component, OnInit } from '@angular/core';
//import { Log } from './log';
import { LogService } from '../log.service';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval } from 'rxjs';
//import * as internal from 'stream';


@Component({
  selector: 'app-service-logs',
  templateUrl: './service-logs.component.html',
  styleUrls: ['./service-logs.component.css']
})

export class ServiceLogsComponent implements OnInit {

  //Logs that will be shown in the logViewer
  logs: string[] = []; //main array with all the logs from the backend
  infinite_logs: string[] = [];
  selected_service = "";
  filter_keyword = '';
  highlight_keyword = '';
  throttle = 0;
  distance = 2;

  //Function that will be calling on the Html get service
  getLogs(serviceNumber: string): void{
    this.logService.getLogs(serviceNumber).subscribe(data => {
      this.logs = this.logs.concat((data as any).entry);
      //console.log(this.logs.length);
      //console.log(this.logs[0]);
      //this.infinite_logs = this.logs.slice(this.logs.length/2, this.logs.length - 1);
      //console.log(this.logs.slice(this.logs.length/2, this.logs.length - 1));
      //this.infinite_logs = this.logs
      //console.log(this.logs[1].split(" "));
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

  onScroll(floor: number, ceiling: number): void{
    //this.infinite_logs = this.infinite_logs.concat(this.logs.slice())

  };

  constructor( private logService: LogService ) { }

  ngOnInit(): void {

  }

}
