import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MerchantRegisterService} from '../../service/merchant-register/merchant-register.service';
import {CustomValidatorService} from '../../service/custom-validator.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css']
})
export class MerchantRegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
      user: new FormControl(),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [this.customValidator.validatePhoneFn]),
      openTime: new FormControl(''),
      closeTime: new FormControl(''),
    }
  );

  constructor(private merchantRequestService: MerchantRegisterService,
              private customValidator: CustomValidatorService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  submitForm() {
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const userId = currentUser.id;

    const merchantRequest = {
      user: {
        id: userId
      },
      name: this.registerForm.get('name').value,
      description: this.registerForm.get('description').value,
      address: this.registerForm.get('address').value,
      phone: this.registerForm.get('phone').value,
      openTime: this.registerForm.get('openTime').value,
      closeTime: this.registerForm.get('closeTime').value
    };
    this.merchantRequestService.saveMerchantRequest(merchantRequest).subscribe(() => {
        this.notificationService.showMessage('success', 'Đã gửi yêu cầu, vui lòng chờ xét duyệt');
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log(error);
        this.notificationService.showMessage('error', 'Gửi yêu cầu thất bại');
      });
  }

  get userControl() {
    return this.registerForm.get('id');
  }

  get nameControl() {
    return this.registerForm.get('name');
  }

  get descriptionControl() {
    return this.registerForm.get('description');
  }

  get addressControl() {
    return this.registerForm.get('addressControl');
  }

  get phoneControl() {
    return this.registerForm.get('phone');
  }

  get openTime() {
    return this.registerForm.get('openTime');
  }

  get closeTime() {
    return this.registerForm.get('closeTime');
  }


}
