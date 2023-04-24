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

export interface IRootState {
	pizzas: {
		pizzasArr: any[];
		activeCategory: number;
		sortBy: string;
		order: string;
	};
}
