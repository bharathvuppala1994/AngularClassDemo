import {Component, Input, OnInit, OnChanges}  from '@angular/core'
import { MenuService } from '../service/app.menu.service';
import { MenuItem } from '../models/app.menuitem.model';

//Dumb Component
@Component ({

    selector:'menu-item-edit',
    template:`<input type="text" [(ngModel)] = "menuItemValue.price">`,
    styleUrls:[]

})

export class MenuItemEditComponent implements OnInit, OnChanges{

   @Input() menuItemValue: MenuItem

   ngOnInit() {

    }

    ngOnChanges() {
        console.log("Changed");
    }

    ngDoCheck() {
        console.log("ngDocheck()")
    }
}