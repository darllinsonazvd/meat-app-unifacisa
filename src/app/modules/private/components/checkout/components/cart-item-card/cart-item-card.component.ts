import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart-item.model';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
})
export class CartItemCardComponent implements OnInit {
  @Input() products: CartItem[] = [];

  constructor() {}

  ngOnInit() {}
}
