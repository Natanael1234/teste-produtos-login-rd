import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product: Product;
  @Output() onAddToChart = new EventEmitter();
  @Output() onRemoveFromChart = new EventEmitter();

  constructor() { }

  fireOnAddToChartEvent(product: Product) {
    this.onAddToChart.emit(product);
  }

  fireOnRemoveFromChartEvent(product: Product) {
    this.onRemoveFromChart.emit(product);
  }

}
