import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent implements OnInit {

  user: any;
  loggedIn: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    let userId;
    if (currentUser) {
      userId = currentUser.id;
    }

    this.loggedIn = !!(currentUser && userId);
  }

  logout(){
    this.authService.logout();
    this.getCurrentUser();
  }
}
