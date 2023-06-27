import { AddressModel } from '../components/add-address/models/address.model';
import { PaymentMethodModel } from './payment-method.model';

export interface OrderModel {
  userId: string;
  restaurantId: string;
  isDelivery: boolean;
  userAddress: AddressModel | null;
  paymentMethod: PaymentMethodModel;
  notes: string | null;
}
