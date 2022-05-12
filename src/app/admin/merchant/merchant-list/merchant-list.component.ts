import {Component, OnInit} from '@angular/core';
import {MerchantService} from '../../../service/merchant/merchant.service';
import {Merchant} from '../../../model/merchant';

declare var $: any;

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {
  merchants: Merchant[] = [];
  id: number;

  constructor(private merchantService: MerchantService) {
  }

  ngOnInit() {
    this.getAllMerchant();
  }

  getAllMerchant() {
    this.merchantService.getAll().subscribe((merchantsFromBE) => {
      this.merchants = merchantsFromBE;
      console.log(this.merchants);
      $(function() {
        $('#merchant-list').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': false,
          'ordering': true,
          'info': true,
          'autoWidth': false,
        });
      });
    });
  }

}
