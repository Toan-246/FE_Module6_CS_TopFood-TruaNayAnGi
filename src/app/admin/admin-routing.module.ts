import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {MerchantComponent} from './merchant/merchant.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./merchant/merchant.module').then(module => module.MerchantModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
