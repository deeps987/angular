import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  title = 'template-driven-form';

  username: string = '';
  password: string = '';
  // dob: string = '';
  // emailAddress: string = '';
  phone: number = 0;
  gender: string = '';
  role: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';

  @ViewChild('registrationForm') form: NgForm;

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'},
  ]
  roles = [
    {
      id: 'check-customer', value: 'Customer', display: 'Customer'
    },
    {
      id: 'check-seller', value: 'Seller', display: 'Seller'
    },
  ]


  defaultGender: string = 'male';
  defaultRole: string = 'Customer';
  defaultCountry: string = 'India';

  OnFormSubmitted(){
    console.log(this.form);
    
    this.username = this.form.value.username;
    this.password = this.form.value.password;
    this.phone = this.form.value.phone;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;
    this.role = this.form.value.role;
    this.gender = this.form.value.gender;
    // this.IsAgreed = this.form.value;

    this.form.reset();

    // this.form.form.patchValue({
    //   gender: 'male',
    //   address: {
    //     country: 'India'
    //   }
    // })
  }

  
    }

    // this.form.controls['username'].value = username;
    // console.log(this.form.value.username)

    // this.form.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phone: this.form.value.phone,
    //   dob: this.form.value.dob,
    //   gender: this.form.value.gender,
    //   username: username,
    //   address: {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postal: this.form.value.address.postal
    //   }
    // })

    // this.form.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phone: this.form.value.phone,
    //   dob: this.form.value.dob,
    //   gender: this.form.value.gender,
    //   username: username,
    //   address: {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postal: this.form.value.address.postal
    //   }
    // })//using this method we have to pass an entire object that must match the form value object.

    

