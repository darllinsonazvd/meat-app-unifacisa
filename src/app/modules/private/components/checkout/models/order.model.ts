import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { AddressModel } from '../components/add-address/models/address.model';
import { PaymentMethodModel } from './payment-method.model';
import { CartItem } from 'src/app/core/models/cart-item.model';

export interface OrderModel {
  dateTime: Date;
  userId: string;
  restaurant: RestaurantModel | null;
  isDelivery: boolean;
  userAddress: AddressModel | null;
  paymentMethod: PaymentMethodModel;
  notes: string | null;
  products: CartItem[];
}
