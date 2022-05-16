import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FoodListComponent} from './food-list/food-list.component';
import {DishesComponent} from './dishes/dishes.component';
import {InfoComponent} from './info/info.component';


const routes: Routes = [

  {
    path: '',
    component: DishesComponent
  },
  {
    path: 'info',
    component: InfoComponent
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
