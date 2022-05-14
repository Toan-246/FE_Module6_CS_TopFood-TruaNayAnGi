import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MerchantComponent} from './merchant.component';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: MerchantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
