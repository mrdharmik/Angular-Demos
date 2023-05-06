import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayCRUDComponent } from './form-array-crud.component';

describe('FormArrayCRUDComponent', () => {
  let component: FormArrayCRUDComponent;
  let fixture: ComponentFixture<FormArrayCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormArrayCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
