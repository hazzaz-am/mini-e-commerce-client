import { useMemo } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import Breadcrumbs from "../../components/modules/product-details/Breadcrumbs";
import { ProductDetailsSkeleton } from "../../components/modules/product-details/ProductDetailsSkeleton";
import Button from "../../components/ui/Button";
import useCart from "../../hooks/useCart";
import type { TProduct } from "../../types";

export default function ProductDetails() {
	const { id } = useParams();
	const cartContext = useCart();
	const state = cartContext?.state;

	const product = useMemo(
		() => state?.products.find((p) => p._id === id) || null,
		[state, id]
	);

	if (!product) {
		return <ProductDetailsSkeleton />;
	}

	const handleAddToCart = (data: TProduct) => {
		cartContext?.dispatch({
			type: "ADD_TO_CART",
			payload: data,
		});
		toast.success("Product added to cart");
	};

	return (
		<div className="px-4 my-10">
			<Breadcrumbs title={product.title} />
			<div className="max-w-3xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-12 items-center md:items-start bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl border border-blue-100">
				<div className="w-full max-w-xs md:max-w-sm bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-md p-4 relative">
					<img
						src={product.image}
						alt={product.title}
						className="object-contain w-full h-64 md:h-80 drop-shadow-lg rounded-xl"
					/>
					{product.stock === 0 && (
						<span className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg z-10">
							Out of Stock
						</span>
					)}
				</div>
				<div className="flex-1 w-full flex flex-col gap-2">
					<h1 className="text-3xl font-bold mb-2 text-gray-900 leading-tight">
						{product.title}
					</h1>
					<div className="flex items-center gap-3 mb-2">
						<span className="text-yellow-400 text-lg">★</span>
						<span className="text-gray-700 font-semibold text-base">
							{product.rating.rate}
						</span>
						<span className="text-xs text-gray-400">
							({product.rating.count} reviews)
						</span>
					</div>
					<div className="text-blue-600 font-bold text-2xl mb-4">
						${product.price}
					</div>
					<div className="mb-4 text-gray-700 text-base leading-relaxed">
						{product.description}
					</div>
					<div className="flex flex-wrap gap-4 mb-4">
						<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
							Category: {product.category}
						</span>
						<span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
							Brand: {product.brand}
						</span>
						<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
							In Stock: {product.stock}
						</span>
					</div>
					<Button
						onHandleClick={() => handleAddToCart(product)}
						disabled={product.stock === 0 || product.inCart}
						className="disabled:cursor-not-allowed disabled:bg-gray-400 shadow-md hover:shadow-lg text-base mt-2"
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
		</div>
	);
}
