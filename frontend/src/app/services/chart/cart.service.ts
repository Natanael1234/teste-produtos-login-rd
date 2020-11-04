import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addProduct(product: Product) {
    throw new Error('Não implementado')    ;
  }
}
