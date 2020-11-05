import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart: Product[] = [];
  totalPrice: number = 0;

  constructor(public router: Router, public cartService: CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  /** Busca o carrinho */
  async getCart() {
    this.cart = await this.cartService.getCart() || [];
    this.calulateTotal();
  }

  /** Navega para a tela de produtos. */
  navigateToProducts() {
    this.router.navigate(['products']);
  }

  /** Adiciona ou remove itens do carrinho */
  async addProduct(item: Product, quantity: -1 | 1) {    
    await this.cartService.addCartItem(item.id, quantity);
    await this.getCart();    
  }

  calulateTotal() {
    let totalPrice = 0;
    for (let item of this.cart) {
      totalPrice += item.totalPrice;
    }    
    this.totalPrice = totalPrice;
  }

}
