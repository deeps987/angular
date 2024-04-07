import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if ((request.url === 'http://localhost:5000/account') || (request.url === 'http://localhost:5000/myorders')) { 
    // Retrieve access token from local storage
    console.log("Account Profile")
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken)

    // If access token exists, add it to the request headers
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }
}

    // Pass the modified request to the next interceptor or the HTTP handler
    return next.handle(request);
  }
}
