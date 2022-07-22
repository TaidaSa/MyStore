import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartserveService {
  myStorage = window.localStorage;

  constructor() { }

  getCartItems(): CartItems[] | [] {
    const getItems = this.myStorage.getItem('cart');
    return getItems? JSON.parse(getItems): [];
  }

  addToCart(product: CartItems[]): void{
    this.myStorage.setItem('cart', JSON.stringify(product));
  }

  cartClear(): void{
    this.myStorage.clear();
  }
}
