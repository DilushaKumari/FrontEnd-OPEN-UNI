import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEmployeeeComponent } from './manage-employeee/manage-employeee.component';
import { AssignDepartmentsComponent } from './assign-departments/assign-departments.component';
import { AssignDependentsComponent } from './assign-dependents/assign-dependents.component';
import { AssignSupervisorComponent } from './assign-supervisor/assign-supervisor.component';

const routes: Routes = [
  {path:'manage-employeee',component:ManageEmployeeeComponent},
  {path:'assign-department',component:AssignDepartmentsComponent},
  {path:'assign-dependents',component:AssignDependentsComponent},
  {path:'assign-supervisor',component:AssignSupervisorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
