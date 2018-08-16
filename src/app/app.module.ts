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

@NgModule({//Decorator
  declarations: [
    AppComponent,myFirstComponent,FirstComponent, OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
