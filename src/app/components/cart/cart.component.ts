import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItems } from 'src/app/models/cartItems';
import { Product } from 'src/app/models/Product';
import { ProductserveService } from 'src/app/services/productserve.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[]= [];
  cartItems: CartItems[] = [];
  totalPrice: number = 0;
  //////////////////
  firstName: string='';
  address: string='';
  creditCard: number | string = '';
  

  constructor(private ProductserveService : ProductserveService, private route: Router) { }

  ngOnInit(): void {
    this.cartItems = this.ProductserveService.getCartItems();
    this.calculatePrice();
  }

  calculatePrice(): void{
    this.totalPrice = this.cartItems.reduce((acc: number, val: any) =>{
      return acc + val.price * Number(val.option);
    }, 0);
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }
  
  removeItem(id:number){
    const ItemId = this.cartItems? this.cartItems.findIndex(cart => cart.id === id): -1;
    if(ItemId != -1 && this.cartItems.length > 0){
      this.cartItems.splice(ItemId,1)
      this.ProductserveService.addToCart(this.cartItems)
      this.calculatePrice()
    }
  }

  changeCount(id:number, value:number){
    const curruntCount = value;
    const ItemId = this.cartItems.findIndex(cart => cart.id === id);
    ItemId != -1 && this.cartItems.length>0 ? this.cartItems[ItemId].option = curruntCount: null;
    this.cartItems.length > 0 ? this.ProductserveService.addToCart(this.cartItems): null;
    this.calculatePrice();
  }


  onFormSubmit(){
    const Name = this.firstName;
    this.ProductserveService.cartClear();
    this.route.navigateByUrl(`success/${Name}/${this.totalPrice}`)
  }

}
