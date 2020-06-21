import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageEmployeeeComponent } from './manage-employeee/manage-employeee.component';
import { AssignDepartmentsComponent } from './assign-departments/assign-departments.component';
import { AssignDependentsComponent } from './assign-dependents/assign-dependents.component';
import { AssignSupervisorComponent } from './assign-supervisor/assign-supervisor.component';
import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ManageEmployeeeComponent,
    AssignDepartmentsComponent,
    AssignDependentsComponent,
    AssignSupervisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
