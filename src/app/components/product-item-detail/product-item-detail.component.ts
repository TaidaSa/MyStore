import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItems } from 'src/app/models/cartItems';
import { Product, productCount } from 'src/app/models/Product';
import { ProductserveService } from 'src/app/services/productserve.service';
import { CartserveService } from "src/app/services/cartserve.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id: number | null = null;
  products: Product[]= [];
  product: Product | null = null;
  productCount: number[] = productCount;
  selectedOption = 1 ;

  constructor(private route: ActivatedRoute, private ProductserveService : ProductserveService, private CartserveService : CartserveService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'));
    })

    this.ProductserveService.getData().subscribe(res =>{
      this.products = res;
      this.product = this.getProductById(this.id)
    })

    // this.products = this.ProductserveService.getData();
    // this.product = this.getProductById(this.id);
  }

  getProductById(id: number | null): Product{
    return this.products.filter(product => product.id === id)[0];
  }

  onSelected(value:number): void{
    this.selectedOption = value;
  }


  onSubmit(cartItem: Product){
    let toCartItem: CartItems[] = [];
    let alertMessage: string = '';
    let isCartOptionExist: boolean = false;

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
