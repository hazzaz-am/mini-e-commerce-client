import ProductItem from "../../components/modules/home/ProductItem";
import type { TProductCard } from "../../types";



const products: TProductCard[] = [
	{
		id: 1,
		title: "Wireless Headphones",
		price: 59.99,
		image:
			"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 2,
		title: "Smart Watch",
		price: 99.99,
		image:
			"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 3,
		title: "Bluetooth Speaker",
		price: 39.99,
		image:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 4,
		title: "DSLR Camera",
		price: 299.99,
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 5,
		title: "Gaming Mouse",
		price: 25.99,
		image:
			"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 6,
		title: "Mechanical Keyboard",
		price: 79.99,
		image:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
	},
];

export default function HomePage() {
	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-8 text-center">Products</h1>
			<div className="flex flex-wrap justify-center gap-8">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
