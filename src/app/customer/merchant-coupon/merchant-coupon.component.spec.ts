import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCouponComponent } from './merchant-coupon.component';

describe('MerchantCouponComponent', () => {
  let component: MerchantCouponComponent;
  let fixture: ComponentFixture<MerchantCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
