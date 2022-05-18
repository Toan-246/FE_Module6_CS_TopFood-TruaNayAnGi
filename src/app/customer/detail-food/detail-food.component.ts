import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {

  id: number;
  merchant: Merchant = {};
  dish: Dish = {};
  dishesForYou: Dish[] = [];

  countChanges = 0;

  constructor(private dishService: DishService,
              private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getMerchant();
    });
  }

  ngOnInit() {
    // document.getElementById('dish-image').scrollIntoView(true);
  }

  getMerchant() {
    this.dishService.getById(this.id).subscribe(
      (response) => {
        this.dish = response as Dish;
        this.merchant = this.dish.merchant;
      }
    );
  }

  refreshCarts($event) {
    this.countChanges = $event;
  }

}
