import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDepartmentsComponent } from './assign-departments.component';

describe('AssignDepartmentsComponent', () => {
  let component: AssignDepartmentsComponent;
  let fixture: ComponentFixture<AssignDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
