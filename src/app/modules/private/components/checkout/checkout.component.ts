import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart-item.model';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { PaymentMethodModel } from './models/payment-method.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestaurantsService } from 'src/app/core/services/restaurants.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LocalStorageKeys } from 'src/app/core/enums/local-storage-keys.enum';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddressModel } from './components/add-address/models/address.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  public paymentMethods: PaymentMethodModel[] = [
    {
      id: 1,
      name: 'american',
      imgUrl: 'assets/img/methods/american.svg',
    },
    {
      id: 2,
      name: 'cirrus',
      imgUrl: 'assets/img/methods/cirrus.svg',
    },
    {
      id: 3,
      name: 'dinheiro',
      imgUrl: 'assets/img/methods/dinheiro.svg',
    },
    {
      id: 4,
      name: 'hiper',
      imgUrl: 'assets/img/methods/hiper.svg',
    },
    {
      id: 5,
      name: 'hipercard',
      imgUrl: 'assets/img/methods/hipercard.svg',
    },
    {
      id: 6,
      name: 'maestro',
      imgUrl: 'assets/img/methods/maestro.svg',
    },
    {
      id: 7,
      name: 'mastercard',
      imgUrl: 'assets/img/methods/master.svg',
    },
    {
      id: 8,
      name: 'visa',
      imgUrl: 'assets/img/methods/visa.svg',
    },
  ];
  public userAddress: AddressModel | undefined;

  private restaurantId: string | null = this.localStorageService.getItem(
    LocalStorageKeys.CART_ITEMS_PLACE_ID
  );

  constructor(
    private shoppingCartService: ShoppingCartService,
    private spinnerService: NgxSpinnerService,
    private restaurantsService: RestaurantsService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.foundProductsInLocalStorage();

    const address: AddressModel | null = JSON.parse(
      this.localStorageService.getItem(LocalStorageKeys.USER_ADDRESS) || 'null'
    );
    if (address) this.userAddress = address;
  }

  /**
   * @description Recuperar lista de produtos do localStorage
   *
   * @author Darllinson Azevedo
   */
  foundProductsInLocalStorage() {
    if (!this.products().length)
      this.shoppingCartService.foundProductsInLocalStorage();
  }

  /**
   * @description Recuperar lista de produtos no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @returns Lista de produtos no carrinho
   */
  products(): CartItem[] {
    return this.shoppingCartService.products;
  }

  /**
   * @description Limpar carrinho de compras
   *
   * @author Darllinson Azevedo
   */
  clearShoppingCart() {
    this.shoppingCartService.clear();
  }

  /**
   * @description Recuperar valor total do carrinho de compras
   *
   * @author Darllinson Azevedo
   *
   * @returns Valor total do carrinho de compras
   */
  getSubtotal(): number {
    return this.shoppingCartService.getTotal();
  }
}
