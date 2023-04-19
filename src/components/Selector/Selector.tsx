import cn from 'classnames';
import { ISelector } from './Selector.interface';
import styles from './Selector.module.scss';

export const Selector = ({ arr }: ISelector): JSX.Element => {
	const handleClick = (i: number) => {
		//
	};

	return (
		<ul>
			{arr?.map((el: any, i: number) => (
				<li
					className={cn({
						[styles.active]: el.selected,
					})}
					onClick={() => handleClick(i)}
					key={i}
				>
					{el.type}
					{el.size}
				</li>
			))}
		</ul>
	);
};
