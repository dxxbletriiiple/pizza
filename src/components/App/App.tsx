import Categories from '../Categories';
import Header from '../Header';
import PizzaItem from '../PizzaItem';
import Sort from '../Sort';
import './App.scss';

export const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
					</div>
				</div>
			</div>
		</div>
	);
};
