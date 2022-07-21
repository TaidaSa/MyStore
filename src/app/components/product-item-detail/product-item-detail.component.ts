import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItems } from 'src/app/models/cartItems';
import { Product } from 'src/app/models/Product';
import { ProductserveService } from 'src/app/services/productserve.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id: number | null = null;
  products: Product[]= [];
  product: Product | null = null;
  selectedOption = 1 ;

  constructor(private route: ActivatedRoute, private ProductserveService : ProductserveService) { }

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

    const itemCount = this.selectedOption;
    const cartItems: CartItems[] = this.ProductserveService.getCartItems();
    

    const itemID = cartItems.findIndex(cart => cart.id === cartItem.id)
    toCartItem = cartItems;

    if((itemID === -1) || (cartItems.length === 0)){
      toCartItem.push(Object.assign(cartItem, {option: itemCount}));

      alertMessage = `New Item '${cartItem.name}' added to cart`;
    }

    this.ProductserveService.addToCart(toCartItem);

    alert(alertMessage);
  }


}
