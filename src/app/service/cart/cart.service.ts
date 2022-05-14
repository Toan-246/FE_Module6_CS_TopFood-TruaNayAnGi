import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CartDetail} from '../../model/cart-detail';
import {Cart} from '../../model/cart';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) {
  }

  getCurrentUserCart() {
    return this.httpClient.get(`${API_URL}/carts`);
  }
}
