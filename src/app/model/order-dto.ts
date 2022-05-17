import {Cart} from './cart';
import {DeliveryInfo} from './delivery-info';
import {Merchant} from './merchant';
import {User} from './user';

export interface OrderDto {

  cart?: Cart;
  createDate?: string;
  deliveryInfo?: DeliveryInfo;
  merchant?: Merchant;
  restaurantNote?: string;
  shippingNote?: string;
  user?: User;
}
