import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DeliveryInfoService {

  constructor(private httpClient: HttpClient) {
  }

  getDefaultDeliveryInfo(userId: number) {
    return this.httpClient.get(`${API_URL}/users/${userId}/default-delivery-info`);
  }

  getOtherDeliveryInfos(userId: number) {
    return this.httpClient.get(`${API_URL}/users/${userId}/other-delivery-infos`);
  }
}
