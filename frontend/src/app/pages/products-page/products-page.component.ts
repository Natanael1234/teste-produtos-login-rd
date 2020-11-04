import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/chart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public products: Product[];
  constructor(public productService: ProductService, public cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.productService.getProducts();
    console.log(this.products);
  }

  async addToCart (product:Product) {
    await this.cartService.addProduct(product);
  }

}
