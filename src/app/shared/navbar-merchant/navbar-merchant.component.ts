import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-merchant',
  templateUrl: './navbar-merchant.component.html',
  styleUrls: ['./navbar-merchant.component.css']
})
export class NavbarMerchantComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router
              ) { }

  ngOnInit() {
  }


  logOut(){
    this.authService.logout();
    this.router.navigateByUrl("login");
  }
}
