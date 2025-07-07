export type TProduct = {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	brand: string;
	rating: {
		rate: number;
		count: number;
	};
	stock: number;
	inCart: boolean;
	quantity: number;
};

export type TProductCard = Omit<
	TProduct,
	| "description"
	| "category"
	| "rating"
	| "stock"
	| "brand"
	| "inCart"
	| "quantity"
>;

export type TCartItem = {
	id: number;
	title: string;
	price: number;
	quantity: number;
};

export type TCheckoutForm = {
	name: string;
	email: string;
	address: string;
};

export type TInitialState = {
	cart: TCartItem[];
	products: TProduct[];
};

export type TAction =
	| { type: "SET_PRODUCTS"; payload: TProduct[] }
	| { type: "ADD_TO_CART"; payload: TProduct }
	| { type: "INCREASE_QUANTITY"; payload: TCartItem }
	| { type: "DECREASE_QUANTITY"; payload: TCartItem }
	| { type: "GO_TO_CHECKOUT"; };
