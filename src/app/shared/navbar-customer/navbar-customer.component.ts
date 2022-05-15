import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {CartDetail} from '../../model/cart-detail';
import {CartService} from '../../service/cart/cart.service';
import {Cart} from '../../model/cart';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent implements OnInit, OnChanges {

  @Input() refreshNum;

  currentUser: any;
  loggedIn: boolean;
  cart: CartDetail[] = [];
  total: number;

  isCartEmpty: boolean;

  constructor(private authService: AuthService,
              private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.checkLoginAndGetInfo();
  }

  checkLoginAndGetInfo() {
    this.loggedIn = this.authService.isLoggedIn();
    if (this.loggedIn) {
      this.currentUser = this.authService.getCurrentUser();
      this.getCart();
    }
  }

  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }

  getCart() {
    this.cartService.getCurrentUserCart().subscribe(
      (response) => {
        this.cart = (response as Cart).cartDetails;
        this.isCartEmpty = this.cart.length === 0;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getCart();
  }
}
