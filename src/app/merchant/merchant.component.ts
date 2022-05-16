import { Component, OnInit } from '@angular/core';
import {Merchant} from '../model/merchant';
import {MerchantService} from '../service/merchant/merchant.service';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  merchant: Merchant;

  constructor(private merchantService: MerchantService) { }

  ngOnInit() {
    this.getMerchant();
  }

  getMerchant(){
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => this.merchant = merchant
    );
  }

}
