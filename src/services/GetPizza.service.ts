export class GetPizza {
	private BASE_URL = 'https://64333a681c5ed06c957c8aee.mockapi.io/api/v1/';
	private ALL_PIZZAS = 'items';
	private CATEGORIES = 'categories';

	public fetchData = (rest: string = '') => {
		return fetch(this.BASE_URL + this.ALL_PIZZAS + rest).then((r) => r.json());
	};
}
