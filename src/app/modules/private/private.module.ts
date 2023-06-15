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

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PrivateComponent,
    HomeComponent,
    RestaurantDetailsComponent,
    ProductCardComponent,
    UserProfileComponent,
    CheckoutComponent,
  ],
})
export class PrivateModule {}
