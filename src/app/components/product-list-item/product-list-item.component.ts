import { Component, Input, OnInit } from '@angular/core';
import { Product, productCount } from 'src/app/models/Product';
import { ProductserveService } from 'src/app/services/productserve.service';
import { CartserveService } from "src/app/services/cartserve.service";
import { CartItems } from 'src/app/models/cartItems';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() productData: Product;
  productCount: number[] = productCount;

  constructor(private ProductserveService : ProductserveService, private CartserveService : CartserveService) { }

  ngOnInit(): void {
  }

  onSubmit(cartItem: Product){
    let toCartItem: CartItems[] = [];
    let alertMessage: string = '';
    let isCartOptionExist: boolean = false;

    // const itemCount = this.selectedOption;
    const itemCount = event.target[0].options[event.target[0].options.selectedIndex].value;
    const cartItems: CartItems[] = this.CartserveService.getCartItems();
    

    const itemID = cartItems.findIndex(cart => cart.id === cartItem.id)
    toCartItem = cartItems;

    if((itemID === -1) || (cartItems.length === 0)){
      toCartItem.push(Object.assign(cartItem, {option: itemCount}));

      alertMessage = `New Item '${cartItem.name}' added to cart`;
    }else{
      const count: number = toCartItem[itemID].option;
      isCartOptionExist = itemCount === count
      if (isCartOptionExist){
        alertMessage = `${count} Item(s) of '${cartItem.name}' already exist in cart.`;
      }else{
        toCartItem[itemID].id = cartItem.id;
        toCartItem[itemID].option = itemCount;
        alertMessage = `${count} Item(s) of '${cartItem.name}' already exist in cart. Will be updated to ${itemCount}`;
      }
    }

    this.CartserveService.addToCart(toCartItem);

    alert(alertMessage);
  }

}
