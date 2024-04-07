import { Component, OnInit } from '@angular/core';
import { Product } from './models/product-list.model';
import { ProductService } from './services/product-list.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from '../../orders/services/order.service';


interface searchProduct {
  Category: string;
  Description: string; 
  Gender: string;
  Price: string; 
  Product_id: number
  Size: string
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[];
  searchedProducts: searchProduct[] = [];

  constructor(private productService: ProductService, private orderService: OrderService, private router: Router){
  }
  
  ngOnInit(): void {
    console.log("dddd ", this.productService.searchProducts)
    this.searchedProducts = this.productService.searchProducts;
  }
  productDetail(product, img){
    this.productService.product = product;
    this.productService.product_url = img;
    this.router.navigate(['/productitem']);
    // console.log(typeof(product))
    // console.log(img)
  }
  static setData(data){
    console.log("hiiiiiiiiiiiiii");
    console.log(data)
    value(this, data)
    // this.searchedProducts = data;

  }

  
  first: number = 0;

  prev() {
    this.first -= 5;
  }

  reset() {
    this.first = 0;
  }

  next() {
    this.first += 5;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }

  isLastPage(): boolean {
    return this.first >= this.searchedProducts.length - 5;
  }

  pageChange(event: any) {
    this.first = event.first;
  }
  buyNow(searchedProd){
    // console.log("PlaceOrder.")
    this.orderService.product_id = searchedProd.Product_id;
    console.log("id ", this.orderService.product_id)

    this.router.navigate(['/placeorder']);
  }

}

function value( obj, data: any) {
   obj.searchedProducts = data;
  // console.log("siddhant")
  console.log(obj.searchedProducts);
}



