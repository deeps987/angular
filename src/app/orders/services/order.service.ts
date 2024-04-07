import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { ProductListComponent } from '../product-list.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit{
  

  private apiUrl = 'http://localhost:5000'; //  API endpoint for user authentication
  product_id: number = 0
  orders: object = {};
 
  constructor(private http: HttpClient) {}
    
  ngOnInit(): void {
  //   console.log("Ng ", this.orders);
  }
    

  getOrders() {
    console.log('get orders request made');
    const data = this.http.get<any>(`${this.apiUrl}/myorders`);
    
    console.log(data);
    // if (data.access_token){

    // }
    return data;
    }
  }

