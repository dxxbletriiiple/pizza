import { useState } from 'react';
import { ISelector } from './Selector.interface';

export const Selector = ({ arr }: ISelector): JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleClick = (i: number) => {
		setSelectedIndex(i);
	};

	return (
		<ul>
			{arr?.map((el: number | string, i: number) => (
				<li className={selectedIndex === i ? 'active' : ''} onClick={() => handleClick(i)} key={i}>
					{el}
				</li>
			))}
		</ul>
	);
};
