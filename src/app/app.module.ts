import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServiceLogsComponent } from './service-logs/service-logs.component';

import { FilterPipe } from './__pipes/filter.pipe';
import { HighlightPipe } from './__pipes/highlight.pipe';

import { AuthenticationService } from './__services/authentication.service';
import { LogService } from './__services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    ServiceLogsComponent,
    FilterPipe,
    HighlightPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthenticationService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
