import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class ProductserveService {
  myStorage = window.localStorage;

  constructor(private http: HttpClient) { }


  getData(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
  }

  // getData(){
  //   return [
  //     {
  //       "id": 1,
  //       "name": "Book",
  //       "price": 9.99,
  //       "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       "description": "You can read it!"
  //     },
  //     {
  //       "id": 2,
  //       "name": "Headphones",
  //       "price": 249.99,
  //       "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       "description": "Listen to stuff!"
  //     },
  //     {
  //       "id": 3,
  //       "name": "Backpack",
  //       "price": 79.99,
  //       "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       "description": "Carry things around town!"
  //     },
  //     {
  //       "id": 4,
  //       "name": "Glasses",
  //       "price": 129.99,
  //       "url": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       "description": "Now you can see!"
  //     },
  //     {
  //       "id": 5,
  //       "name": "Cup",
  //       "price": 4.99,
  //       "url": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //       "description": "Drink anything with it!"
  //     },
  //     {
  //       "id": 6,
  //       "name": "Shirt",
  //       "price": 29.99,
  //       "url": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
  //       "description": "Wear it with style!"
  //     }
  //   ]
  // }


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