import { Component, Input, OnInit } from '@angular/core';
import { OrderModel } from '../../../checkout/models/order.model';
import * as moment from 'moment';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
})
export class OrderCardComponent implements OnInit {
  @Input() public order: OrderModel | undefined;

  constructor() {}

  ngOnInit() {}

  /**
   * @description Formatar data do pedido
   *
   * @author Darllinson Azevedo
   *
   * @param date Data do pedido
   * @returns Data do pedido formatada no padrão "27 de junho de 2023 às 16:41"
   */
  formatDate(date: Date): string {
    moment.locale('pt-br');
    return moment(date).format('LLL');
  }
}
