import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Merchant} from '../../model/merchant';
import {Observable} from 'rxjs';
import {Order} from '../../model/order';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(`${API_URL}/merchants`);
  }

  findById(id: number): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/merchants/${id}`);
  }

  updateActiveMerchant(id: number, merchant: Merchant): Observable<Merchant> {
    return this.http.put(`${API_URL}/merchants/${id}`, merchant);
  }

  updateMerchant(id: number, merchant: Merchant): Observable<Merchant> {
    return this.http.put(`${API_URL}/merchants/editMerchant/${id}`, merchant);
  }

  viewMerchantInfo(id: number): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/merchants/${id}`);
  }

  getCurrentUserMerchant(): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/merchants/my-merchant`);
  }
  getAllOrderByDishId (id: number): Observable<Order[]>{
    return this.http.get<Order[]>(`${API_URL}/orders/dishes/${id}`)
  }
}
