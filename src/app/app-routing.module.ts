import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ServiceLogsComponent } from './service-logs/service-logs.component';
import { LoggingGuard } from './__guards/logging.guard';
import { ReturnLoginGuard } from './__guards/return-login.guard';
//import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [ReturnLoginGuard]},
  { path: 'logging',
   component: ServiceLogsComponent, canActivate: [LoggingGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoggingGuard]
})
export class AppRoutingModule { }
