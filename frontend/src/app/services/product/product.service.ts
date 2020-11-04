import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  /** Busca produtos. */
  async getProducts () : Promise<Product[]> {
    let products:Product[] = [];
    // simula uma busca na API
    let id = 1;
    for(let i = 1; i <= 3; i++) {
      products.push(new Product({
        id:id++,
        name:'TLOU 2',
        tags: 'PS4',
        price: 199,
        image: 'assets/images/products/tlou-2.png'
      }));
      products.push(new Product({
        id:id++,
        name:'Cyberpunk',
        tags: 'PS4, PC, XBOX',
        price: 200,
        image: 'assets/images/products/cyberpunk-2077.png'
      }));
      products.push(new Product({
        id:id++,
        name:'Daysgone',
        tags: 'PS4',
        price: 127,
        image: 'assets/images/products/days-gone.png'
      }));
      products.push(new Product({
        id:id++,
        name:'God of War',
        tags: 'PS4',
        price: 60,
        image: 'assets/images/products/god-of-war.png'
      }));
    }
    return products;
  }
}
