import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {FooterComponent} from './shared/footer/footer.component';
import { InfoComponent } from './shared/info/info.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [CustomerComponent, FooterComponent, InfoComponent, NavbarComponent, MerchantRegisterComponent],
    exports: [
        NavbarComponent
    ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CustomerModule { }
