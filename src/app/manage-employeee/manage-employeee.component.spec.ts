import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeeeComponent } from './manage-employeee.component';

describe('ManageEmployeeeComponent', () => {
  let component: ManageEmployeeeComponent;
  let fixture: ComponentFixture<ManageEmployeeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployeeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
