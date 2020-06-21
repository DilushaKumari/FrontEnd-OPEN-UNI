import { Component } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import { ManageEmployeeeComponent } from './manage-employeee/manage-employeee.component';
import { EmployeeService } from './service/employee.service';
import {Employee} from './dto/employee';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
employees:Employee[];
  constructor(private employeeManagementService :EmployeeService){}
  ngOnInit(){
   
    
  }
}
