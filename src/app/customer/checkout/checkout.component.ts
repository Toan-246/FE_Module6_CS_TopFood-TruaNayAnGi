import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {AuthService} from '../../service/auth/auth.service';
import {CartService} from '../../service/cart/cart.service';
import {Cart} from '../../model/cart';
import {DeliveryInfo} from '../../model/delivery-info';
import {DeliveryInfoService} from '../../service/delivery-info/delivery-info.service';
import {OrderService} from '../../service/order/order.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  merchant: Merchant;
  currentUser: any;
  loggedIn: boolean;
  userId: number;
  cart: Cart;
  total: number;

  defaultDeliveryInfo: DeliveryInfo;
  otherDeliveryInfo: DeliveryInfo[] = [];
  restaurantNote: string;
  shippingNote: string;


  constructor(private authService: AuthService,
              private cartService: CartService,
              private deliveryInfoService: DeliveryInfoService,
              private orderService: OrderService,
              private router: Router,
              private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    document.getElementById('checkout-info-div').scrollIntoView(true);

    this.checkLoginAndGetInfo();

    this.getDeliveryInfo();
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

  getDeliveryInfo() {
    this.deliveryInfoService.getDefaultDeliveryInfo(this.authService.getCurrentUserId()).subscribe(
      (response) => this.defaultDeliveryInfo = response as DeliveryInfo
    );

    this.deliveryInfoService.getOtherDeliveryInfos(this.authService.getCurrentUserId()).subscribe(
      (response) => this.otherDeliveryInfo = response as DeliveryInfo[]
    );
  }

  changeCartFromChildComponent($event) {
    this.cart = $event;
  }

  editDeliveryInfo(deliveryInfoId: number) {
    console.log(`edit delivery info: id=${deliveryInfoId}`);
  }

  chooseDeliveryInfo(deliveryInfoId: number) {
    console.log(`make delivery info default:  id=${deliveryInfoId}`);
  }


  submitOrder() {
    const orderDto = {
      cart: this.cart,
      deliveryInfo: this.defaultDeliveryInfo
    };
    console.log(orderDto);
    this.orderService.createOrder(orderDto).subscribe(
      (order) => {
        this.router.navigateByUrl(`/order-success/${order.id}`);
      },
      error => {
        this.notificationService.showErrorMessage(`Không thể tạo đơn hàng: <br> ${error.error.message}`);
      }
    );
  }

}
