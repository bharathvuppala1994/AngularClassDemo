import {Component, OnInit, OnChanges, Output, EventEmitter}  from '@angular/core'
import { MenuItem, SpicyLevel } from '../models/app.menuitem.model';

@Component ({

    selector:'menu-add',
    template:`
    <div class="card">
        <div class="card-body">
        <div class="input-group mb-3">
        <input type="text" class="form-control" 
            [(ngModel)] = "newMenuItem.itemName" placeholder="Dish Name" aria-label="Dish Name" aria-describedby="basic-addon2">
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">$</span>
        </div>
        <input type="number" class="form-control"[(ngModel)] = "newMenuItem.price"
                 placeholder="Dish Price" aria-label="Dish Price" aria-describedby="basic-addon1">
    </div>
    <div class="form-group">
    <label class="col-sm-2 col-form-label">Spicy Level</label>     
     <select  class="form-control" [(ngModel)]= "newMenuItem.spicyLevel">
        <option value="1">HIGH</option>
        <option value="1">MEDIUM</option>
        <option value="1">LOW</option>
     </select>
    </div>
    <button (click)="addMenuItem()" class="btn btn-success" style="float:right"> + </button>
        </div>
    </div>
    
    `,
    styleUrls:[]

})

export class MenuAddComponent{

    newMenuItem:MenuItem = {id:0 , name:'' , description:'', imageLocation:'', price:0 , spicyLevel: SpicyLevel.High}

    @Output() onAddOfNewDish : EventEmitter<MenuItem> = new EventEmitter<MenuItem>()

    addMenuItem() {
        this.onAddOfNewDish.emit(this.newMenuItem);
    }
}