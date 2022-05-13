import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';
import {UseService} from '../../service/use/use.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(private userService: UseService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  register() {
    if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      this.notificationService.showMessage('error','Mật khẩu nhập lại không đúng');
    }

    if (this.registerForm.valid) {
      const user = {
        email: this.registerForm.value.email,
        username: this.registerForm.value.email,
        password: this.registerForm.value.password,
        confirmPassword: this.registerForm.value.confirmPassword
      };
      this.userService.register(user).subscribe(() => {
        this.registerForm.reset();
        this.notificationService.showMessage('success', 'Đăng ký thành công')
        this.router.navigateByUrl('/login')
      })
    }
    else {
      this.notificationService.showMessage('error','Đăng ký thất bại')
    }

  }
}
