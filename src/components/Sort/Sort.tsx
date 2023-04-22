import { useState } from 'react';
import cn from 'classnames';
import { onChangeOrder } from '../../reducers';
import st from './Sort.module.scss';
import { useDispatch } from 'react-redux';

export const Sort = (): JSX.Element => {
	const [isVisible, setIsVisible] = useState(false);
	const [selected, setSelected] = useState(0);
	const [orderBy, setOrderBy] = useState(false);
	const disp = useDispatch();

	const list = ['популярности', 'цене', 'алфавиту'];

	const handleClickOnSort = (i: number) => {
		setSelected(i);
		setIsVisible(false);
	};
	const handleOrderChange = () => {
		if (orderBy) {
			disp(onChangeOrder('asc'));
		}
		if (!orderBy) {
			disp(onChangeOrder('desc'));
		}
		setOrderBy(!orderBy);
	};

	return (
		<div className={st.sort}>
			<div className={st.label}>
				<b
					className={cn({
						[st.asc]: orderBy,
						[st.desc]: !orderBy,
					})}
					onClick={handleOrderChange}
				>
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
