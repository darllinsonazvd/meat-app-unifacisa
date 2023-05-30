import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { LoginService } from 'src/app/core/services/login.service';
import { RestaurantsService } from 'src/app/core/services/restaurants.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public restaurantsList: RestaurantModel[] = [];

  public slides: { src: string; alt: string }[] = [
    {
      src: 'assets/img/home/frete-gratis.svg',
      alt: 'Frete gratis nas suas compras',
    },
    { src: 'assets/img/home/drones.svg', alt: 'Entrega por drones' },
    { src: 'assets/img/home/coca.svg', alt: 'Propaganda coca-cola' },
  ];

  constructor(
    private spinnerService: NgxSpinnerService,
    private toastService: ToastService,
    private restaurantsService: RestaurantsService,
    private loginService: LoginService
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
        this.spinnerService.hide();
        this.toastService.showError(
          3000,
          'Erro ao carregar os estabelecimentos!',
          'Contate o admin.'
        );
      }
    );
  }

  /**
   * @description Desconectar usuário da aplicação
   *
   * @author Darllinson Azevedo
   */
  logout() {
    this.loginService.logout();
  }
}
