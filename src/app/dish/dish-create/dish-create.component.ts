/* tslint:disable:no-trailing-whitespace */
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CategoryService} from 'src/app/service/category/category.service';

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {
  dishForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    price: new FormControl('', Validators.required),
    // categories: new FormControl('', Validators.requiredTrue)
    description: new FormControl(),
    image: new FormControl('', Validators.required)
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

}
