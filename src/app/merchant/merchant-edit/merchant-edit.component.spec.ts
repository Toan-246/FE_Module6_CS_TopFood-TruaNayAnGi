import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchatEditComponent } from './merchant-edit.component';

describe('MerchatEditComponent', () => {
  let component: MerchatEditComponent;
  let fixture: ComponentFixture<MerchatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
