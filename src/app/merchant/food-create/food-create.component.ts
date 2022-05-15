/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {DishService} from '../../service/dish/dish.service';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css']
})
export class FoodCreateComponent implements OnInit {
  dishForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  selectedImages: any;
  categoryList: Category[] = [];

  constructor(private dishService: DishService) { }

  ngOnInit() {
  }

}
