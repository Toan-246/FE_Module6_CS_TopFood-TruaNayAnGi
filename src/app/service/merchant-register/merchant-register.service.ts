import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {MerchantRegister} from '../../model/merchant-register';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class MerchantRegisterService {

  constructor(private http: HttpClient) {
  }

  saveMerchantRequest(merchantRegister): Observable<MerchantRegister> {
    return this.http.post<MerchantRegister>(API_URL + '/registerMerchant', merchantRegister);
  }
}
