import {Component, OnInit, OnChanges, Output, EventEmitter}  from '@angular/core'
import { MenuItem, SpicyLevel } from '../models/app.menuitem.model';
import { NgForm } from '@angular/forms';

@Component ({

    selector:'menu-add',
    templateUrl:'app.menu.add.html',
    styles:[`
     .notValid {
         color:red
     }
    `]

})

export class MenuAddComponent{

    newMenuItem:MenuItem = {itemID:0 , itemName:'' , itemPrice:0 , spicyLevel: 'LOW'}

    @Output() onAddOfNewDish : EventEmitter<MenuItem> = new EventEmitter<MenuItem>()

    formNotValid: boolean = false;

   

    onSumbitForm(myAddDishForm: NgForm) {
        console.log(myAddDishForm)
        if(myAddDishForm.valid) {
            this.onAddOfNewDish.emit(this.newMenuItem);
        } else {
            this.formNotValid = true;
        }
        
    }
}