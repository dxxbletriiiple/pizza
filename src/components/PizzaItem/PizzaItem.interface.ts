import { IPizza } from '../../interfaces';
export interface IPizzaItem extends IPizza {
	handleClick(): void;
}
