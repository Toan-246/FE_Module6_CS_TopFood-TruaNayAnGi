import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';
import {OrderByQueryDto} from '../../model/order-by-query-dto';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {User} from '../../model/user';
import {UseService} from '../../service/use/use.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
  merchantId: number;
  merchant: Merchant = {};
  orders: OrderByQueryDto[] = [];
  startDate: any;
  endDate: any;
  totalRevenue: number = 0;

  constructor(private merchantService: MerchantService,
              private activatedRoute: ActivatedRoute,
              private userService: UseService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.merchantId = + paramMap.get('id');
      this.getAllOrders();
    });
  }

  ngOnInit() {
    this.getMerchant();
    this.startDate = new Date();
    this.endDate = new Date();
  }
  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => this.merchant = merchant
    );
  }

  getAllOrders(){
    this.startDate = (<HTMLInputElement> document.getElementById('startDate')).value;
    this.endDate = (<HTMLInputElement> document.getElementById('endDate')).value;

    this.merchantService.getAllOrdersByMerchantIdInPeriod(this.merchantId, this.startDate, this.endDate).subscribe(ordersBE => {
      this.orders = ordersBE;
      for (const order of this.orders) {
        this.totalRevenue += (order.total_Fee - order.service_Fee - order.shipping_Fee)
      }
    });


    console.log(this.startDate, this.endDate);
  }
}
