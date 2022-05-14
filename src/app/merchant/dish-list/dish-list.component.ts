import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];
  user: User = {};

  constructor(private dishService: DishService,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(value => this.user = value);
  }

  get userId() {
    return this.user.id;
  }

  ngOnInit() {
    this.getAllMerchantDishes();
  }

  getAllMerchantDishes() {
    this.dishService.getAllMerchantDishes(this.userId);
  }
}
