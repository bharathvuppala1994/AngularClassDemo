import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { MenuContainerComponent } from './container/app.menu.container.component';
import { MenuService } from './service/app.menu.service';
import { MenuItemComponent } from './components/app.menu.item.edit.component';

@NgModule ( {

    imports: [FormsModule, BrowserModule],
    exports:[MenuContainerComponent],
    declarations:[MenuContainerComponent, MenuItemComponent],
    providers:[MenuService]

})

export class MenuModule {

}