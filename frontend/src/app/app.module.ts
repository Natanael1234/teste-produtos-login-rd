import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    CartPageComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    LoginFormComponent,
    CartItemComponent,
    ProductCardComponent,
    PageHeaderComponent,
    CartTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
