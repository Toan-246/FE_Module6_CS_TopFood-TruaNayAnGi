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

  constructor(private authService: AuthService,
              private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    let userId;
    if (this.currentUser) {
      userId = this.currentUser.id;
    }

    this.loggedIn = !!(this.currentUser && userId);
    if (this.loggedIn) {
      this.getCart();
    }
  }

  logout() {
    this.authService.logout();
    this.getCurrentUser();
  }

  getCart() {
    this.cartService.getCurrentUserCart().subscribe(
      (response) => this.cart = (response as Cart).cartDetails
    );
  }
}
