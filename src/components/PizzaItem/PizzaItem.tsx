import { IPizzaItem } from './PizzaItem.interface';
import Button from '../Button';
import Selector from '../Selector';
import styles from './PizzaItem.module.scss';

export const PizzaItem = ({ id, imageUrl, title, types, sizes, price, category, rating, handleClick }: IPizzaItem): JSX.Element => {
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
				<Button handleClick={handleClick} />
			</div>
		</div>
	);
};
