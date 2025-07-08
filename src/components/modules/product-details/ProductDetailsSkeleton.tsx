export function ProductDetailsSkeleton() {
	return (
		<div className="max-w-3xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 items-center md:items-start animate-pulse">
			<div className="w-full max-w-xs md:max-w-sm bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden h-64 md:h-80" />
			<div className="flex-1 w-full flex flex-col gap-4">
				<div className="h-8 bg-gray-200 rounded w-2/3 mb-2" />
				<div className="h-6 bg-gray-100 rounded w-1/3 mb-4" />
				<div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
				<div className="h-4 bg-gray-100 rounded w-1/2 mb-2" />
				<div className="h-4 bg-gray-100 rounded w-1/4 mb-2" />
				<div className="h-4 bg-gray-100 rounded w-1/3 mb-2" />
				<div className="h-10 bg-gray-200 rounded w-1/2 mt-6" />
			</div>
		</div>
	);
}