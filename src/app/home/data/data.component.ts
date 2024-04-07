import { Component } from '@angular/core';
import { ProductService } from '../../products/product-list/services/product-list.service';
import { Router } from '@angular/router';
import { Product } from '../../products/product-list/models/product-list.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  products: Product[];
  constructor(private productService: ProductService, private router: Router){
    this.productService.getProducts().subscribe(
      (response) =>{
        console.log("hhhh")
        console.log("Response = ",response);
        this.products = response.Products;
        console.log(this.products)
      },
    error => {
      alert('Something went wrong');
    }
);
  }
  
  productDetail(product, img){
    this.productService.product = product;
    this.productService.product_url = img;
    this.router.navigate(['/productitem']);
    // console.log(typeof(product))
    // console.log(img)
  }
//   getData(){
//     this.productService.getProducts().subscribe(
//       (response) =>{
        
//         // this.router.navigate(['']);
//         this.products = response;
//       },
//     error => {
//       alert('Something went wrong');
//     }
// );
//   }
}



