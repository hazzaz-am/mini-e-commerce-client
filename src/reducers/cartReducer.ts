import type { TAction, TInitialState } from "../types";

export const initialState: TInitialState = {
	cart: [],
	products: [],
};

export const cartReducer = (
	state: TInitialState,
	action: TAction
): TInitialState => {
	switch (action.type) {
		case "SET_PRODUCTS": {
			const resetProducts = action.payload.map((product) => ({
				...product,
				inCart: false,
			}));

			return {
				...state,
				products: resetProducts,
			};
		}

		case "ADD_TO_CART": {
			const productToAdd = action.payload;
			const updatedProducts = state.products.map((product) => {
				if (product._id === productToAdd._id) {
					return {
						...product,
						inCart: true,
						stock: product.stock - 1,
					};
				} else {
					return product;
				}
			});

			const cartItem = {
				_id: productToAdd._id,
				title: productToAdd.title,
				price: productToAdd.price,
				quantity: 1,
				stock: productToAdd.stock - 1,
			};

			return {
				...state,
				products: updatedProducts,
				cart: [...state.cart, cartItem],
			};
		}

		case "INCREASE_QUANTITY": {
			const cartItemToUpdate = action.payload;
			const updatedCart = state.cart.map((cI) => {
				if (cI._id === cartItemToUpdate._id) {
					return {
						...cI,
						quantity: cI.quantity + 1,
						stock: cI.stock - 1,
					};
				} else {
					return cI;
				}
			});

			const updatedProducts = state.products.map((productItem) => {
				if (productItem._id === cartItemToUpdate._id) {
					return {
						...productItem,
						stock: productItem.stock - 1,
					};
				} else {
					return productItem;
				}
			});

			return {
				...state,
				cart: updatedCart,
				products: updatedProducts,
			};
		}

		case "DECREASE_QUANTITY": {
			const cartItemToUpdate = action.payload;
			const updatedCart = state.cart.map((cI) => {
				if (cI._id === cartItemToUpdate._id) {
					return {
						...cI,
						quantity: cI.quantity - 1,
						stock: cI.stock + 1,
					};
				} else {
					return cI;
				}
			});

			const updatedProducts = state.products.map((productItem) => {
				if (productItem._id === cartItemToUpdate._id) {
					return {
						...productItem,
						stock: productItem.stock + 1,
					};
				} else {
					return productItem;
				}
			});

			return {
				...state,
				cart: updatedCart,
				products: updatedProducts,
			};
		}

		case "GO_TO_CHECKOUT": {
			const cartItems = action.payload;
			if (cartItems.length === 0) {
				return state;
			}

			const updatedProducts = state.products.map((product) => {
				return {
					...product,
					inCart: false,
				};
			});

			return {
				...state,
				cart: [],
				products: updatedProducts,
			};
		}

		default: {
			return state;
		}
	}
};
