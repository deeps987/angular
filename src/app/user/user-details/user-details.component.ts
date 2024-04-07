import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  userProfile: object = {};
  @ViewChild('registrationForm') form: NgForm;
  updateProfile: boolean = false;
  open: boolean = true;
  phone: any;
  password: any;
  address: any;
  city: any;
  state: any;
  pincode: any;
  constructor(private userService:UserService){
    console.log("shachee")
    this.userProfile = userService.userData
    console.log(this.userProfile)

  }
  ngOnInit(): void {
    // this.userProfile = this.userService.userData;
    // console.log("profile: ", this.userProfile)
  }

  editProfile(){
    console.log("Update profile")
    this.open = false;
    this.updateProfile = true;
  }

  OnFormSubmitted(){
    let data = {};
    this.password = this.form.value.password;
    this.phone = this.form.value.phone;
    this.address = this.form.value.address.street1;
    this.city = this.form.value.address.city;
    this.state =this.form.value.address.region;
    this.pincode = this.form.value.address.postal;
    console.log(this.address)
    if (this.phone){
      data['phone'] = String(this.phone);
    }
    if (this.password){
      data['password'] = this.password;
    }
    if (this.address && this.city && this.state && this.pincode){
      data['address'] = this.address;
      data['city'] = this.city;
      data['state'] = this.state;
      data['pincode'] = String(this.pincode);
    }
    console.log(data);
    this.userService.updateProfile(data).subscribe(
      (response) =>{
        console.log(response);
        // this.authService.result = true;
        // localStorage.setItem('access_token', response.access_token);
        // localStorage.setItem('refresh_token',response.refresh_token);
        
        // this.router.navigate(['']);
      },
      error => {
        alert('Something went wrong');
      }
  );
  }



}
