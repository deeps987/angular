import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
