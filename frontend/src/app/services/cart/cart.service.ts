import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DbService } from '../db.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(public productService: ProductService, public db: DbService) { }

  /** Busca o carrinho. */
  async getCart(): Promise<Product[]> {
    return this.db.getCart();
  }

  /** Obtém a quantidade de itens no carrinho. */
  async getCartProductsQuantity(): Promise<{ quantity: number }> {
    let items = this.db.getCart();
    let quantities: number[] = items.map((product: Product) => product.cartQuantity || 0);
    let quantity = quantities.length ? quantities.reduce((total: number, itemQuantity: number) => total + itemQuantity) : 0;
    return { quantity };
  }

  /** Adiciona uma quandidade de um produto ao carrinho. */
  async addCartItem(productId: number, quantity: number): Promise<{ success: boolean, cartQuantity: number }> {
    // busca o produto no carrinho
    let cartItem = this.db.getCartItem(productId);
    // se o produto já está no carrinho
    if (cartItem) {
      cartItem.cartQuantity = Math.max(0, cartItem.cartQuantity + quantity);
      let cartQuantity = this.db.getCartProductQuantity();
      return { success: true, cartQuantity };
    }
    // se o produto ainda não está no carrinho.
    else {
      // busca o produto
      let product = await this.productService.getProduct(productId);
      // se encontrou o produto
      if (product) {
        product.cartQuantity = Math.max(0, quantity);
        // adiciona o produto ao carrinho.
        this.db.saveCartItem(product);
        let cartQuantity = this.db.getCartProductQuantity();
        return { success: true, cartQuantity };
      }
    }
    // se não conseguiu adicionar o produto
    let cartQuantity = this.db.getCartProductQuantity();
    return { success: false, cartQuantity }
  }

    /** Sefine a quantidade de um produto ao carrinho. */
    async setCartItem(productId: number, quantity: number): Promise<{ success: boolean, cartQuantity: number }> {
      // busca o produto no carrinho
      let cartItem = this.db.getCartItem(productId);
      // se o produto já está no carrinho
      if (cartItem) {
        cartItem.cartQuantity = quantity;
        let cartQuantity = this.db.getCartProductQuantity();
        return { success: true, cartQuantity };
      }
      // se o produto ainda não está no carrinho.
      else {
        // busca o produto
        let product = await this.productService.getProduct(productId);
        // se encontrou o produto
        if (product) {
          product.cartQuantity = Math.max(0, quantity);
          // adiciona o produto ao carrinho.
          this.db.saveCartItem(product);
          let cartQuantity = this.db.getCartProductQuantity();
          return { success: true, cartQuantity };
        }
      }
      // se não conseguiu adicionar o produto
      let cartQuantity = this.db.getCartProductQuantity();
      return { success: false, cartQuantity }
    }

  /**
   * Remove um produto do carrinho.
   * @param productId id do produto a ser removido do carrinho.
   */
  async removeCartItem(productId: number): Promise<{ success: boolean }> {
    let success = this.db.removeCartItem(productId);
    return { success };
  }

  /**
   * Esvazia o carrinho.
   */
  async emptyCart(): Promise<{ success: boolean }> {
    this.db.saveCart([]);
    return { success: true }
  }


}
