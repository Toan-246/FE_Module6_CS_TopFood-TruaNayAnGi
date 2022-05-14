import {Component, Input, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {CartDetail} from '../../model/cart-detail';
import {AuthService} from '../../service/auth/auth.service';
import {CartService} from '../../service/cart/cart.service';
import {Cart} from '../../model/cart';
import {NotificationService} from '../../service/notification/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {

  @Input()
  cart: Cart;

  @Input()
  showCheckoutButton: boolean;

  currentUser: any;
  loggedIn: boolean;

  constructor(private authService: AuthService,
              private cartService: CartService,
              private notificationService: NotificationService,
              private router: Router
  ) {

  }

  ngOnInit() {
    this.checkLoginAndGetInfo();
    this.getCurrentUserCart();
  }

  checkLoginAndGetInfo() {
    this.loggedIn = this.authService.isLoggedIn();
    if (this.loggedIn) {
      this.currentUser = this.authService.getCurrentUser();
    }
  }

  getCurrentUserCart() {
    this.cartService.getCurrentUserCart().subscribe(
      (response) => {
        this.cart = response as Cart;
      }
    );
  }

  increaseDishQuantity(dishId: number) {
    this.cartService.increaseDishQuantity(dishId).subscribe(
      (cartDto) => {
        this.cart = cartDto;
      }
    );
  }

  decreaseDishQuantity(dishId: number) {
    this.cartService.decreaseDishQuantity(dishId).subscribe(
      (cartDto) => {
        this.cart = cartDto;
      }
    );
  }

  checkOut() {
    if (this.cart.cartDetails.length === 0) {
      this.notificationService.showErrorMessage("Giỏ hàng trống <br> Hãy thêm hàng vào giỏ trước khi checkout!")
    } else {
      this.router.navigateByUrl('checkout');
    }
  }
}
