import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {FooterComponent} from './shared/footer/footer.component';
import { InfoComponent } from './shared/info/info.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
    declarations: [CustomerComponent, FooterComponent, InfoComponent, NavbarComponent],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
    ]
})
export class CustomerModule { }
