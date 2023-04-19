import { Link } from 'react-router-dom';
import { IHeader } from './Header.interface';
import styles from './Header.module.scss';
import logo from '../../assets/pizza-logo.svg';
import ButtonHeader from '../Button/ButtonHeader';

export const Header = ({ pizzaCount }: IHeader): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to='/'>
					<div className={styles.logo}>
						<img width='38' src={logo} alt='Pizza logo' />
						<div>
							<h1>React Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				<Link to='/cart'>
					<div className={styles.cart}>
						<ButtonHeader />
					</div>
				</Link>
			</div>
		</header>
	);
};
