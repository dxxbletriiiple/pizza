import { useState } from 'react';
import './Categories.scss';

export const Categories = (): JSX.Element => {
	const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
	const [categoryIndex, setCategoryIndex] = useState(0);

	return (
		<div className='categories'>
			<ul>
				{categories.map((el, i) => (
					<li className={i === categoryIndex ? 'active' : ''} onClick={() => setCategoryIndex(i)} key={crypto.randomUUID()}>
						{el}
					</li>
				))}
			</ul>
		</div>
	);
};
