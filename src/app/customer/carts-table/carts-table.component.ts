import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {CartDetail} from '../../model/cart-detail';
import {AuthService} from '../../service/auth/auth.service';
import {CartService} from '../../service/cart/cart.service';
import {Cart} from '../../model/cart';
import {NotificationService} from '../../service/notification/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carts-table',
  templateUrl: './carts-table.component.html',
  styleUrls: ['./carts-table.component.css']
})
export class CartsTableComponent implements OnInit {

  @Input()
  carts: Cart[] = [];

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
    this.getCurrentUserCarts();
  }

  checkLoginAndGetInfo() {
    this.loggedIn = this.authService.isLoggedIn();
    if (this.loggedIn) {
      this.currentUser = this.authService.getCurrentUser();
    }
  }

  getCurrentUserCarts() {
    this.cartService.getCurrentUserCarts().subscribe(
      (response) => {
        this.carts = response as Cart[];
        console.log(this.carts);
      }
    );
  }

  increaseDishQuantity(cartId: number, dishId: number) {
    this.cartService.increaseDishQuantity(cartId, dishId).subscribe(
      (response) => {
        this.carts = response as Cart[];
      }
    );
  }

  decreaseDishQuantity(cartId: number, dishId: number) {
    this.cartService.increaseDishQuantity(cartId, dishId).subscribe(
      (response) => {
        this.carts = response as Cart[];
      }
    );
  }

  checkOut(merchantId: number) {
    this.router.navigateByUrl(`/home/checkout/${merchantId}`);
  }
}
