import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../checkout/models/order.model';
import { OrdersService } from 'src/app/core/services/orders.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LocalStorageKeys } from 'src/app/core/enums/local-storage-keys.enum';
import { AddressModel } from '../checkout/components/add-address/models/address.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
})
export class MyOrdersComponent implements OnInit {
  public orders: OrderModel[] = [];

  constructor(
    private ordersService: OrdersService,
    private localStorageService: LocalStorageService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  /**
   * @description Recuperar pedidos do usuário
   *
   * @author Darllinson Azevedo
   */
  getOrders() {
    this.spinnerService.show();
    const address: AddressModel | null = JSON.parse(
      this.localStorageService.getItem(LocalStorageKeys.USER_ADDRESS) || 'null'
    );

    if (address) {
      this.ordersService.getOrders().subscribe((data) => {
        this.orders = data.filter(
          (order) => order.userAddress?.phoneNumber === address.phoneNumber
        );
        this.spinnerService.hide();
      });
    }

    this.spinnerService.hide();
  }
}
