import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserEditComponent} from './user/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'merchant',
    loadChildren: () => import('./merchant/merchant.module').then(module => module.MerchantModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'dish',
    loadChildren: () => import('./dish/dish.module').then(module => module.DishModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
