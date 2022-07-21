import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SuccessComponent } from './components/success/success.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'item-detail/:id', component: ProductItemDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'success/:firstName/:totalPrice', component: SuccessComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
