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

  categories: Category[] = [];
  selectedCategories: Category[] = [];
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
      (response) => {
        this.categories = response as Category[];
      }
    );
  }

  submitSearchForm() {
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
    console.clear();
    console.log(this.searchForm);
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

  toggleCheckbox(categoryId: number) {
    const index: number = this.findInSelectedCategory(categoryId);
    if (index === -1) {
      this.addToSelectedCategory(categoryId);
    } else {
      this.removeFromSelectedCategory(index);
    }
    this.searchForm.categories = this.selectedCategories;
    this.endOfPage = false;
    this.getDishes();
  }

  findInSelectedCategory(categoryId: number) {
    for (let i = 0; i < this.selectedCategories.length; i++) {
      if (categoryId === this.selectedCategories[i].id) {
        return i;
      }
    }
    return -1;
  }

  addToSelectedCategory(categoryId: number) {
    this.selectedCategories.push({id: categoryId});
  }

  removeFromSelectedCategory(index: number) {
    this.selectedCategories.splice(index, 1);
  }
}
