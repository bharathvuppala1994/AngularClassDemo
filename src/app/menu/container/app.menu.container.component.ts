import {Component}  from '@angular/core'
import { MenuService } from '../service/app.menu.service';
import { MenuItem } from '../models/app.menuitem.model';

@Component ({

    selector:'menu-container',
    templateUrl:'../html/app.menu.container.html',
    styleUrls:[]

})

export class MenuContainerComponent {

    menuItems : MenuItem[]
    constructor(private menuService: MenuService) {
        this.menuItems = menuService.getMenuItems();
    }
}