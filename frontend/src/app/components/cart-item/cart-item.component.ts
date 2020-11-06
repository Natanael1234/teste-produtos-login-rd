import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() item: Product;
  @Output() onAddToChart = new EventEmitter<{ item: Product, quantity: number }>();

  constructor() { }

  fireOnAddProductEvent(item: Product, quantity: number) {
    this.onAddToChart.emit({ item, quantity });
  }

}
