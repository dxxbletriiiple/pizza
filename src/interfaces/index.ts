export interface IPizza {
	id: string;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
}

export interface IRootState {
	pizzas: {
		pizzasArr: any[];
		activeCategory: number;
	};
}
