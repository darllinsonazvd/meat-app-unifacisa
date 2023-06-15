import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart-item.model';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  public cartProducts: CartItem[] = this.shoppingCartService.products;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}
}
