import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';
import {MerchantService} from '../../service/merchant/merchant.service';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];
  user: User = {};
  userId: number;

  constructor(private dishService: DishService,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(value => this.user = value);
  }

  ngOnInit() {
    this.getAllMerchantDishes();
  }

  getAllMerchantDishes() {
    this.userId = this.authService.getCurrentUserId();
    this.dishService.getAllMerchantDishes(this.userId).subscribe(dishesFromBE => {
      this.dishes = dishesFromBE;
      console.log(this.dishes);
    });
  }
}
