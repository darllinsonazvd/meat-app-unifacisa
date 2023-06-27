import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart-item.model';
import { ProductModel } from 'src/app/core/models/product.model';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
})
export class CartItemCardComponent implements OnInit {
  @Input() products: CartItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  /**
   * @description Adicionar produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param product Produto para ser adicionado
   */
  addProduct(product: ProductModel) {
    this.shoppingCartService.addProduct(product, false);
  }

  /**
   * @description Diminuir quantidade do produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param product Produto para a quantidade ser diminuída
   */
  decreaseQty(product: ProductModel) {
    this.shoppingCartService.decreaseQty(product);
  }
}
