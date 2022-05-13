import {CartDetail} from './cart-detail';

export interface Cart {
  user?: any;
  cartDetails?: CartDetail[];
  total?: number;
}
