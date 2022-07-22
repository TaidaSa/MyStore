import { Component, OnInit } from '@angular/core';
import { CartItems } from 'src/app/models/cartItems';
import { Product } from 'src/app/models/Product';
import { ProductserveService } from 'src/app/services/productserve.service';
import { CartserveService } from "src/app/services/cartserve.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedOption = 1 ;

  constructor(private ProductserveService : ProductserveService, private CartserveService : CartserveService  ) { }

  ngOnInit(): void {


    this.ProductserveService.getData().subscribe(res => {
      this.products = res;  
    })

    // this.products = this.ProductserveService.getData();
  }

  onSelected(value): void{
    this.selectedOption = value;
  }

  onSubmit(cartItem: Product){
    let toCartItem: CartItems[] = [];
    let alertMessage: string = '';

    const itemCount = this.selectedOption;
    const cartItems: CartItems[] = this.CartserveService.getCartItems();
    

    const itemID = cartItems.findIndex(cart => cart.id === cartItem.id)
    toCartItem = cartItems;

    if((itemID === -1) || (cartItems.length === 0)){
      toCartItem.push(Object.assign(cartItem, {option: itemCount}));

      alertMessage = `New Item '${cartItem.name}' added to cart`;
    }

    this.CartserveService.addToCart(toCartItem);

    alert(alertMessage);
  }




}
