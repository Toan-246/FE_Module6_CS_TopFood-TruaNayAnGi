import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {};
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(() => {
      this.notificationService.showMessage('success', 'Đăng nhập thành công');
      this.router.navigateByUrl('/home');
    }, error => {
      this.notificationService.showMessage('error', error.error.message);
    });
  }
}
