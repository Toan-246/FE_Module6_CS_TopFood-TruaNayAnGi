import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MerchantRegisterService} from '../../service/merchant-register/merchant-register.service';
import {CustomValidatorService} from '../../service/custom-validator.service';

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css']
})
export class MerchantRegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [this.customValidator.validatePhoneFn]),
      openTime: new FormControl(''),
      closeTime: new FormControl(''),
    }
  );

  constructor(private merchantRequestService: MerchantRegisterService,
              private customValidator: CustomValidatorService) {
  }

  ngOnInit() {
  }

  submitForm() {
    const merchantRequest = this.registerForm.value;
    this.merchantRequestService.saveMerchantRequest(merchantRequest).subscribe(() => {
      alert('Tạo thành công');
      this.registerForm.reset();
    }, error => alert('Tạo lỗi'));
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
