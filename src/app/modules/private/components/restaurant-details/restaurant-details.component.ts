import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductModel } from 'src/app/core/models/product.model';
import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { RestaurantsService } from 'src/app/core/services/restaurants.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
})
export class RestaurantDetailsComponent implements OnInit {
  public restaurantId: string = this.activatedRoute.snapshot.params['id'];

  public restaurant: RestaurantModel | undefined;
  public products: ProductModel[] = [];
  public restaurantRating!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinnerService: NgxSpinnerService,
    private restaurantsService: RestaurantsService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.getRestaurantDetails();
    this.getProducts();

    if (!this.shoppingCartService.products.length) {
      this.shoppingCartService.setPlaceId(this.restaurantId);
    }
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

        this.spinnerService.hide();
      });
  }

  /**
   * @description Recuperar produtos do restaurante
   *
   * @author Darllinson Azevedo
   */
  getProducts() {
    this.spinnerService.show();

    this.restaurantsService
      .getRestaurantProducts(this.restaurantId)
      .subscribe((products) => {
        this.products = products;

        this.spinnerService.hide();
      });
  }
}
