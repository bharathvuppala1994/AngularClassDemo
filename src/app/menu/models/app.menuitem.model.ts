export interface MenuItem {    
    id: number,
    name: string;
    description: string;
	price : number
	imageLocation: string
    spicyLevel : SpicyLevel
}

export enum SpicyLevel {
    Low = 'LOW',
    Medium = 'MEDIUM',
    High = 'HIGH'
}