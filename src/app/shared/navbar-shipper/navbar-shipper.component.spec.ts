import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarShipperComponent } from './navbar-shipper.component';

describe('NavbarShipperComponent', () => {
  let component: NavbarShipperComponent;
  let fixture: ComponentFixture<NavbarShipperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarShipperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarShipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
