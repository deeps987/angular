import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface searchProduct {
  Order_Date: string;
  Order_id: number;
  // Product_id: string; 
  Status: string;
  Quantity: number; 
  Product_id: number
  // Size: string
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit{

  myOrders : searchProduct[] = [];

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    console.log("Ng ", this.orderService.orders);
    this.myOrders = this.orderService.orders['My Orders'];
    console.log(this.myOrders[0].Order_Date);
  }
  // currentPage: number = 1;
  // itemsPerPage: number = 5; // Number of items per page

  // get totalPages(): number {
  //   return Math.ceil(this.myOrders.length / this.itemsPerPage);
  // }

  // get pages(): number[] {
  //   return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  // }

  // changePage(page: number) {
  //   this.currentPage = page;
  // }

  // nextPage() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }

  // prevPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }


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
    return this.first >= this.myOrders.length - 5;
  }

  pageChange(event: any) {
    this.first = event.first;
  }

}
