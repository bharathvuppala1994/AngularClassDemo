import {Component, Input}  from '@angular/core'
import { MenuService } from '../service/app.menu.service';
import { MenuItem } from '../models/app.menuitem.model';

//Dumb Component
@Component ({

    selector:'menu-item',
    template:`<input type="text" [(ngModel)] = "menuItemValue.price">`,
    styleUrls:[]

})

export class MenuItemComponent {

   @Input() menuItemValue: MenuItem
}