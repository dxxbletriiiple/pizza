import { Routes, Route } from 'react-router-dom';
import { Home, NotFound } from '../../pages';
import Cart from '../Cart';
import Header from '../Header';
import './App.scss';

export const App = () => {
	return (
		<div className='wrapper'>
			<Header pizzaCount={0} />
			<div className='content'>
				<div className='container'>
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
