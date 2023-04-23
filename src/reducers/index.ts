import { IPizza } from './../interfaces/index';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	pizzasArr: [],
	cart: [],
	activeCategory: 0,
	order: 'asc',
	sortBy: 'rating',
};

export const counterSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		onLoad: (state, action) => {
			state.pizzasArr = action.payload;
		},

		onAddToBasket: (state, action) => {
			state.cart.push();
		},

		onRemoveFromBasket: (state, action) => {
			state.cart = state.cart.filter((pizza: IPizza) => action.payload !== pizza.id);
		},

		onClearCart: (state) => {
			state.cart = [];
		},

		onCahngeCategory: (state, action) => {
			state.activeCategory = action.payload;
		},

		onChangeOrder: (state, action) => {
			state.order = action.payload;
		},
		onChangeSort: (state, action) => {
			state.sortBy = action.payload;
		},
		/*onChangePizzaType: (state, action) => {
			state.pizzasArr = state.pizzasArr.map((p:IPizza) => {
				if (p.id == action.payload) {
					return {
						p.
					}
				}
			});
		},*/
	},
});

export const { onLoad, onAddToBasket, onRemoveFromBasket, onClearCart, onCahngeCategory, onChangeOrder, onChangeSort } = counterSlice.actions;
export default counterSlice.reducer;
