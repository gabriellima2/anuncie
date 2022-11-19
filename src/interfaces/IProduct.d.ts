export interface IProduct {
	id: string;
	name: string;
	description?: string;
	price: string;
	availableQuantity: number;
	sourceImage: string;
	soldBy: string;
}

export interface ICartProduct extends IProduct {
	quantity: number;
}

export interface IAdProduct extends IProduct {}
