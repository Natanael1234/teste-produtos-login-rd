import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() {
    let id = 1;
    for (let i = 1; i <= 3; i++) {
      this.products.push(new Product({
        id: id++,
        name: 'TLOU 2',
        tags: 'PS4',
        price: 199,
        image: 'assets/images/products/tlou-2.png'
      }));
      this.products.push(new Product({
        id: id++,
        name: 'Cyberpunk',
        tags: 'PS4, PC, XBOX',
        price: 200,
        image: 'assets/images/products/cyberpunk-2077.png'
      }));
      this.products.push(new Product({
        id: id++,
        name: 'Daysgone',
        tags: 'PS4',
        price: 127,
        image: 'assets/images/products/days-gone.png'
      }));
      this.products.push(new Product({
        id: id++,
        name: 'God of War',
        tags: 'PS4',
        price: 60,
        image: 'assets/images/products/god-of-war.png'
      }));
    }
  }

  /** Busca produtos. */
  async getProducts(): Promise<Product[]> {
    return this.products.map((product: Product) => new Product(product));
  }

  /**
   * Busca um produto.
   * @param productId Id do produto.
   */
  async getProduct(productId: number) {
    return this.products
      .filter((product: Product) => product.id == productId)
      .map((product: Product) => new Product(product))
      .find((product: Product) => product.id == productId);
  }
}
