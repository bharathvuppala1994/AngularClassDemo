import {Component, OnInit, OnChanges, Output, EventEmitter, Input}  from '@angular/core'
import { MenuItem } from '../models/app.menuitem.model';

@Component ({

    selector:'menu-item',
    template:`
    <li class="list-group-item list-group-item-primary" (onclick) = "navigateToMenu()">
    
        <div class="row">
            <div class="col-sm-6">
                <h3>{{dish.itemName}}</h3>
                <h3 style="color:blue">$ &nbsp;{{dish.itemPrice}}</h3>
                <h3>{{dish.spicyLevel}}</h3>
            </div>
            <div class="col-sm-3">
                <button class="btn btn-danger float-right" (click)="deleteItem()"> Delete (X) </button>
                <img src="assets/edit.png" class="rounded float-left" alt="dish.name" style="width:22%">
                <button class="btn btn-primary float-right"> Edit </button>
            </div>
        </div>
    
    
    </li>
    
    `,
    styleUrls:[]

})

export class MenuItemComponent{
     @Input() dish: MenuItem ;
    @Output() displayMeEvent = new EventEmitter<MenuItem>();
    @Output() deleteMenuItem = new EventEmitter<MenuItem>();

    displayMe() {
        this.displayMeEvent.emit(this.dish);
    }

    deleteItem()  {
        //this.deleteMenuItem.emit(this.dish.id)
    }

    navigateToMenu() {
        let id = this.dish.itemID
    }
   
}