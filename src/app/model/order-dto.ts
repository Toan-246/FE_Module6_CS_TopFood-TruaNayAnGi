import {Cart} from './cart';
import {DeliveryInfo} from './delivery-info';

export interface OrderDto {
  id?: number;
  cart?: Cart;
  deliveryInfo?: DeliveryInfo;
  restaurantNote?: string;
  shippingNote?: string;
}
