import { useState } from 'react';
import Categories from '../Categories';
import Header from '../Header';
import PizzaItem from '../PizzaItem';
import Sort from '../Sort';
import './App.scss';

export const App = () => {
	const [pizzaCount, setPizzaCount] = useState(0);
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
						<PizzaItem title='qwqew' price={500} handleClick={handleClick} />
						<PizzaItem title='qwqew' price={500} handleClick={handleClick} />
						<PizzaItem title='qwqew' price={500} handleClick={handleClick} />
						<PizzaItem title='qwqew' price={500} handleClick={handleClick} />
						<PizzaItem title='qwqew' price={500} handleClick={handleClick} />
					</div>
				</div>
			</div>
		</div>
	);
};
