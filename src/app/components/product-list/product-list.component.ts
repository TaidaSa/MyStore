import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductserveService } from 'src/app/services/productserve.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

   

  constructor(private ProductserveService : ProductserveService  ) { }

  ngOnInit(): void {


    this.ProductserveService.getData().subscribe(res => {
      this.products = res;  
    })

    // this.products = this.ProductserveService.getData();
  }

  // onSelected(value): void{
  //   this.selectedOption = value;
  // }




}
