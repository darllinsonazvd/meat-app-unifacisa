import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() public product!: ProductModel;
  @Input() public restaurantId!: string;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private toastService: ToastService
  ) {}

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
    const shoppingCartPlaceId = this.shoppingCartService.placeId;

    if (this.restaurantId !== shoppingCartPlaceId) {
      this.toastService.showError(
        3000,
        'Erro ao adicionar produto',
        'Para adicionar produtos de outro restaurante limpe seu carrinho'
      );
    } else {
      this.shoppingCartService.addProduct(product, true);
    }
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
