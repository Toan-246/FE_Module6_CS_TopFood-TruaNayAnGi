import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMerchantComponent } from './navbar-merchant.component';

describe('NavbarMerchantComponent', () => {
  let component: NavbarMerchantComponent;
  let fixture: ComponentFixture<NavbarMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
