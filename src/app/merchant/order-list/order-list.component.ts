import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  merchant: Merchant;
  constructor(private merchantService: MerchantService) { }

  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => this.merchant = merchant
    );
  }
  ngOnInit() {
    this.getMerchant();
  }

}
