import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {

  @Input() totalPrice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
