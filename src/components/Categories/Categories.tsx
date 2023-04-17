import { useEffect, useState } from 'react';
import { CategoriesSkeleton } from '../Skeleton';
import { GetPizza } from '../../services/GetPizza.service';
import './Categories.scss';

const gp = new GetPizza();

export const Categories = (): JSX.Element => {
	const [categoryIndex, setCategoryIndex] = useState(0);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		gp.getCategories().then(setCategories);
	}, []);

	return (
		<div className='categories'>
			{!categories[0] ? (
				<CategoriesSkeleton />
			) : (
				<ul>
					{categories.map((el, i) => (
						<li className={i === categoryIndex ? 'active' : ''} onClick={() => setCategoryIndex(i)} key={crypto.randomUUID()}>
							{el}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
