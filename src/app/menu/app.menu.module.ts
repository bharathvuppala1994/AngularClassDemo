import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import { MenuContainerComponent } from './app.menu.container.component';

@NgModule ( {

    imports: [FormsModule],
    exports:[MenuContainerComponent],
    declarations:[MenuContainerComponent]

})

export class MenuModule {

}