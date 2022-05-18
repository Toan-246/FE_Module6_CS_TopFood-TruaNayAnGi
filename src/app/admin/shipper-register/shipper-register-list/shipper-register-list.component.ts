import {Component, OnInit} from '@angular/core';
import {ShipperRegister} from '../../../model/shipper-register';
import {ShipperRegisterService} from '../../../service/shipper-register/shipper-register.service';

@Component({
  selector: 'app-shipper-register-list',
  templateUrl: './shipper-register-list.component.html',
  styleUrls: ['./shipper-register-list.component.css']
})
export class ShipperRegisterListComponent implements OnInit {
  shipperRegisters: ShipperRegister[] = [];

  constructor(private shipperRegisterService: ShipperRegisterService) {
  }

  ngOnInit() {
    this.getAllShipperRegisterRequest()
  }

  getAllShipperRegisterRequest() {
    this.shipperRegisterService.getAllShipperRequest().subscribe((shipperRegisterFromBE) => {
      this.shipperRegisters = shipperRegisterFromBE;
      console.log(this.shipperRegisters);
    });
  }
}
