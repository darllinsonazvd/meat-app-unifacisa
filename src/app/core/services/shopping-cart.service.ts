import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageKeys } from '../enums/local-storage-keys.enum';
import { CartItem } from '../models/cart-item.model';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public placeId: string | null = this.localStorageService.getItem(
    LocalStorageKeys.CART_ITEMS_PLACE_ID
  );

  public products: CartItem[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private toastService: ToastService,
    private router: Router
  ) {}

  /**
   * @description Limpar carrinho
   *
   * @author Darllinson Azevedo
   */
  clear(showToast?: boolean): void {
    this.products = [];
    this.localStorageService.storage(
      LocalStorageKeys.CART_ITEMS,
      JSON.stringify(this.products)
    );

    if (showToast) this.toastService.showSuccess(3000, 'Carrinho limpo!', '');
  }

  /**
   * @description Definir id do restaurante
   *
   * @author Darllinson Azevedo
   *
   * @param placeId Id do restaurante
   */
  setPlaceId(placeId: string) {
    this.placeId = placeId;
    this.localStorageService.storage(
      LocalStorageKeys.CART_ITEMS_PLACE_ID,
      this.placeId
    );
  }

  /**
   * @description Encontrar produtos no localStorage
   *
   * @author Darllinson Azevedo
   */
  foundProductsInLocalStorage() {
    const itemsInLocalStorage: CartItem[] = JSON.parse(
      this.localStorageService.getItem(LocalStorageKeys.CART_ITEMS) || '[]'
    );

    if (itemsInLocalStorage) {
      itemsInLocalStorage.forEach((item) =>
        this.addProduct(item.product, false, item.quantity)
      );
    }
  }

  /**
   * @description Procurar produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param product Produto a ser verificado
   * @returns 'Produto' se o produto for encontrado ou 'undefined' se o produto não existir
   */
  foundProductInCart(product: ProductModel): CartItem | undefined {
    let item: CartItem | undefined = this.products.find(
      (pCart) => pCart.product.id === product.id
    );

    return item;
  }

  /**
   * @description Adicionar produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param item Produto a ser adicionado
   * @param showToast Controle se o toast de confirmação deve ser emitido
   * @param quantity Quantidade do produto
   */
  addProduct(item: ProductModel, showToast: boolean, quantity?: number) {
    let foundItem = this.products.find((pCart) => pCart.product.id === item.id);

    if (foundItem) this.increaseQty(foundItem);
    else {
      if (quantity) this.products.push(new CartItem(item, quantity));
      else this.products.push(new CartItem(item));
    }

    if (showToast)
      this.toastService.showSuccess(3000, 'Item adicionado!', item.name);

    this.localStorageService.storage(
      LocalStorageKeys.CART_ITEMS,
      JSON.stringify(this.products)
    );
  }

  /**
   * @description Aumentar quantidade de um produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param item Produto para a quantidade ser aumentada
   * @param quantity Quantidade do produto
   */
  increaseQty(item: CartItem, quantity?: number) {
    item.quantity += quantity || 1;

    this.localStorageService.storage(
      LocalStorageKeys.CART_ITEMS,
      JSON.stringify(this.products)
    );
  }

  /**
   * @description Diminuir quantidade de um produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param item Produto para a quantidade ser diminuída
   */
  decreaseQty(item: ProductModel) {
    let foundProduct = this.foundProductInCart(item);

    if (foundProduct) {
      foundProduct.quantity -= 1;
      if (foundProduct.quantity === 0) this.removeItem(foundProduct);
    }

    this.localStorageService.storage(
      LocalStorageKeys.CART_ITEMS,
      JSON.stringify(this.products)
    );
  }

  /**
   * @description Remover produto do carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param item Produto a ser removido
   */
  removeItem(item: CartItem) {
    this.products.splice(this.products.indexOf(item), 1);

    this.toastService.showSuccess(
      3000,
      'Produto removido com sucesso',
      item.product.name
    );

    this.localStorageService.storage(
      LocalStorageKeys.CART_ITEMS,
      JSON.stringify(this.products)
    );
  }

  /**
   * @description Recuperar a quantidade de um produto no carrinho
   *
   * @author Darllinson Azevedo
   *
   * @param item Produto para a quantidade ser verificada
   * @returns Quantidade do produto
   */
  getItemQuantity(item: ProductModel): number {
    let foundProduct = this.foundProductInCart(item);

    return foundProduct ? foundProduct.quantity : 0;
  }

  /**
   * @description Recuperar quantidade total dos items do carrinho
   *
   * @author Darllinson Azevedo
   *
   * @returns Quantidade total dos items do carrinho
   */
  getTotalQuantity(): number {
    return this.products
      .map((pCart) => pCart.quantity)
      .reduce((prev, value) => prev + value, 0);
  }

  /**
   * @description Recuperar valor total do carrinho
   *
   * @author Darllinson Azevedo
   *
   * @returns Valor total do carrinho
   */
  getTotal(): number {
    return this.products
      .map((pCart) => pCart.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
