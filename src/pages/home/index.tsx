import ProductItem from "../../components/modules/home/ProductItem";
import { ProductItemSkeleton } from "../../components/modules/home/ProductItemSkeleton";
import useCart from "../../hooks/useCart";
import type { TProduct } from "../../types";

export default function HomePage() {
	const cartContext = useCart();
	const state = cartContext?.state;
	const isLoading = !state?.products || state.products.length === 0;

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-8 text-center">Products</h1>
			<div className="flex flex-wrap justify-center gap-8 min-h-[200px]">
				{isLoading
					? Array.from({ length: 8 }).map((_, i) => (
							<ProductItemSkeleton key={i} />
					  ))
					: state.products.map((product: TProduct) => (
							<ProductItem key={product._id} product={product} />
					  ))}
			</div>
		</div>
	);
}
