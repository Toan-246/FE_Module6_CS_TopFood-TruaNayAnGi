import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserEditComponent} from './user-edit/user-edit.component';


@NgModule({
  declarations: [UserInfoComponent, UserEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
