import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { AddressModel } from '../components/add-address/models/address.model';
import { PaymentMethodModel } from './payment-method.model';

export interface OrderModel {
  userId: string;
  restaurant: RestaurantModel | null;
  isDelivery: boolean;
  userAddress: AddressModel | null;
  paymentMethod: PaymentMethodModel;
  notes: string | null;
}
