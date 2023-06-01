import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RestaurantDetailsComponent } from './components/place-details/restaurant-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PrivateComponent, HomeComponent, RestaurantDetailsComponent],
})
export class PrivateModule {}
