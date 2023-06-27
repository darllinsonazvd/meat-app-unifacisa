import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { ProductCardComponent } from './components/restaurant-details/components/product-card/product-card.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartItemCardComponent } from './components/checkout/components/cart-item-card/cart-item-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddAddressComponent } from './components/checkout/components/add-address/add-address.component';
import { NgxPhoneMaskBrModule } from 'ngx-phone-mask-br';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxPhoneMaskBrModule,
  ],
  declarations: [
    PrivateComponent,
    HomeComponent,
    RestaurantDetailsComponent,
    ProductCardComponent,
    UserProfileComponent,
    CheckoutComponent,
    CartItemCardComponent,
    AddAddressComponent,
    OrderPlacedComponent,
  ],
})
export class PrivateModule {}
