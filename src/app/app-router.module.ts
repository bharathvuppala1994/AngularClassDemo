import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router } from '@angular/router'
import { LoginComponent } from './user/login/login.component';
import { MenuContainerComponent } from './menu/container/app.menu.container.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyAuthGuard } from './app-user-authentication.guard';

const applciationRoutes : Routes = [
  { path :'' , canActivate:[MyAuthGuard],  component : LoginComponent},
  { path :'register' , canActivate:[MyAuthGuard],component : RegistrationComponent},
  { path :'loadMenus' , canActivate:[MyAuthGuard],component : MenuContainerComponent},
  { path :'loadMenus/:itemID' , canActivate:[MyAuthGuard],component : MenuContainerComponent},
  { path :'loadMenus/:itemID/:itemName' , canActivate:[MyAuthGuard],component : MenuContainerComponent},
  { path :'**' , component : PageNotFoundComponent}
]

@NgModule({//Decorator
  declarations: [
   
  ],
  imports: [
    RouterModule.forRoot(applciationRoutes)
  ],
  providers: [],
  exports:[RouterModule]
})
export class AppRourterModule { }
