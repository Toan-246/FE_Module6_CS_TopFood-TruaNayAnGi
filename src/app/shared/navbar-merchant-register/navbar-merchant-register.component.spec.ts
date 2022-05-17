import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMerchantRegisterComponent } from './navbar-merchant-register.component';

describe('NavbarMerchantRegisterComponent', () => {
  let component: NavbarMerchantRegisterComponent;
  let fixture: ComponentFixture<NavbarMerchantRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMerchantRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMerchantRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
