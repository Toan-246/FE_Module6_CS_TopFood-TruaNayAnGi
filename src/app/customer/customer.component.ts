import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../service/category/category.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(
      (response) => this.categories = response as Category[]
    );
  }

}
