import { createSlice } from '@reduxjs/toolkit';
import { IPizza } from '../interfaces';

const initialState = {
	pizzasArr: [],
	cart: [],
};

export const counterSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		onAddToBasket: (state) => {
			state.cart.push();
		},
		onRemoveFromBasket: (state, action) => {
			state.cart = state.cart.filter((pizza: IPizza) => action.payload !== pizza.id);
		},
	},
});

export const { onAddToBasket, onRemoveFromBasket } = counterSlice.actions;
export default counterSlice.reducer;
