import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';

@Component({
  selector: 'app-merchat-edit',
  templateUrl: './merchat-edit.component.html',
  styleUrls: ['./merchat-edit.component.css']
})
export class MerchatEditComponent implements OnInit {

  // merchantForm: FormGroup = new FormGroup({
  //   merchant: new FormControl(''),
  //   name: new FormControl(''),
  //   description: new FormControl(''),
  //   address: new FormControl(''),
  //   phone: new FormControl(''),
  //   openTime: new FormControl(),
  //   close: new FormControl(),
  // });
 merchantForm: FormGroup;
  id: number;

  constructor(private merchantService: MerchantService) {
    this.getMerchant();
  }

  ngOnInit() {
  }

  getMerchant() {
    const currenMerchant = JSON.parse(sessionStorage.getItem('merchant'));
    const merchantId = currenMerchant.id;
    return this.merchantService.findById(merchantId).subscribe(merchant => {
      this.merchantForm = new FormGroup({
        name: new FormControl(merchant.name),
        address: new FormControl(merchant.address),
        phone: new FormControl(merchant.phone),
        openTime: new FormControl(merchant.openTime),
        closeTime: new FormControl(merchant.closeTime),
        vsattp: new FormControl(merchant.vsattp),
        user: new FormControl(merchant.user.email),
      });
    });
  }

}
