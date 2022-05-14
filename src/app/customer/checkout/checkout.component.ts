import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {CartDetail} from '../../model/cart-detail';
import {AuthService} from '../../service/auth/auth.service';
import {CartService} from '../../service/cart/cart.service';
import {Cart} from '../../model/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  merchant: Merchant;
  currentUser: any;
  loggedIn: boolean;
  cart: Cart;
  total: number;

  constructor(private authService: AuthService,
              private cartService: CartService
  ) {
  }

  ngOnInit() {
    document.getElementById('select-address-div').scrollIntoView(true);

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
        this.cart = (response as Cart);
        this.merchant = this.cart.merchant;
      }
    );
  }

}
