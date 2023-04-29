import { ICartPizza, IPizza, IRootState } from './../interfaces/index';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IRootState = {
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
			state.cart.push(action.payload);
		},
		onAddMorePizza: (state, action) => {
			state.cart = state.cart.map((el) => (el.id === action.payload ? { ...el, count: el.count + 1 } : el));
		},
		onRemoveFromBasket: (state, action) => {
			state.cart = state.cart.filter((pizza: ICartPizza) => action.payload !== pizza.id);
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
		onChangePizzaSize: (state, action) => {
			//@ts-ignore
			state.pizzasArr = state.pizzasArr.map((p: IPizza) => {
				if (action.payload.id === p.id) {
					const sizes = p.sizes.map((el) => {
						if (el.size === action.payload.el.size) {
							return { selected: true, size: el.size };
						}
						return {
							...el,
							selected: false,
						};
					});
					return {
						...p,
						sizes,
					};
				}
				return p;
			});
		},
		onChangePizzaType: (state, action) => {
			//@ts-ignore
			state.pizzasArr = state.pizzasArr.map((p: IPizza) => {
				if (action.payload.id === p.id) {
					const types = p.types.map((el) => {
						if (el.type === action.payload.el.type) {
							return { selected: true, type: el.type };
						}
						return {
							...el,
							selected: false,
						};
					});
					return {
						...p,
						types,
					};
				}
				return p;
			});
		},
	},
});

export const {
	onLoad,
	onAddToBasket,
	onAddMorePizza,
	onRemoveFromBasket,
	onClearCart,
	onCahngeCategory,
	onChangeOrder,
	onChangeSort,
	onChangePizzaSize,
	onChangePizzaType,
} = counterSlice.actions;
export default counterSlice.reducer;
