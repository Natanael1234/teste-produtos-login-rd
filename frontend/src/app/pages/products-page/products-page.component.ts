import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/chart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  /** Lista de produtos. */
  public products: Product[];
  /** Quantidade total de produtos no carrinho. Somatório de da quantidade de cada produto. */
  cartQuantity = 0;
  constructor(public router: Router, public productService: ProductService, public cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  /** Busca os produtos do carrinho. */
  async getProducts() {
    this.products = await this.productService.getProducts();
    await this.updateQuantity();
  }

  /**
   * Adiciona um produto ao carrinho.
   * @param product produto a ser adicionado ao carrinho.
   */
  async addToCart(product: Product) {
    await this.cartService.addCartItem(product.id, 1);
    await this.updateQuantity();
  }

  /** Remove um produto do carrinho. */
  async removeFromCart(product: Product) {
    await this.cartService.removeCartItem(product.id);
    await this.updateQuantity();
  }

  /**
   * Atualiza a quantidade total de produtos no carrinho de cada produto na lista.
   * Efetua somatório de da quantidade de cada produto.
   */
  async updateQuantity() {
    // busca o carrinho.
    let items = await this.cartService.getCart();
    // para cada produto na lista
    for (let product of this.products) {
      // procura o produto correspondente no carrinho
      let chartProduct = items.find((charProduct: Product) => product.id == charProduct.id);
      // se encontrou o produto no carrinho copia a quantidade para o produto na lista
      if (chartProduct) product.cartQuantity = chartProduct.cartQuantity;
      // se não encontrou o produto no carrinho zera a quantidade do produto na lista
      else product.cartQuantity = 0;
    }
    // atualiza a quantidade total de produtos no carrinho.
    let quantities: number[] = items.map((chartProduct: Product) => chartProduct.cartQuantity);
    this.cartQuantity = quantities.length ? quantities.reduce((total: number, quantity: number) => total + quantity) : 0;

  }

  /** Navega para a tela do carrinho. */
  navigateToCart() {
    this.router.navigate(['cart']);
  }

}
