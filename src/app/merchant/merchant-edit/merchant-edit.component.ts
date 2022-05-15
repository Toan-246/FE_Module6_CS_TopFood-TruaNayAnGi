import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-merchant-edit',
  templateUrl: './merchant-edit.component.html',
  styleUrls: ['./merchant-edit.component.css']
})
export class MerchantEditComponent implements OnInit {
  merchant: Merchant = {};
  merchantForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern
    ('^[0](\\+\\d{1,3}\\s?)?((\\(\\d{3}\\)\\s?)|(\\d{3})(\\s|-?))(\\d{3}(\\s|-?))(\\d{3})(\\s?(([E|e]xt[:|.|]?)|x|X)(\\s?\\d+))?')]),
    openTime: new FormControl(),
    closeTime: new FormControl(),
  });


  get nameControl() {
    return this.merchantForm.get('name');
  }

  get descriptionControl() {
    return this.merchantForm.get('description');
  }

  get addressControl() {
    return this.merchantForm.get('address');
  }

  get phoneControl() {
    return this.merchantForm.get('phone');
  }

  get openTimeControl() {
    return this.merchantForm.get('openTime');
  }

  get closeTimeControl() {
    return this.merchantForm.get('closeTime');
  }

  constructor(private merchantService: MerchantService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getMerchant(id);
    });
  }

  ngOnInit() {
  }

  getMerchant(id) {
    this.merchantService.findById(id).subscribe(merchantBE => {
      this.merchant = merchantBE;
      this.nameControl.setValue(this.merchant.name);
      this.descriptionControl.setValue(this.merchant.description);
      this.addressControl.setValue(this.merchant.address);
      this.phoneControl.setValue(this.merchant.phone);
      this.openTimeControl.setValue(this.merchant.openTime);
      this.closeTimeControl.setValue(this.merchant.closeTime);
    });
  }

  editMerchant() {
    if (this.merchantForm.valid) {
      this.merchantService.updateMerchant(this.merchant.id, this.merchantForm.value).subscribe(() => {
        this.notificationService.showMessage('success', 'Cập nhật thành công!');
      }, error => {
        this.notificationService.showMessage('error', 'Cập nhật lỗi!');
      });
    } else {
      this.notificationService.showMessage('error', 'Cập nhật lỗi');
    }
  }
}
