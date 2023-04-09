export class GetPizza {
	public getPizza = () => {
		return fetch('https://64333a681c5ed06c957c8aee.mockapi.io/api/v1/items').then((r) => r.json());
	};
}
