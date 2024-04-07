import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  userData: object = {};
  

  private apiUrl = 'http://localhost:5000'; //  API endpoint for user authentication
  // data: object = {};
  result: boolean = false;
 
  constructor(private http: HttpClient) {}
 
  getData(username: string, password: string){
    console.log('login request made');
    const data = this.http.get<any>(`${this.apiUrl}/user`);
    
    console.log(data);
    // if (data.access_token){

    // }
    return data;
 
    }

    showProfileDetails() {
      console.log('profile request made');
      const data = this.http.get<any>(`${this.apiUrl}/account`);
    
    console.log("Dataaaa: ", data);
    // if (data.access_token){

    // }
    return data;
 
    }
    updateProfile(data: {}) {
      console.log('update details request made');
      const response = this.http.put<any>(`${this.apiUrl}/account`, { data});
      console.log(response)
      return response
    }
      
    }

