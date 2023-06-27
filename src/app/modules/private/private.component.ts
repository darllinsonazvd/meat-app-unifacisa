import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
})
export class PrivateComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    if (!this.shoppingCartService.products.length)
      this.shoppingCartService.foundProductsInLocalStorage();
  }
}
