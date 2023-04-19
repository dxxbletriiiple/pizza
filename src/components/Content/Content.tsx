import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onLoad } from '../../reducers';
import { GetPizza } from '../../services/GetPizza.service';
import { IPizza, IRootState } from '../../interfaces';
import Categories from '../Categories';
import PizzaItem from '../PizzaItem';
import Sort from '../Sort';
import { PizzaSkeleton } from '../Skeleton';
import st from './Content.module.scss';

const gp = new GetPizza();

export const Content = (): JSX.Element => {
	const [pizzaCount, setPizzaCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const pizzasArray = useSelector((state: IRootState) => state.pizzas.pizzasArr);
	const dispatch = useDispatch();
	useEffect(() => {
		gp.getAllPizzas()
			.then((r) => {
				dispatch(onLoad(r));
				setIsLoading(false);
			})
			.catch((e) => {
				console.error(e);
				setIsLoading(true);
			});
		//eslint-disable-next-line
	}, []);

	const handleClick = () => {
		setPizzaCount(pizzaCount + 1);
	};

	return (
		<>
			<div className={st.top}>
				<Categories />
				<Sort />
			</div>
			<h2 className={st.title}>Все пиццы</h2>
			<div className={st.items}>
				{isLoading
					? [...new Array(6)].map((_) => <PizzaSkeleton key={crypto.randomUUID()} />)
					: pizzasArray.map((el: IPizza) => <PizzaItem {...el} handleClick={handleClick} key={el.id} />)}
			</div>
		</>
	);
};
