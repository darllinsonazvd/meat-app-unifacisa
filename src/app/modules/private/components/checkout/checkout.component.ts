import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart-item.model';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

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
}
