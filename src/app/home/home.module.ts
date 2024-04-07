import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DataComponent } from './data/data.component';



@NgModule({
  declarations: [
    HomeComponent,
  
    CarouselComponent,
    DataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
