import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { TokenInterceptor } from './user/services/user.service.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
// import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    FormsModule,
    ButtonModule,
    AppRoutingModule,
    DropdownModule,
    AuthenticationModule,
    HomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule
    // CardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
