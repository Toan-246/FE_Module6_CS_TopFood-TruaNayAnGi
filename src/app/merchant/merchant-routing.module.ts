import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesComponent} from './dishes/dishes.component';
import {InfoComponent} from './info/info.component';
import {DishEditComponent} from './dish-edit/dish-edit.component';
import {DishCreateComponent} from './dish-create/dish-create.component';


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
    path: 'dish/create',
    component: DishCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
