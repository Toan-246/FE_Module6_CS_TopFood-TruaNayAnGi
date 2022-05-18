import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';
import {OrderDto} from '../../model/order-dto';
import {AuthService} from '../../service/auth/auth.service';
import {UseService} from '../../service/use/use.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  merchant: Merchant = {};
  userId: number;
  orders: OrderDto[] = [];

  constructor(private merchantService: MerchantService,
              private authService: AuthService,
  ) {
  }

  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => this.merchant = merchant
    );
  }

  ngOnInit() {
    this.getMerchant();
    this.getAllOrderByMerchant();
  }

  getAllOrderByMerchant() {
    this.userId = this.authService.getCurrentUserId();
    this.merchantService.getAllOrderByMerchantId(this.userId).subscribe(ordersBE => {
      this.orders = ordersBE as OrderDto[];
      for (let i = 0; i< this.orders.length; i++ ){
        if (this.orders[i].deliveryInfo == null){
          this.orders[i].deliveryInfo = {};
        }
      };
      console.log(this.orders);
    });
  }

}
