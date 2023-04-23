export class GetPizza {
	private BASE_URL = 'https://64333a681c5ed06c957c8aee.mockapi.io/api/v1/';
	private ALL_PIZZAS = 'items';
	private CATEGORIES = 'categories';

	public fetchData = (params: string) => {
		return fetch(this.BASE_URL + params).then((r) => r.json());
	};

	public getAllPizzas = (sortBy: string, order: string) => {
		return this.fetchData(this.ALL_PIZZAS + `?sortBy=${sortBy}&order=${order}`);
	};

	public getAllSortedPizzas = (category: number, sortBy: string, order: string) => {
		return this.fetchData(`${this.ALL_PIZZAS}?category=${category}&sortBy=${sortBy}&order=${order}`);
	};

	public getCategories = () => {
		return this.fetchData(this.CATEGORIES);
	};
}
