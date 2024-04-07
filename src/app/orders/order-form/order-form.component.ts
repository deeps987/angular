import { Component, ViewChild } from '@angular/core';
// import { AuthService } from '../../authentication/services/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { CommonModule } from '@angular/common';
// import { CommonModule } from @angular/

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  // imports: [CommonModule],
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent {
  productId: number; // Define productId property
  quantity: number; // Define quantity property
  constructor(private fb: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    // Retrieve productId from the order service (assuming it's a number)
    this.productId = this.orderService.product_id;

    // Initialize form with validation
    // this.productForm = this.fb.group({
    //   quantity: ['', [Validators.required, Validators.min(1)]]
    // });
  }
  

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted!');
    console.log('Product ID:', this.productId);
    console.log('Quantity:', this.quantity);
  }

  // get quantityControl() {
  //   return this.productForm.get('quantity');
  // }

  // onSubmit() {
  //   if (this.productForm.valid) {
  //     // Handle form submission here
  //     console.log('Form submitted successfully!');
  //   }
  // }

}





