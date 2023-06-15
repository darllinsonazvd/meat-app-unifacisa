import { ProductModel } from './product.model';

export class CartItem {
  constructor(public product: ProductModel, public quantity: number = 1) {}

  /**
   * @description Recuperar valor total do item do carrinho
   *
   * @author Darllinson Azevedo
   *
   * @returns Valor total do item do carrinho (preço * qtd)
   */
  public value(): number {
    return this.product.price * this.quantity;
  }
}
