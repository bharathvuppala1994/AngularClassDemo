import {Component, OnInit, OnChanges}  from '@angular/core'
import { MenuService } from '../service/app.menu.service';
import { MenuItem } from '../models/app.menuitem.model';

@Component ({

    selector:'menu-container',
    templateUrl:'../html/app.menu.container.html',
    styleUrls:[]

})

export class MenuContainerComponent implements OnInit, OnChanges{

    menuItems : MenuItem[]
    testDish : MenuItem;
    addNewDishDiv : boolean = false;
    constructor(private menuService: MenuService) {
    }

    ngOnInit() {
        //this.menuItems = this.menuService.getMenuItems();
         this.menuService.getAllMenuItems().subscribe((responseMenuItems: MenuItem[]) => {
             this.menuItems = responseMenuItems;
         }
        );
    }

    ngOnChanges() {
        console.log("changes");
    }

    showMenuAddDiv() {
        this.addNewDishDiv = true;
    }

    handleNewDishAdd(newMenuItem: MenuItem) {
        console.log("Smart Component : " + newMenuItem);
        this.menuService.addNewMenuItem(newMenuItem).subscribe((menuItemWhichIsAdded: MenuItem) => {
            this.menuItems.push(menuItemWhichIsAdded);
        })        
    }

    deleteDish(dishItem : MenuItem) {
        this.menuItems = this.menuItems.filter(dish => dishItem.itemID != dish.itemID);  
    }

    smartCoponentEvent(dish : MenuItem) {
        this.testDish = dish;
        //delete
    }
}