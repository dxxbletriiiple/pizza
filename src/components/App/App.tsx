import { useEffect, useState } from 'react';
import Categories from '../Categories';
import Header from '../Header';
import PizzaItem from '../PizzaItem';
import Sort from '../Sort';
import { GetPizza } from '../../services/GetPizza.service';
import { IPizza } from '../../interfaces';
import './App.scss';
import Spinner from '../Spinner';

const gp = new GetPizza();

export const App = () => {
	const [pizzaArray, setPizzaArray] = useState([]);
	const [pizzaCount, setPizzaCount] = useState(0);

	useEffect(() => {
		gp.getPizza().then(setPizzaArray);
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
					{!pizzaArray[0] ? (
						<Spinner />
					) : (
						<div className='content__items'>
							{pizzaArray.map((el: IPizza) => (
								<PizzaItem {...el} handleClick={handleClick} key={el.id} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
