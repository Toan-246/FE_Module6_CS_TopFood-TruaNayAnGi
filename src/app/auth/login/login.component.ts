import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(() => {
      this.notificationService.showMessage('success', 'Đăng nhập thành công');
      this.router.navigateByUrl('/home');
    }, error => {
      this.notificationService.showMessage('error', 'Đăng nhập thất bại');
    });
  }
}
