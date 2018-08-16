export interface MenuItem {    
    itemID: number,
    itemName: string;
	itemPrice : number
    spicyLevel : string
}

export enum SpicyLevel {
    Low = 'LOW',
    Medium = 'MEDIUM',
    High = 'HIGH'
}