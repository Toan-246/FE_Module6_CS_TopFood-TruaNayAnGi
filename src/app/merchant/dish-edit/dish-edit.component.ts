/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Dish} from '../../model/dish';
import {NotificationService} from '../../service/notification/notification.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MerchantService} from '../../service/merchant/merchant.service';
import {DishService} from '../../service/dish/dish.service';
import {AuthService} from '../../service/auth/auth.service';
import {Merchant} from '../../model/merchant';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';

declare var $: any;

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  dishId: number;
  dish: Dish = {};
  currentDishCate: Dish[] = [];
  merchant: Merchant = {};
  allCategories: Category[] = [];
  categoryId: number[] = [];
  dishForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(private notificationService: NotificationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private merchantService: MerchantService,
              private dishService: DishService,
              private authService: AuthService,
              private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getAllCategory(id);
    });
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

  // getMerchant() {
  //   this.merchantService.getCurrentUserMerchant().subscribe(merchantBE => {
  //     this.merchant = merchantBE;
  //   });
  // }

  getAllCategory(id) {
    this.categoryService.getAllCategory().subscribe(categoryBE => {
      this.allCategories = categoryBE as Category[];
      this.getCurrentDish(id);
    });
  }

  ngOnInit() {
    // this.getMerchant();
  }

  toggleCategory(cateId: number) {
    let isChecked = $(`#cb-category-${cateId}`).is(':checked');
    if (isChecked) {
      this.currentDishCate.push({id: cateId});
    } else {
      for (let i = 0; i < this.currentDishCate.length; i++) {
        if (this.currentDishCate[i].id == cateId) {
          this.currentDishCate.splice(i, 1);
        }
      }
    }
  }

  getCurrentDish(id) {
    this.dishService.getById(id).subscribe(currentDishBE => {
      this.dishForm.get('name').setValue(currentDishBE.name);
      this.dishForm.get('price').setValue(currentDishBE.price);
      this.dishForm.get('description').setValue(currentDishBE.description);
      this.merchant = currentDishBE.merchant;
      this.dishId = currentDishBE.id;
      this.currentDishCate = currentDishBE.categories;
      for (let cate of currentDishBE.categories) {
        this.categoryId.push(cate.id);
      }
    });
    // tất cả cate trong DB cái nào nằm trong danh sách cate của currentDish thì tick
    // kiểm tra 1 số number có nằm trong 1 mảng number không
    }

  editMerchantDish() {
    if (this.dishForm.valid) {
      this.dish.name = this.dishForm.value.name;
      this.dish.price = this.dishForm.value.price;
      this.dish.description = this.dishForm.value.description;
      this.dish.categories = this.currentDishCate;
      this.dish.merchant = this.merchant;
      this.dishService.updateDish(this.dishId, this.dish).subscribe(() => {
        this.notificationService.showMessage('success', 'Chỉnh sửa món ăn thành công');
        this.router.navigateByUrl('/merchant');
      }, error => {
        this.notificationService.showMessage('error', 'Đã xảy ra lỗi');
      });
    } else {
      this.notificationService.showMessage('error', 'Vui lòng kiểm tra lại thông tin nhập');
    }
  }
}
