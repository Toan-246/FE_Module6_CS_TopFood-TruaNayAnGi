import {Cart} from './cart';
import {DeliveryInfo} from './delivery-info';
import {Merchant} from './merchant';

export interface OrderDto {
  id?: number;
  cart?: Cart;
  createDate?: string;
  deliveryInfo?: DeliveryInfo;
  merchant?: Merchant;
  restaurantNote?: string;
  shippingNote?: string;
}
