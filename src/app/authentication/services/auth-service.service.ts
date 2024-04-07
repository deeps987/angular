import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000'; //  API endpoint for user authentication
  // data: object = {};
  result: boolean = false;
 
  constructor(private http: HttpClient) {}
 
  Login(username: string, password: string){
    console.log('login request made');
    const data = this.http.post<any>(`${this.apiUrl}/login`, { username, password });
    
    console.log(data);
    // if (data.access_token){

    // }
    return data;
 
    }
}
