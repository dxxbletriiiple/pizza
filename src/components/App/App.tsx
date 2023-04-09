import { useState } from 'react';
import Categories from '../Categories';
import Header from '../Header';
import PizzaItem from '../PizzaItem';
import Sort from '../Sort';
import './App.scss';

import { data } from '../../utils/data';

export const App = () => {
	const [pizzaArray, setPizzaArray] = useState(data);
	const [pizzaCount, setPizzaCount] = useState(0);

	const handleClick = () => {
		console.log('qqq');
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
						{pizzaArray.map((el) => (
							<PizzaItem {...el} handleClick={handleClick} key={el.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
