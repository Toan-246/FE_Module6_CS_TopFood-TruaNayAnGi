import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {CartDetail} from '../../model/cart-detail';
import {CartService} from '../../service/cart/cart.service';
import {Cart} from '../../model/cart';
import {User} from '../../model/user';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent implements OnInit {

  currentUser: any;
  loggedIn: boolean;
  cart: CartDetail[] = [];
  total: number;

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
      }
    );
  }
}
