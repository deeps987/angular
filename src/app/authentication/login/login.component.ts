import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'template-driven-form';

  username: string = '';
  password: string = '';

  @ViewChild('registrationForm') form: NgForm;

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'},
  ]

  defaultGender: string = 'male';
  defaultCountry: string = 'India';
  // authService: any;
  // router: any;

  constructor(private authService: AuthService, private router: Router){
    
  }

  OnFormSubmitted(){
    console.log(this.form);
    
    this.username = this.form.value.username;
    this.password = this.form.value.password;
    console.log(this.username);
    console.log(this.password); 
    this.authService.Login(this.username, this.password).subscribe(
      (response) =>{
        console.log(response.access_token);
        this.authService.result = true;
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token',response.refresh_token);
        localStorage.setItem('role','Customer');
        
        this.router.navigate(['']);
      },
      error => {
        alert('Something went wrong');
      }
  );

    this.form.reset();
  }

   }
  

