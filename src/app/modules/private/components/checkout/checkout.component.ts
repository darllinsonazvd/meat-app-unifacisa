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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderModel } from './models/order.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { Router } from '@angular/router';
import { RestaurantModel } from 'src/app/core/models/restaurant.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  public orderForm = new FormGroup({
    isDelivery: new FormControl<boolean>(true, {
      validators: [Validators.required],
    }),
    neighborhood: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    street: new FormControl<string>('', { validators: [Validators.required] }),
    number: new FormControl<string>(''),
    complement: new FormControl<string>(''),
    reference: new FormControl<string>(''),
    name: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    lastName: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    phoneNumber: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(11)],
    }),
    paymentMethod: new FormControl<PaymentMethodModel | null>(null, {
      validators: [Validators.required],
    }),
    notes: new FormControl<string>('', {}),
  });
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
  private restaurant: RestaurantModel | undefined;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private spinnerService: NgxSpinnerService,
    private restaurantsService: RestaurantsService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.foundProductsInLocalStorage();

    const address: AddressModel | null = JSON.parse(
      this.localStorageService.getItem(LocalStorageKeys.USER_ADDRESS) || 'null'
    );
    if (address) {
      this.userAddress = address;
      this.orderForm.patchValue({
        neighborhood: this.userAddress.neighborhood,
        street: this.userAddress.street,
        number: this.userAddress.number,
        complement: this.userAddress.complement,
        reference: this.userAddress.reference,
        name: this.userAddress.name,
        lastName: this.userAddress.lastName,
        phoneNumber: this.userAddress.phoneNumber,
      });
    }

    if (this.restaurantId) {
      this.getRestaurantDetails();
    }
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
   * @description Recuperar detalhes do restaurante
   *
   * @author Darllinson Azevedo
   */
  getRestaurantDetails() {
    this.restaurantsService
      .getRestaurantDetails(this.restaurantId || '')
      .subscribe((restaurant) => {
        this.restaurant = restaurant;
      });
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
    this.shoppingCartService.clear(true);
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

  /**
   * @description Enviar pedido do usuário para o restaurante
   *
   * @author Darllinson Azevedo
   */
  sendOrder() {
    this.spinnerService.show();

    const orderRaw = this.orderForm.getRawValue();
    const order: OrderModel = {
      dateTime: new Date(),
      userId: this.userAddress?.phoneNumber || '',
      restaurant: this.restaurant || null,
      isDelivery: orderRaw.isDelivery || false,
      userAddress: orderRaw.isDelivery
        ? {
            neighborhood: orderRaw.neighborhood || '',
            street: orderRaw.street || '',
            number: orderRaw.number,
            complement: orderRaw.complement,
            reference: orderRaw.reference,
            name: orderRaw.name || '',
            lastName: orderRaw.lastName || '',
            phoneNumber: orderRaw.phoneNumber || '',
          }
        : null,
      paymentMethod: orderRaw.paymentMethod || this.paymentMethods[0],
      notes: orderRaw.notes,
      products: this.products(),
    };

    this.restaurantsService.sendOrder(order).subscribe(() => {});
    this.spinnerService.hide();
    this.shoppingCartService.clear(false);
    this.router.navigate(['/private/order-placed']);
  }
}
