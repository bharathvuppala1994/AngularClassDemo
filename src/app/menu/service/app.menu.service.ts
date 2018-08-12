import { MenuItem, SpicyLevel } from "../models/app.menuitem.model";
import {HttpClient} from '@angular/common/http'
import { Injectable } from "../../../../node_modules/@angular/core";


const MENU_SERVICE = 'http://localhost:8080/menuservice/'

@Injectable()
export class MenuService {

    constructor(private httpClient: HttpClient) {
        console.log(httpClient);
    }

    getAllMenuItems() {
       return this.httpClient.get(MENU_SERVICE + '/getAllMenus');
    }




















/*

    sampleData : MenuItem[] = [{
        itemID: 1,
        itemName: 'Panner Butter Masala',
        price: 9.99,
        spicyLevel: SpicyLevel.Low
    } , {
        itemID: 2,
        itemName: 'Chicken Biryani',
        price: 15.99,
        spicyLevel: SpicyLevel.High
    } , {
        itemID:3,
        itemName: 'Chicken Butter Masala',
        price: 19.99,
        spicyLevel: SpicyLevel.Medium
    }]


    //Connect to external Sevice to retrieve all menu items
    getMenuItems() : MenuItem[] {
        return this.sampleData;
    }
*/
    
}