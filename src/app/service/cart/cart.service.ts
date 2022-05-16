import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CartDetail} from '../../model/cart-detail';
import {Cart} from '../../model/cart';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService
              ) {
  }

  getCurrentUserCarts() {
    const currentUserId = this.authService.getCurrentUserId();
    return this.httpClient.get(`${API_URL}/carts/users/${currentUserId}`);
  }

  addDishToCart(cartDetail: CartDetail) {
    return this.httpClient.post(`${API_URL}/carts/add-dish-to-cart`, cartDetail);
  }

  increaseDishQuantity(dishId: number) {
    return this.httpClient.get(`${API_URL}/carts/increase-dish-quantity/${dishId}`);
  }

  decreaseDishQuantity(dishId: number) {
    return this.httpClient.get(`${API_URL}/carts/decrease-dish-quantity/${dishId}`);
  }
}
