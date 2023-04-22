import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../interfaces';
import { onChangeOrder } from '../../reducers';
import st from './Sort.module.scss';

export const Sort = (): JSX.Element => {
	const [isVisible, setIsVisible] = useState(false);
	const [selected, setSelected] = useState(0);
	const disp = useDispatch();
	const order = useSelector((state: IRootState) => state.pizzas.order);

	const list = ['популярности', 'цене', 'алфавиту'];

	const handleClickOnSort = (i: number) => {
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
				<span onClick={() => setIsVisible(!isVisible)}>{list[selected]}</span>
			</div>
			{isVisible && (
				<div className={st.popup}>
					<ul>
						{list.map((el, i) => (
							<li className={i === selected ? st.active : ''} onClick={() => handleClickOnSort(i)} key={crypto.randomUUID()}>
								{el}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
