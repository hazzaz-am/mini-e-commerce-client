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
};

export type TProductCard = Omit<
	TProduct,
	"description" | "category" | "rating" | "stock" | "brand"
>;

export type TCartItem = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

export type TCheckoutForm = {
	name: string;
	email: string;
	address: string;
};
