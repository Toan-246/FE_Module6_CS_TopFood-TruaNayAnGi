import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UseService} from '../../service/use/use.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = {};
  currentUser: any = {};
  loggedIn: boolean;

  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    fullName: new FormControl(''),
    address: new FormControl(''),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
  });

  constructor(private userService: UseService,
              private authService: AuthService) {
  }
  get email() {
    return this.userForm.get('email');
  }

  get username() {
    return this.userForm.get('username');
  }

  get fullName() {
    return this.userForm.get('fullName');
  }
  get address() {
    return this.userForm.get('address');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }
  get phone() {
    return this.userForm.get('phone');
  }
  ngOnInit() {
    this.checkLoginAndGetInfo()
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
