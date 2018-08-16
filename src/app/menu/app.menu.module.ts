import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { MenuContainerComponent } from './container/app.menu.container.component';
import { MenuService } from './service/app.menu.service';
import { MenuItemEditComponent } from './components/app.menu.item.edit.component';
import { MenuAddComponent } from './components/app.menu.add.component'; 

import { HttpClientModule } from '@angular/common/http';
import { MenuItemComponent } from './components/app.menu.item.component'; 
import { PriceValidator } from './components/app.menu.price.validator';



@NgModule ( {

    imports: [FormsModule, BrowserModule,HttpClientModule],
    exports:[MenuContainerComponent],
    declarations:[MenuContainerComponent, MenuItemEditComponent, MenuAddComponent, MenuItemComponent,PriceValidator],
    providers:[MenuService]

})

export class MenuModule {

}