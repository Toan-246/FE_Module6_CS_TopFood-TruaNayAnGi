import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {CartDetail} from '../../model/cart-detail';
import {AuthService} from '../../service/auth/auth.service';
import {CartService} from '../../service/cart/cart.service';
import {Cart} from '../../model/cart';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {

  merchant: Merchant;
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


  getCart() {
    this.cartService.getCurrentUserCart().subscribe(
      (response) => {
        this.cart = (response as Cart).cartDetails;
        this.total = (response as Cart).total;
        this.getMerchant();
      }
    );
  }

  getMerchant() {
    if (this.cart.length == 0){
      this.merchant = {
        name: '-',
        address: '-'
      };
    }
    this.merchant = this.cart[0].dish.merchant;
  }

}
