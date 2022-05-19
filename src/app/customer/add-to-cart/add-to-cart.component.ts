import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from '../../model/dish';
import {Cart} from '../../model/cart';
import {DishService} from '../../service/dish/dish.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CartService} from '../../service/cart/cart.service';
import {NotificationService} from '../../service/notification/notification.service';
import {AuthService} from '../../service/auth/auth.service';
import {Coupon} from '../../model/coupon';
import {CouponService} from '../../service/coupon/coupon.service';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input()
  id: number;
  dish: Dish = {categories: [], merchant: {}};
  dishTotal: number;
  dishImage: string;
  quantity: number;
  coupons: Coupon[];

  refreshNum = 0;
  @Output() refreshCarts = new EventEmitter();

  constructor(private dishService: DishService,
              private cartService: CartService,
              private notificationService: NotificationService,
              private router: Router,
              private authService: AuthService,
              private couponService: CouponService
  ) {
  }

  ngOnInit() {
    document.getElementById('dish-image').scrollIntoView(true);
    this.quantity = 1;
    this.getDish();
    this.getCouponByDishId();
  }

  getCouponByDishId(){
    this.couponService.getCouponByDishId(this.id).subscribe(
      response => this.coupons = response as Coupon[]
    );
  }

  getDish() {
    this.dishService.getById(this.id).subscribe(
      (response) => {
        this.dish = response as Dish;
        this.dishImage = 'http://localhost:8080/image/' + this.dish.image;
        this.calculateDishTotal();
      }
    );
  }

  increaseQuantity() {
    this.quantity++;
    this.calculateDishTotal();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateDishTotal();
    }
  }



  calculateDishTotal() {
    this.dishTotal = this.dish.price * this.quantity;
  }

  addToCart() {
    if (!this.authService.isLoggedIn()) {
      document.getElementById('app-navbar-customer').scrollIntoView(true);
      this.notificationService.showErrorMessage('Hãy đăng nhập để có thể đặt món');
      return;
    }
    const cartDetail = {
      dish: this.dish,
      quantity: this.quantity
    };
    this.cartService.addDishToCart(cartDetail).subscribe(
      {
        next: (response) => {
          this.notificationService.showSuccessMessage(`Đã thêm vào giỏ hàng </br> (${this.dish.name}) x ${this.quantity}`);
        },
        error: (error) => {
          this.notificationService.showErrorMessage('Có lỗi xảy ra!');
        },
        complete: () => {
          this.quantity = 1;
          this.dishTotal = this.dish.price;
          this.refreshNum++;
          this.refreshCarts.emit(this.refreshNum);
        }
      }
    );
  }
}
