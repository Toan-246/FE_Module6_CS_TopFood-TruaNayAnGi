import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UseService} from '../../service/use/use.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User = {};
  currentUser: User = {};
  loggedIn: boolean;

  constructor(private userService: UseService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.checkLoginAndGetInfo();
  }

  checkLoginAndGetInfo() {
    this.loggedIn = this.authService.isLoggedIn();
    if (this.loggedIn) {
      this.currentUser = this.authService.getCurrentUser();
      this.userService.viewUserInfo(this.currentUser.id).subscribe(userBE=>{
        this.currentUser = userBE;
      })
    }
  }
}
