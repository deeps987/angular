import { Component } from '@angular/core';
import { ProductService } from '../services/product-list.service';
import { Router } from '@angular/router';
// import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  productItem: object = {};
  productImg: string = '';
  newProduct: { [key: string]: any } = {};
  constructor(private productService: ProductService, private router: Router){
    this.productItem = productService.product;
    this.productImg = productService.product_url;
    console.log(typeof(this.productItem));
    console.log("Product Item called ", this.productItem);
    for (const key in this.productItem) {
      if (this.productItem.hasOwnProperty(key)) {
          this.newProduct[key] = this.productItem[key];
          // console.log(`${key}: ${this.productItem[key]}`);
      }
    } 
    this.newProduct['img'] = this.productImg;
    // console.log(this.newProduct.Category)
  
  }

  addToCart() {
    // throw new Error('Method not implemented.');
    }
    buyNow() {
    // throw new Error('Method not implemented.');
    }

}
