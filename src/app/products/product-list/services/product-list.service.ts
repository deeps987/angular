import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductListComponent } from '../product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5000'; //  API endpoint for user authentication

  private notifyComponentSubject = new Subject<void>();
  notifyComponent$ = this.notifyComponentSubject.asObservable();
  // data: object = {};
  result: boolean = false;
  product: object = {};
  product_url: string = '';
  keyword: string = '';
  searchProducts = [];
 
  constructor(private http: HttpClient) {}
 
  getProducts(){
    console.log('product request made');
    const params = new HttpParams()
      .set('keyword', 'ethnic')
    const data = this.http.get<any>(`${this.apiUrl}/product`, {params : params });
    console.log(data);
    // if (data.access_token){

    // }
    return data;
 
    }

    getSingleProduct(keyword){
      console.log('search request made');
      const params = new HttpParams()
      .set('keyword', keyword)
      const data = this.http.get<any>(`${this.apiUrl}/product`, {params : params });
      console.log(data);
    // if (data.access_token){

    // }
      return data;
    }

    getProductsSearch(keyword: string){
      console.log('product search request made');
      const params = new HttpParams()
        .set('keyword', keyword)
      const data = this.http.get<any>(`${this.apiUrl}/product`, {params : params });
      console.log(data);
      // if (data.access_token){
  
      // }
      return data;
   
      }

      setData(data: any){
        // console.log("yayyyyyy")
        ProductListComponent.setData(data);
        
        // console.log("Gupta:", ProductListComponent.searchedProducts) ProductListComponent.searchedProducts = data;
        // this.notifyComponentSubject.next(data);
        // searchedProducts = data;

      }
}
