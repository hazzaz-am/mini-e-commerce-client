import type { TAction, TInitialState, TProduct } from "../types";

const products: TProduct[] = [
	{
		id: 1,
		title: "Wireless Headphones",
		price: 59.99,
		image:
			"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
		description:
			"High-quality wireless headphones with noise cancellation and long battery life.",
		brand: "SoundMax",
		category: "Electronics",
		rating: { rate: 4.5, count: 120 },
		stock: 12,
		inCart: false,
	},
	{
		id: 2,
		title: "Smart Watch",
		price: 99.99,
		image:
			"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
		description:
			"Feature-rich smart watch with fitness tracking and notifications.",
		brand: "TimeTech",
		category: "Wearables",
		rating: { rate: 4.2, count: 80 },
		stock: 8,
		inCart: false,
	},
	{
		id: 3,
		title: "Bluetooth Speaker",
		price: 39.99,
		image:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
		description:
			"Portable Bluetooth speaker with deep bass and 10-hour playtime.",
		brand: "BeatBox",
		category: "Audio",
		rating: { rate: 4.7, count: 200 },
		stock: 20,
		inCart: false,
	},
	{
		id: 4,
		title: "DSLR Camera",
		price: 299.99,
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		description:
			"Professional DSLR camera with 24MP sensor and 4K video recording.",
		brand: "PhotoPro",
		category: "Photography",
		rating: { rate: 4.8, count: 60 },
		stock: 5,
		inCart: false,
	},
	{
		id: 5,
		title: "Gaming Mouse",
		price: 25.99,
		image:
			"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
		description:
			"Ergonomic gaming mouse with customizable DPI and RGB lighting.",
		brand: "GameX",
		category: "Accessories",
		rating: { rate: 4.3, count: 150 },
		stock: 30,
		inCart: false,
	},
	{
		id: 6,
		title: "Mechanical Keyboard",
		price: 79.99,
		image:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
		description:
			"Durable mechanical keyboard with blue switches and backlight.",
		brand: "KeyMaster",
		category: "Accessories",
		rating: { rate: 4.6, count: 110 },
		stock: 15,
		inCart: false,
	},
];
export const initialState: TInitialState = {
	cart: [],
	products: products,
};

export const cartReducer = (
	state: TInitialState,
	action: TAction
): TInitialState => {
	switch (action.type) {
		case "SET_PRODUCTS": {
			return {
				...state,
				products: action.payload,
			};
		}

		case "ADD_TO_CART": {
			const productToAdd = action.payload;
			const updatedProducts = state.products.map((product) => {
				if (product.id === productToAdd.id) {
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
				id: productToAdd.id,
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
				if (cI.id === cartItemToUpdate.id) {
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
				if (productItem.id === cartItemToUpdate.id) {
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
				if (cI.id === cartItemToUpdate.id) {
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
				if (productItem.id === cartItemToUpdate.id) {
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
