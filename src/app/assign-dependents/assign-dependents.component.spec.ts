import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDependentsComponent } from './assign-dependents.component';

describe('AssignDependentsComponent', () => {
  let component: AssignDependentsComponent;
  let fixture: ComponentFixture<AssignDependentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignDependentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
