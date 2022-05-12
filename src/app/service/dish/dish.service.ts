import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient: HttpClient) {
  }

  getMostPurchasedDishes() {
    return this.httpClient.get(`${API_URL}/dishes/most-purchased/8`);
  }
}
