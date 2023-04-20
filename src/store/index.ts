import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from '../reducers';

export const store = configureStore({
	reducer: {
		pizzas: pizzasReducer,
	},
});
