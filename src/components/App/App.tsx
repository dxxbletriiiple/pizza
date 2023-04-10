import { useEffect, useState } from 'react';
import Categories from '../Categories';
import Header from '../Header';
import PizzaItem from '../PizzaItem';
import Sort from '../Sort';
import Skeleton from '../Skeleton';
import { GetPizza } from '../../services/GetPizza.service';
import { IPizza } from '../../interfaces';
import './App.scss';

const gp = new GetPizza();

export const App = () => {
	const [pizzaArray, setPizzaArray] = useState([]);
	const [pizzaCount, setPizzaCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		gp.getPizza()
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
		<div className='wrapper'>
			<Header pizzaCount={pizzaCount} />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>

					<div className='content__items'>
						{isLoading
							? [...new Array(6)].map((_) => <Skeleton key={crypto.randomUUID()} />)
							: pizzaArray.map((el: IPizza) => <PizzaItem {...el} handleClick={handleClick} key={el.id} />)}
					</div>
				</div>
			</div>
		</div>
	);
};
