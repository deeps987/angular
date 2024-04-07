import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-list/order-details/order-details.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailsComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    RouterModule,
    PaginatorModule,
    BrowserModule
  ]
})
export class OrderModule { }
