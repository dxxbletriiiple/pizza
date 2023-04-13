export class GetPizza {
	BASE_URL = 'https://64333a681c5ed06c957c8aee.mockapi.io/api/v1/items';

	public fetchData = (rest: string = '') => {
		return fetch(this.BASE_URL + rest).then((r) => r.json());
	};
}
