import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CartService} from '../../service/cart/cart.service';
import {NotificationService} from '../../service/notification/notification.service';
import {Cart} from '../../model/cart';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {

  id: number;
  dish: Dish;
  dishTotal: number;
  dishImage: string;
  quantity: number;
  cart: Cart;

  constructor(private dishService: DishService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService,
              private notificationService: NotificationService,
              private router: Router,
              private authService: AuthService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit() {
    document.getElementById('dish-image').scrollIntoView(true);

    this.quantity = 1;
    this.getDish();

  }

  getCurrentUserCart() {
    this.cartService.getCurrentUserCart().subscribe(
      (response) => this.cart = response as Cart
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
          this.cart = response as Cart;
          this.notificationService.showSuccessMessage(`Đã thêm vào giỏ hàng </br> (${this.dish.name}) x ${this.quantity}`);
        },
        error: (error) => {
          this.notificationService.showErrorMessage('Có lỗi xảy ra!');
          console.log(error.error.message);
        }
      }
    );
  }
}
