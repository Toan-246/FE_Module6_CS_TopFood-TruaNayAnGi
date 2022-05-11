import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Merchant} from '../../model/merchant';
import {Observable} from 'rxjs';

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
}
