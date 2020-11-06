import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  @Input() pageName: string;
  @Input() showCart: boolean;
  @Input() cartQuantity: boolean;

  constructor(public router: Router) { }

  /** Navega para a tela do carrinho. */
  navigateToCart() {
    this.router.navigate(['cart']);
  }

}
