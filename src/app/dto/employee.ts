import { Department } from './department';

export class Employee {
  // tslint:disable-next-line:variable-name
  constructor(emp_id: string, emp_fname: string, emp_lname: string, emp_mobile: string, salary: number, param6, param7) {

  }

  'emp_id': string;
  'emp_fname': string;
  'emp_lname': string;
  'emp_mobile': string;
  'salary': number;
  'super_visor': Employee;
  'department ': Department;
  }
