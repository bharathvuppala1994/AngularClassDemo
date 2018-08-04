export interface MenuItem {

    itemID: number,
    itemName: string,
    price: number,
    spicyLevel: SpicyLevel
}

export enum SpicyLevel {
    Low = 1,
    Medium,
    High
}