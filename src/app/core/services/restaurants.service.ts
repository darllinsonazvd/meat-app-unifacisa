import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantModel } from '../models/restaurant.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

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

  /**
   * @description Recuperar detalhes de um restaurante
   *
   * @author Darllinson Azevedo
   *
   * @param id Id do restaurante
   * @returns Detalhes de um restaurante
   */
  getRestaurantDetails(id: string): Observable<RestaurantModel> {
    return this.httpClient.get<RestaurantModel>(
      `${environment.apiUrl}/restaurants/${id}`
    );
  }

  /**
   * @description Recuperar produtos do restaurante
   *
   * @author Darllinson Azevedo
   *
   * @param id Id do restaurante
   * @returns Lista de produtos do restaurante
   */
  getRestaurantProducts(id: string): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(
      `${environment.apiUrl}/restaurants/${id}/menu`
    );
  }
}
