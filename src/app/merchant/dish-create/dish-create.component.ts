/* tslint:disable:no-trailing-whitespace prefer-const */
import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DishService} from '../../service/dish/dish.service';
import {NotificationService} from '../../service/notification/notification.service';
import {Merchant} from '../../model/merchant';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {MerchantService} from '../../service/merchant/merchant.service';

declare var $: any;
@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {
  dish: Dish = {};
  dishForm: FormGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categoryId: new FormControl(''),
    category: new FormControl('')
  });

  allCategories: Category[] = [];
  categories: Category[] = [];
  selectedFile: File[] = [];
  imageUrl: any;
  merchant: Merchant = {};

  constructor(private dishService: DishService,
              private notificationService: NotificationService,
              private categoryService: CategoryService,
              private router: Router,
              private authService: AuthService,
              private merchantService: MerchantService) { }

  ngOnInit() {
    this.getMerchant();
    this.getAllCategories();
  }

  get nameControl() {
    return this.dishForm.get('name');
  }

  get priceControl() {
    return this.dishForm.get('price');
  }

  get descriptionControl() {
    return this.dishForm.get('description');
  }

  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(merchantBE => {
      this.merchant = merchantBE;
      // console.log(this.merchant);
    });
    // console.log(this.merchant);
  }

  createDish() {
    if (this.dishForm.valid) {
      this.dish.name = this.dishForm.value.name;
      this.dish.price = this.dishForm.value.price;
      this.dish.description = this.dishForm.value.description;
      this.dish.categories = this.categories;
      this.dish.merchant = this.merchant;
      // console.log(this.dish.merchant);
      this.dishService.createDish(this.dish).subscribe(() => {
        this.notificationService.showMessage('success', 'Tạo món ăn thành công');
        console.log(this.dish);
        // this.router.navigateByUrl('/merchant');
      }, error => {
        console.log(error);
        this.notificationService.showMessage('error', error.error.message);
      });
    }
  }

  changeFile($event) {
    this.selectedFile = $event.target.files;
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(categoriesFromBE => {
      this.allCategories = categoriesFromBE as Category [];
    });
  }

  toggleCategory(categoryId) {
    let isChecked = $(`#cb-category-${categoryId}`).is(':checked');
    if (isChecked) {
      this.categories.push({id: categoryId});
    } else {
      for (let i = 0; i < this.categories.length; i++) {
        // tslint:disable-next-line:triple-equals
        if (this.categories[i].id == categoryId) {
          this.categories.splice(i, 1);
        }
      }
    }
  }
}
