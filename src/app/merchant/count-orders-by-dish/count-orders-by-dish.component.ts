import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {MerchantService} from '../../service/merchant/merchant.service';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-count-orders-by-dish',
  templateUrl: './count-orders-by-dish.component.html',
  styleUrls: ['./count-orders-by-dish.component.css']
})
export class CountOrdersByDishComponent implements OnInit {
  merchant: Merchant;
  constructor(private merchantService: MerchantService) { }

  ngOnInit() {
    this.getMerchant();
  }
  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => this.merchant = merchant
    );
  }
}
