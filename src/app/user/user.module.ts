import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { AccountComponent } from './account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { OrderDetailsComponent } from '../orders/order-list/order-details/order-details.component';
import { OrderListComponent } from '../orders/order-list/order-list.component';


const routes: Routes = [
  {
    path : 'account/myProfile',
    component: UserDetailsComponent
  },
  {
    path : 'account/myOrders',
    component: OrderListComponent
  },

]

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserListComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    ButtonModule,
    FormsModule
  ]
})
export class UserModule { }
