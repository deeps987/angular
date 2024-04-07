import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-form/product-details/product-details.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OrderFormComponent } from '../orders/order-form/order-form.component';

const routes: Routes = [
  {
    path : 'productitem',
    component: ProductItemComponent
  },
  {
    path : 'productlist',
    component: ProductListComponent
  },
  {
    path : 'placeorder',
    component: OrderFormComponent
  },

]

@NgModule({
  declarations: [
    CartComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductItemComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    TableModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
