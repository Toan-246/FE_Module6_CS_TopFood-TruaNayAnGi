import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UseService} from '../../service/use/use.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User = {};

  constructor(private userService: UseService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(value => this.user = value);
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getUserInfo(id);
    });
  }

  ngOnInit() {
  }

  private getUserInfo(id) {
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }
}
