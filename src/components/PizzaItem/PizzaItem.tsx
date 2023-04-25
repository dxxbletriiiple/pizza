import { useDispatch } from 'react-redux';
import { onAddToBasket } from '../../reducers';
import { IPizzaItem } from './PizzaItem.interface';
import Button from '../Button';
import Selector from '../Selector';
import styles from './PizzaItem.module.scss';

export const PizzaItem = ({ id, imageUrl, title, types, sizes, price, category, rating, handleClick }: IPizzaItem): JSX.Element => {
	const ds = useDispatch();

	const handleAddToCart = () => {
		//prettier-ignore
		const pizza = {
			id,
			imageUrl,
			title,
			price,
			size: sizes.filter((el) => el.selected)[0].size,
			type: types.filter((el) => el.selected)[0].type
		};
		ds(onAddToBasket(pizza));
	};

	return (
		<div className={styles.pizza}>
			<img className={styles.image} src={imageUrl} alt={title} />
			<h4 className={styles.title}>{title}</h4>
			<div className={styles.selector}>
				<ul>
					<Selector type='types' id={id} arr={types} />
				</ul>
				<ul>
					<Selector type='sizes' id={id} arr={sizes} />
				</ul>
			</div>
			<div className={styles.bottom}>
				<div className={styles.price}>от {price} ₽</div>
				<Button handleAddToCart={handleAddToCart} />
			</div>
		</div>
	);
};
