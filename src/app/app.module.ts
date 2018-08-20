import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { myFirstComponent } from './app.myfirstcomponent';
import { FirstComponent } from './firstcomponent';

import {FormsModule}  from '@angular/forms'
import { MenuModule } from './menu/app.menu.module';

import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { UserModule } from './user/user.module';

import {RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './user/login/login.component';
import { MenuContainerComponent } from './menu/container/app.menu.container.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRourterModule } from './app-router.module';
import { MyAuthGuard } from './app-user-authentication.guard';


@NgModule({//Decorator
  declarations: [
    AppComponent,myFirstComponent,FirstComponent, OrdersComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRourterModule,
    MenuModule,
    HttpClientModule,
    UserModule
  ],
  providers: [MyAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
