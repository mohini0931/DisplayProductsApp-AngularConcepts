import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LogoutComponent } from './logout/logout.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from "@angular/material/form-field";
import { AlertPopUpComponent } from "./shared-components/alert-pop-up/alert-pop-up.component";
import { BnNgIdleService } from "bn-ng-idle";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductDetailsComponent,
    LogoutComponent,
    AlertPopUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    NgbModule
  ],
  providers: [NgbCarouselConfig,BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
