import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesComponent} from './dishes/dishes.component';
import {InfoComponent} from './info/info.component';
import {ListOrderByDishComponent} from './list-order-by-dish/list-order-by-dish.component';
import {DishEditComponent} from './dish-edit/dish-edit.component';
import {DishCreateComponent} from './dish-create/dish-create.component';
import {OrderListComponent} from './order-list/order-list.component';
import {CountOrdersByDishComponent} from './count-orders-by-dish/count-orders-by-dish.component';
import {CountOrdersByUserComponent} from './count-orders-by-user/count-orders-by-user.component';


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
    component: DishEditComponent
  },
  {
    path: 'dishes/:id/orders',
    component: ListOrderByDishComponent
  },
  {
    path: 'dish/create',
    component: DishCreateComponent
  },
  {
    path: 'orders',
    component: OrderListComponent
  }
  ,
  {
    path: ':id/orders/dishes',
    component: CountOrdersByDishComponent
  },
  {
    path: ':id/orders/users',
    component: CountOrdersByUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
