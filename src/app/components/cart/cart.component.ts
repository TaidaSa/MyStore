import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItems } from 'src/app/models/cartItems';
import { Product } from 'src/app/models/Product';
import { CartserveService } from "src/app/services/cartserve.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[]= [];
  cartItems: CartItems[] = [];
  totalPrice: number = 0;
  

  constructor(private CartserveService : CartserveService, private route: Router) { }

  ngOnInit(): void {
    this.cartItems = this.CartserveService.getCartItems();
    this.calculatePrice();
  }

  
  
  removeItem(id:number){
    let alertMessage: string = `The item is removed from the cart`;
    const ItemId = this.cartItems? this.cartItems.findIndex(cart => cart.id === id): -1;
    if(ItemId != -1 && this.cartItems.length > 0){
      this.cartItems.splice(ItemId,1)
      this.CartserveService.addToCart(this.cartItems)
      this.calculatePrice()
    }
    window.setTimeout(()=>{
      alert(alertMessage);
    });
    
    
  }

  calculatePrice(): void{
    this.totalPrice = this.cartItems.reduce((acc: number, val: any) =>{
      return acc + val.price * Number(val.option);
    }, 0);
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }

  changeCount(id:number, value:number){
    const curruntCount = value;
    const ItemId = this.cartItems.findIndex(cart => cart.id === id);
    ItemId != -1 && this.cartItems.length>0 ? this.cartItems[ItemId].option = curruntCount: null;
    this.cartItems.length > 0 ? this.CartserveService.addToCart(this.cartItems): null;
    this.calculatePrice();
  }


  formSucces(firstName: string){
    this.CartserveService.cartClear();
    this.route.navigateByUrl(`success/${firstName}/${this.totalPrice}`)
  }

}
