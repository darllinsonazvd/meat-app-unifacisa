import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductModel;

  constructor() {}

  ngOnInit() {}
}
