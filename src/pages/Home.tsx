import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaItem from '../components/PizzaItem';
import Sort from '../components/Sort';
import { PizzaSkeleton } from '../components/Skeleton';
import { GetPizza } from '../services/GetPizza.service';
import { IPizza } from '../interfaces';

const gp = new GetPizza();

export const Home = (): JSX.Element => {
	const [pizzaArray, setPizzaArray] = useState([]);
	const [pizzaCount, setPizzaCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		gp.getAllPizzas()
			.then((r) => {
				setPizzaArray(r);
				setIsLoading(false);
			})
			.catch((e) => {
				console.error(e);
				setIsLoading(true);
			});
	}, []);

	const handleClick = () => {
		setPizzaCount(pizzaCount + 1);
	};

	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_) => <PizzaSkeleton key={crypto.randomUUID()} />)
					: pizzaArray.map((el: IPizza) => <PizzaItem {...el} handleClick={handleClick} key={el.id} />)}
			</div>
		</>
	);
};
