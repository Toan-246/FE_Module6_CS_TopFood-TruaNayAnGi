import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Dish} from '../../model/dish';
import {HttpClient} from '@angular/common/http';
import {SearchForm} from '../../model/search-form';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(`${API_URL}/dishes/page/$pageNumber`);
  }

  getById(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`${API_URL}/dishes/${id}`);
  }

  createMerchantDish(dish: Dish): Observable<Dish> {
    return this.httpClient.post(`${API_URL}/merchants/dish/create`, dish);
  }

  updateDish(id: number, dish: Dish): Observable<Dish> {
    return this.httpClient.put(`${API_URL}/dishes/${id}`, dish);
  }

  deleteDish(id: number): Observable<Dish> {
    return this.httpClient.delete(`${API_URL}/dishes/${id}`);
  }

  getMostPurchasedDishes() {
    return this.httpClient.get(`${API_URL}/dishes/most-purchased/8`);
  }

  getAllMerchantDishes(userId: number): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(`${API_URL}/merchants/user/${userId}/merchant/dishes`);
  }

  searchDishes(searchForm: SearchForm) {
    return this.httpClient.post<Dish[]>(`${API_URL}/dishes/search`, searchForm);
  }
}
