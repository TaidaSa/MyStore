import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesFormComponent } from './succes-form.component';

describe('SuccesFormComponent', () => {
  let component: SuccesFormComponent;
  let fixture: ComponentFixture<SuccesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
