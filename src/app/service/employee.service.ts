import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../dto/employee";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Array<Employee>>{
    return this.http.get<Array<Employee>>('http://localhost:8080/api/v1/employees');
  }

   saveEmployee(employee: Employee): Observable<string>{
    return this.http.post<string>('http://localhost:8080/api/v1/employee', employee);
  }

}
