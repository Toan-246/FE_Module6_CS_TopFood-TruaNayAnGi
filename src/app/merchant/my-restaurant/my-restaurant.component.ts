import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';

@Component({
  selector: 'app-my-restaurant',
  templateUrl: './my-restaurant.component.html',
  styleUrls: ['./my-restaurant.component.css']
})
export class MyRestaurantComponent implements OnInit {

  merchant: Merchant;

  constructor(private merchantService: MerchantService) { }

  ngOnInit() {
    this.getMerchant();
  }

  getMerchant(){
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => this.merchant = merchant
    )
  }
}
