import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 
 
 
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'} ,
  {path: 'auth', loadChildren: ()=> import('./authentication/authentication.module').then(
        (module)=>module.AuthenticationModule)},
  {path: '', loadChildren: ()=> import('./products/products.module').then(
            (module)=>module.ProductsModule)},
  {path: '', loadChildren: ()=> import('./products/products.module').then(
              (module)=>module.ProductsModule)},
  {path: '', loadChildren: ()=> import('./products/products.module').then(
              (module)=>module.ProductsModule)},
  {path: '', loadChildren: ()=> import('./header/header.module').then(
              (module)=>module.HeaderModule)},
  {path: '', loadChildren: ()=> import('./user/user.module').then(
              (module)=>module.UserModule)},
  {path: '', loadChildren: ()=> import('./user/user.module').then(
              (module)=>module.UserModule)},

 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }