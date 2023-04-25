import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUseSelector } from '../../interfaces';
import { onChangeOrder, onChangeSort } from '../../reducers';
import st from './Sort.module.scss';

export const Sort = (): JSX.Element => {
	const [isVisible, setIsVisible] = useState(false);
	const [selected, setSelected] = useState(0);
	const disp = useDispatch();
	const order = useSelector((state: IUseSelector) => state.pizzas.order);

	const list = [
		{ name: 'популярности', sortBy: 'rating' },
		{ name: 'цене', sortBy: 'price' },
		{ name: 'алфавиту', sortBy: 'title' },
	];

	const handleClickOnSort = (sortBy: string, i: number) => {
		disp(onChangeSort(sortBy));
		setSelected(i);
		setIsVisible(false);
	};

	const handleOrderChange = () => {
		switch (order) {
			case 'asc':
				return disp(onChangeOrder('desc'));
			case 'desc':
				return disp(onChangeOrder('asc'));
		}
	};

	return (
		<div className={st.sort}>
			<div className={st.label}>
				<b className={st[order]} onClick={handleOrderChange}>
					Сортировка по:
				</b>
				<span onClick={() => setIsVisible(!isVisible)}>{list[selected].name}</span>
			</div>
			{isVisible && (
				<div className={st.popup}>
					<ul>
						{list.map((el, i) => (
							<li className={i === selected ? st.active : ''} onClick={() => handleClickOnSort(el.sortBy, i)} key={crypto.randomUUID()}>
								{el.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
