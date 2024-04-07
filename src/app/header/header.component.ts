import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../authentication/services/auth-service.service';
import { ProductService } from '../products/product-list/services/product-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: any[] = [];
  loginPage: boolean = true;
  signupPage: boolean = true;

  constructor(private router: Router, private authService: AuthService, private productService: ProductService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Reset both flags to true by default
      this.loginPage = true;
      this.signupPage = true;
 
      // Hide the opposite button based on the current route
      if (this.router.url.includes('/login')) {
        this.loginPage = false;
      } else if (this.router.url.includes('/signup')) {
        this.signupPage = false;
      }
    });
 }

isLogin(){
  if (this.authService.result) {
    this.loginPage = false;
    this.signupPage = false;
    return true;
  }
  else{
    return false;
    }
  }
  GetProduct(data: any){
    console.log("Sidd")
    console.log(data.target.value)
    data = data.target.value;
    this.productService.keyword = data;
    this.productService.getProductsSearch(data).subscribe(
      (response) =>{
        console.log("hi");
        console.log(response.Products);//array of objects
        this.productService.searchProducts = response.Products;
        this.productService.setData(response.Products);
        // console.log("Gupta")

        
        
        this.router.navigate(['/productlist']);
      }
      // error => {
      //   alert('Something went wrong');
      // }
  );
    // data = this.productService.getProductsSearch(data);

  }
  myAccount(){
    // console.log("I Lovd")
    this.router.navigate(['/account']);
  }
}


