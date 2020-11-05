import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {


  saveLogin(userData: { email: string, name: string }) {
    localStorage.setItem('login', JSON.stringify(userData));
  }

  getLogin(): { email: string, name: string } {
    return JSON.parse(localStorage.getItem('login'));
  }

  removeLogin() {
    localStorage.removeItem('login');
  }

  getCart(): Product[] {
    let str = localStorage.getItem('items-carrinho');
    if (str) {
      return JSON.parse(str).map((item: any) => new Product(item));
    }
    return [];
  }

  saveCartItem(product: Product) {
    let items = this.getCart();
    let idx = items.findIndex((savedProduct: Product) => product.id == savedProduct.id);
    if (idx < 0) {
      items.push(product);
    } else {
      items[idx] = product;
    }
    this.saveCart(items);
  }

  saveCart(items: Product[]) {
    localStorage.setItem('items-carrinho', items ? JSON.stringify(items) : null);
  }

  countCartItems() {
    this.getCart().length;
  }

  getCartProductQuantity() {
    let cart = this.getCart();
    let quantity = 0;
    for (let product of cart) {
      quantity += product.cartQuantity;
    }
    return quantity;
  }

  getCartItem(productId: number) {
    return this.getCart().find((product: Product) => product.id == productId);
  }

  removeCartItem(productId: number) {
    let cart = this.getCart();
    let quantity = cart.length;
    cart = cart.filter((product: Product) => product.id != productId)
    let removed = quantity != cart.length;
    this.saveCart(cart);
    return removed;
  }

}
