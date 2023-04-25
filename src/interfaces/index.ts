export interface IPizza {
	id: string;
	imageUrl: string;
	title: string;
	types: Array<{
		selected: boolean;
		type: string;
	}>;
	sizes: Array<{
		selected: boolean;
		size: number;
	}>;
	price: number;
	category: number;
	rating: number;
}

export interface ICartPizza extends Pick<IPizza, 'id' | 'imageUrl' | 'title' | 'price'> {
	count: number;
	size: number;
	type: string;
}
export interface IRootState {
	pizzasArr: any[];
	activeCategory: number;
	sortBy: string;
	order: string;
	cart: ICartPizza[];
}
export interface IUseSelector {
	pizzas: IRootState;
}
