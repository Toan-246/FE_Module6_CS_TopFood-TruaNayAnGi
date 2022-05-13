import {Component, OnInit} from '@angular/core';
import {MerchantRegister} from '../../../model/merchant-register';
import {MerchantRegisterService} from '../../../service/merchant-register/merchant-register.service';

@Component({
  selector: 'app-merchant-register-list',
  templateUrl: './merchant-register-list.component.html',
  styleUrls: ['./merchant-register-list.component.css']
})
export class MerchantRegisterListComponent implements OnInit {
  merchantRegisters: MerchantRegister[] = [];

  constructor(private merchantRegisterService: MerchantRegisterService) {
  }

  ngOnInit() {
    this.getAllMerchantRegisterRequest();
  }

  getAllMerchantRegisterRequest() {
    this.merchantRegisterService.getAllMerchantRequest().subscribe((merchantRegisterFromBE) => {
      this.merchantRegisters = merchantRegisterFromBE;
      console.log(this.merchantRegisters);
    });
  }
}
