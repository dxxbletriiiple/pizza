import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onCahngeCategory } from '../../reducers';
import { CategoriesSkeleton } from '../Skeleton';
import { GetPizza } from '../../services/GetPizza.service';
import st from './Categories.module.scss';

const gp = new GetPizza();

export const Categories = (): JSX.Element => {
	const [categoryIndex, setCategoryIndex] = useState(0);
	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		gp.getCategories().then(setCategories);
	}, []);

	const handelChangeCategory = (n: number) => {
		setCategoryIndex(n);
		dispatch(onCahngeCategory(n));
	};
	return (
		<div className={st.categories}>
			{!categories[0] ? (
				<CategoriesSkeleton />
			) : (
				<ul>
					{categories.map((el, i) => (
						<li className={i === categoryIndex ? st.active : ''} onClick={() => handelChangeCategory(i)} key={crypto.randomUUID()}>
							{el}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
