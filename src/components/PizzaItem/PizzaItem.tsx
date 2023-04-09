import { IPizzaItem } from './PizzaItem.interface';
import Button from '../Button';
import './PizzaItem.scss';
import Selector from '../Selector';

export const PizzaItem = ({ imageUrl, title, types, sizes, price, category, rating, handleClick }: IPizzaItem): JSX.Element => {
	const typeNames: string[] = ['тонкое', 'традиционное'];

	return (
		<div className='pizza-block'>
			<img className='pizza-block__image' src={imageUrl} alt={title} />
			<h4 className='pizza-block__title'>{title}</h4>
			<div className='pizza-block__selector'>
				<ul>
					<Selector arr={typeNames} />
				</ul>
				<ul>
					<Selector arr={sizes} />
				</ul>
			</div>
			<div className='pizza-block__bottom'>
				<div className='pizza-block__price'>от {price} ₽</div>
				<Button handleClick={handleClick} />
			</div>
		</div>
	);
};
