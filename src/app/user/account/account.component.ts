import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../products/product-list/services/product-list.service';
import { OrderService } from '../../orders/services/order.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  // router: any;
  constructor(private productService: ProductService, private orderService: OrderService, private userService: UserService, private router: Router, private route: ActivatedRoute){
  }

  showPage() {
    // Replace this function with your logic to navigate to different pages
    console.log(
    // "yayyyyyyyyyyyyyy"
    )
    // alert(`Navigating to ${pageName}`);
  }
  showProfile(){
    this.userService.showProfileDetails().subscribe(
      (response) =>{
        // console.log("sifdd")
      // console.log(response)
      this.userService.userData = response;
      
      // console.log("data: ", this.userService.userData['Address']);

      this.router.navigate(['myProfile'], { relativeTo: this.route });
      // console.log("sidd")
  });
}
showMyOrders(){
  this.orderService.getOrders().subscribe(
    (response) =>{
    // this.userService.userData = response;
    console.log("Orders = ",response);
    this.orderService.orders = response
    
    // console.log("data: ", this.userService.userData['Address']);

    this.router.navigate(['myOrders'], { relativeTo: this.route });
    // console.log("sidd")
});
}
}
