import { useParams } from "react-router";
import Button from "../../components/ui/Button";
import type { TProduct } from "../../types";

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
	},
];

export default function ProductDetails() {
	const { id } = useParams();
	const product = products.find((p) => p.id === Number(id));

	if (!product) {
		return (
			<div className="text-center py-16 text-gray-500">Product not found.</div>
		);
	}

	return (
		<div className="max-w-3xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
			<div className="w-full max-w-xs md:max-w-sm bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
				<img
					src={product.image}
					alt={product.title}
					className="object-cover w-full h-64 md:h-80"
				/>
			</div>
			<div className="flex-1 w-full">
				<h1 className="text-2xl font-bold mb-2">{product.title}</h1>
				<div className="text-blue-600 font-bold text-xl mb-4">
					${product.price}
				</div>
				<div className="mb-4 text-gray-700">{product.description}</div>
				<div className="mb-2 text-sm text-gray-500">
					Category:{" "}
					<span className="font-medium text-gray-700">{product.category}</span>
				</div>
				<div className="mb-2 text-sm text-gray-500">
					Brand:{" "}
					<span className="font-medium text-gray-700">{product.brand}</span>
				</div>
				<div className="mb-2 text-sm text-gray-500 flex items-center gap-2">
					Rating:
					<span className="font-medium text-yellow-500">
						★ {product.rating.rate}
					</span>
					<span className="text-xs text-gray-400">
						({product.rating.count} reviews)
					</span>
				</div>
				<div className="mb-6 text-sm text-gray-500">
					In Stock:{" "}
					<span className="font-medium text-gray-700">{product.stock}</span>
				</div>
				<Button onHandleClick={() => alert("Added to cart!")}>
					Add to Cart
				</Button>
			</div>
		</div>
	);
}
