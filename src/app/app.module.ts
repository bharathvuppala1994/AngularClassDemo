import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { myFirstComponent } from './app.myfirstcomponent';
import { FirstComponent } from './firstcomponent';

import {FormsModule}  from '@angular/forms'
import { MenuModule } from './menu/app.menu.module';

@NgModule({//Decorator
  declarations: [
    AppComponent,myFirstComponent,FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
