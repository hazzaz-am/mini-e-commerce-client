import toast from "react-hot-toast";
import { useParams } from "react-router";
import Button from "../../components/ui/Button";
import useCart from "../../hooks/useCart";
import type { TProduct } from "../../types";

export default function ProductDetails() {
	const { id } = useParams();
	const cartContext = useCart();
	const state = cartContext?.state;

	const product = state?.products?.find((p: TProduct) => p.id === Number(id));

	if (!product) {
		return (
			<div className="text-center py-16 text-gray-500">Product not found.</div>
		);
	}

	const handleAddToCart = (data: TProduct) => {
		cartContext?.dispatch({
			type: "ADD_TO_CART",
			payload: data,
		});
		toast.success("Product added to cart");
	};

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
				<Button
					onHandleClick={() => handleAddToCart(product)}
					disabled={product.stock === 0 || product.inCart}
					className="disabled:cursor-not-allowed disabled:bg-gray-400"
					title={
						product.stock === 0
							? "Out of Stock"
							: product.inCart
							? "Already in Cart"
							: "Add to Cart"
					}
				>
					{product.inCart ? "In Cart" : "Add to Cart"}
				</Button>
			</div>
		</div>
	);
}
