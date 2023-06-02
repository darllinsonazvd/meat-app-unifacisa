import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { RestaurantsService } from 'src/app/core/services/restaurants.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
})
export class RestaurantDetailsComponent implements OnInit {
  private restaurantId: string = this.activatedRoute.snapshot.params['id'];

  public restaurant!: RestaurantModel;
  public restaurantRating!: number;
  public loaded: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinnerService: NgxSpinnerService,
    private restaurantsService: RestaurantsService
  ) {}

  ngOnInit() {
    this.getRestaurantDetails();
  }

  /**
   * @description Recuperar detalhes do restaurante
   *
   * @author Darllinson Azevedo
   */
  getRestaurantDetails() {
    this.spinnerService.show();

    this.restaurantsService
      .getRestaurantDetails(this.restaurantId)
      .subscribe((restaurant) => {
        this.restaurant = restaurant;
        this.restaurantRating = Math.floor(this.restaurant.rating);
        this.loaded = true;

        this.spinnerService.hide();

        console.log(restaurant);
      });
  }
}
