import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminModule} from './admin/admin.module';
import {CustomerModule} from './customer/customer.module';
import {MerchantModule} from './merchant/merchant.module';
import {TestModuleModule} from './test-module/test-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CustomerModule,
    MerchantModule,
    TestModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
