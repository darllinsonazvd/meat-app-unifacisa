import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductModel;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  /**
   * @description Recuperar quantidade do produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param product Produto para a quantidade ser recuperada
   * @returns Quantidade do produto no carrinho
   */
  getProductQty(product: ProductModel): number {
    return this.shoppingCartService.getItemQuantity(product);
  }

  /**
   * @description Adicionar produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param product Produto para ser adicionado
   */
  addProduct(product: ProductModel) {
    this.shoppingCartService.addProduct(product, true);
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
