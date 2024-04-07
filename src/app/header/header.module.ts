import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../user/account/account.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path : 'account',
    component: AccountComponent
  },
]


@NgModule({
  declarations: [
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class HeaderModule { }
