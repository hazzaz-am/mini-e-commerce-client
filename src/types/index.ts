export type TProduct = {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	inStock: boolean; 
}

export type TProductCard = Omit<
	TProduct,
	"description" | "category" | "rating" | "inStock"
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