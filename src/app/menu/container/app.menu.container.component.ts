import {Component, OnInit, OnChanges}  from '@angular/core'
import { MenuService } from '../service/app.menu.service';
import { MenuItem } from '../models/app.menuitem.model';
import { ActivatedRoute } from '@angular/router';

@Component ({

    selector:'menu-container',
    templateUrl:'../html/app.menu.container.html',
    styleUrls:[]

})

export class MenuContainerComponent implements OnInit, OnChanges{

    menuItems : MenuItem[]
    testDish : MenuItem;
    addNewDishDiv : boolean = false;
    constructor(private menuService: MenuService ,
            private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        //this.menuItems = this.menuService.getMenuItems();
         this.menuService.getAllMenuItems().subscribe((responseMenuItems: MenuItem[]) => {
             this.menuItems = responseMenuItems;
         }
        );

        let dynamicID = this.activatedRoute.snapshot.params['itemID'];
        console.log(dynamicID)

        let itemName = this.activatedRoute.snapshot.queryParams['itemNameQ'];
        console.log(itemName)
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