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
  dish: Dish;
  dishImage: string;

  constructor(private dishService: DishService,
              private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDish();
    });
  }

  ngOnInit() {
  }

  getDish() {
    this.dishService.getById(this.id).subscribe(
      (response) => {
        this.dish = response as Dish;
        this.dishImage = 'http://localhost:8080/image/' + this.dish.image;
      }
    );
  }
}
