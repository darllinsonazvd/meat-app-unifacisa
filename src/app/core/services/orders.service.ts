import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/modules/private/components/checkout/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Recuperar pedidos do sistema
   *
   * @author Darllinson Azevedo
   *
   * @returns Lista de pedidos do sistema
   */
  getOrders(): Observable<OrderModel[]> {
    return this.httpClient.get<OrderModel[]>(`${environment.apiUrl}/orders`);
  }
}
