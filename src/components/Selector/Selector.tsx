import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { ISelector } from './Selector.interface';
import styles from './Selector.module.scss';
import { onChangePizzaSize, onChangePizzaType } from '../../reducers';

export const Selector = ({ type, id, arr }: ISelector): JSX.Element => {
	const dp = useDispatch();
	const handleClick = (el: any) => {
		switch (type) {
			case 'sizes':
				return dp(onChangePizzaSize({ id, el }));
			case 'types':
				return dp(onChangePizzaType({ id, el }));
		}
	};

	return (
		<ul>
			{arr?.map((el: any, i: number) => (
				<li
					className={cn({
						[styles.active]: el.selected,
					})}
					onClick={() => handleClick(el)}
					key={i}
				>
					{el.type}
					{el.size}
				</li>
			))}
		</ul>
	);
};
