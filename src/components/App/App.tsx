import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound } from '../../pages';
import Header from '../Header';
import st from './App.module.scss';
const Cart = lazy(() => import('../Cart'));
//import Cart from '../Cart';

export const App = () => {
	return (
		<div className={st.wrapper}>
			<Header />
			<div className={st.content}>
				<div className={st.container}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/cart'
							element={
								<Suspense fallback={<></>}>
									<Cart />
								</Suspense>
							}
						/>
						<Route
							path='*'
							element={
								<Suspense fallback={<></>}>
									<NotFound />
								</Suspense>
							}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
};
