import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDeleteSnackBarComponent } from './class-delete-snack-bar.component';

describe('ClassDeleteSnackBarComponent', () => {
  let component: ClassDeleteSnackBarComponent;
  let fixture: ComponentFixture<ClassDeleteSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDeleteSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDeleteSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
