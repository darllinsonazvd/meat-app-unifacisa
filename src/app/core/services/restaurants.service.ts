import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantModel } from '../models/restaurant.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Recuperar restaurantes cadastrados no sistema
   *
   * @author Darllinson Azevedo
   *
   * @returns Lista de restaurantes cadastrados no sistema
   */
  getRestaurants(): Observable<RestaurantModel[]> {
    return this.httpClient.get<RestaurantModel[]>(
      `${environment.apiUrl}/restaurants`
    );
  }
}
