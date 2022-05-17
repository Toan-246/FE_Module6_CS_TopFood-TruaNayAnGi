import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cart} from '../../model/cart';
import {AuthService} from '../../service/auth/auth.service';
import {CartService} from '../../service/cart/cart.service';
import {NotificationService} from '../../service/notification/notification.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart-table-checkout',
  templateUrl: './cart-table-checkout.component.html',
  styleUrls: ['./cart-table-checkout.component.css']
})
export class CartTableCheckoutComponent implements OnInit {


  @Input()
  cart: Cart;

  @Input()
  showCheckoutButton: boolean;

  @Input()
  showRestaurantNote: boolean;

  @Output()
  changeCart = new EventEmitter();

  currentUser: any;
  loggedIn: boolean;

  constructor(private authService: AuthService,
              private cartService: CartService,
              private notificationService: NotificationService,
              private router: Router,
  ) {

  }

  ngOnInit() {
  }


}
