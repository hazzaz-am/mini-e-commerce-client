export type TProduct = {
	_id: string;
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
	inCart?: boolean;
};

export type TProductCard = Omit<
	TProduct,
	| "description"
	| "category"
	| "rating"
	| "stock"
	| "brand"
	| "inCart"
>;

export type TCartItem = {
	_id: string;
	title: string;
	price: number;
	quantity: number;
	stock: number; 
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
	| { type: "GO_TO_CHECKOUT"; payload: TCartItem[] };
