import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeService} from '../service/employee.service';
import {Employee} from '../dto/employee';

@Component({
  selector: 'app-manage-employeee',
  templateUrl: './manage-employeee.component.html',
  styleUrls: ['./manage-employeee.component.scss']
})
export class ManageEmployeeeComponent implements OnInit {


  employees: Employee[];
  employee: Employee = new Employee('', '', '', '', 0, '', '');

  constructor(private modalService: NgbModal, private employeeManagementService: EmployeeService) {
    this.employeeManagementService.getAllCustomers().subscribe(data => {
      this.employees = data;
    });
  }

  selectedEmployee: Employee = null;
  update = false;

  saveEmployee() {
    if (!this.update) {
      this.employees.push(this.employee);
    } else {
      for (const e of this.employees) {
        if (e.emp_id === this.employee.emp_id) {
          e.emp_fname = this.employee.emp_fname;
          e.emp_lname = this.employee.emp_lname;
          e.emp_mobile = this.employee.emp_mobile;
          break;
        }
      }
    }
    this.employee = new Employee('', '', '', '', 0, '', '');

    this.update = false;
    this.employee = null;
    // (<HTMLInputElement>this.tm.nativeElement).focus();

  }

  deleteEmployee(employee: Employee): void {

    if (confirm('Are you sure to delete this customer?')) {
      const index = this.employees.indexOf(employee);
      this.employees.splice(index, 1);
      this.selectedEmployee = null;
    }
  }


  selectCustomer(employee: Employee): void {
    this.selectedEmployee = employee;
    this.update = true;
    this.employee = new Employee(employee.emp_id, employee.emp_fname, employee.emp_lname, employee.emp_mobile, employee.salary, null, null);

  }

  clear(): void {
    this.update = false;
    this.employee = new Employee('', '', '', '', 0, '', '');

    this.selectedEmployee = null;
  }

  ngOnInit() {


  }

}
