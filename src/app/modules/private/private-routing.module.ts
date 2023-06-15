import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'restaurant/:id',
        component: RestaurantDetailsComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
