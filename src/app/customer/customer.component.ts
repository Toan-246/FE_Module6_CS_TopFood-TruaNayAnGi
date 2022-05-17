import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../service/category/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Dish} from '../model/dish';
import {DishService} from '../service/dish/dish.service';
import {SearchForm} from '../model/search-form';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  categories: Category[];
  q: string;
  searchForm: SearchForm = {};
  pageDishes: Dish[] = [];
  resultTitle: string;
  endOfPage: boolean;

  constructor(private categoryService: CategoryService,
              private dishService: DishService
  ) {
  }

  ngOnInit() {
    this.resetSearchForm();
    this.getAllCategories();
    this.getDishes();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(
      (response) => this.categories = response as Category[]
    );
  }

  doSearch() {
    this.resetSearchForm();
    this.searchForm.q = (document.getElementById('q') as HTMLInputElement).value;
    this.getDishes();
  }

  getResultTittle() {
    if (this.searchForm.q.length === 0) {
      this.resultTitle = `Toàn bộ danh sách`;
      return;
    }
    if (this.searchForm.q.length > 0) {
      this.resultTitle = `Kết quả tìm kiếm cho món: ${this.searchForm.q}`;
    }
  }

  getDishes() {
    this.dishService.searchDishes(this.searchForm).subscribe(
      dishes => {
        if (dishes.length === this.pageDishes.length) { // kết quả trả về không đổi
          this.endOfPage = true;
        }
        this.pageDishes = dishes;
      }
    );
    this.getResultTittle();
  }

  resetSearchForm() {
    this.searchForm.limit = 6;
    this.searchForm.q = '';
    this.searchForm.categories = [];
    this.endOfPage = false;
  }

  loadMore() {
    this.searchForm.limit += 6;
    this.getDishes();
  }
}
