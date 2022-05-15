import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MerchantEditComponent} from './merchant-edit/merchant-edit.component';
import {FoodListComponent} from './food-list/food-list.component';


const routes: Routes = [
  {
    path: '',
    component: FoodListComponent
  },
  {
    path: 'edit',
    component: MerchantEditComponent
  },
  {
    path: ':id/edit',
    component: FoodListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
