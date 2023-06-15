import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-anchor',
  templateUrl: './checkout-anchor.component.html',
})
export class CheckoutAnchorComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  /**
   * @description Recuperar quantidade total de produtos no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @returns Quantidade total de produtos no carrinho
   */
  getTotalProductsQty(): number {
    return this.shoppingCartService.getTotalQuantity();
  }
}
