import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../../model/dish';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/dishes/page/$pageNumber`);
  }

  getById(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${API_URL}/dishes/${id}`);
  }

  createDish(dish: Dish): Observable<Dish> {
    return this.http.post(`${API_URL}/dishes`, dish);
  }

  updateDish(id: number, dish: Dish): Observable<Dish> {
    return this.http.put(`${API_URL}/dishes/${id}`, dish);
  }

  deleteDish(id: number): Observable<Dish> {
    return this.http.delete(`${API_URL}/dishes/${id}`);
  }
}
