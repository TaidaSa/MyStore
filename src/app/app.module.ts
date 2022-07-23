import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';
import { SuccesFormComponent } from './components/succes-form/succes-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    HeaderComponent,
    CartComponent,
    SuccessComponent,
    SuccesFormComponent,
    ProductListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
