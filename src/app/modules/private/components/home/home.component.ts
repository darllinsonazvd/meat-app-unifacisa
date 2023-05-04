import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { RestaurantsService } from 'src/app/core/services/restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public restaurantsList: RestaurantModel[] = [];

  constructor(
    private spinnerService: NgxSpinnerService,
    private restaurantsService: RestaurantsService
  ) {}

  ngOnInit() {
    this.getRestaurantsList();
  }

  /**
   * @description Recuperar restaurantes cadastrados no sistema
   *
   * @author Darllinson Azevedo
   */
  getRestaurantsList() {
    this.spinnerService.show();

    this.restaurantsService.getRestaurants().subscribe(
      (data) => {
        this.restaurantsList = data;
        this.spinnerService.hide();
      },
      (err) => {
        console.log(err);
        this.spinnerService.hide();
      }
    );
  }
}
