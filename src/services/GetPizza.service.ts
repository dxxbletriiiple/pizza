export class GetPizza {
	private BASE_URL = 'https://64333a681c5ed06c957c8aee.mockapi.io/api/v1/';
	private ALL_PIZZAS = 'items';
	private CATEGORIES = 'categories';

	public fetchData = (params: string) => {
		return fetch(this.BASE_URL + params).then((r) => r.json());
	};

	public getAllPizzas = () => {
		return this.fetchData(this.ALL_PIZZAS);
	};

	public filterByCategories = (n: number) => {
		return this.fetchData(`${this.ALL_PIZZAS}?category=${n}`);
	};

	public getSortedPizzas = (queryParams: string, orderBy: string) => {
		return this.fetchData(`${this.ALL_PIZZAS}?sortBy=${queryParams}&${orderBy}`);
	};

	public getCategories = () => {
		return this.fetchData(this.CATEGORIES);
	};
}
