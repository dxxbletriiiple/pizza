import { Routes, Route } from 'react-router-dom';
import { Home, NotFound } from '../../pages';
import Cart from '../Cart';
import Header from '../Header';
import st from './App.module.scss';

export const App = () => {
	return (
		<div className={st.wrapper}>
			<Header pizzaCount={0} />
			<div className={st.content}>
				<div className={st.container}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};
