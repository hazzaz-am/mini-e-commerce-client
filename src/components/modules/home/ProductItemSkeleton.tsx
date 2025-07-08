export function ProductItemSkeleton() {
  return (
    <div className="w-[210px] bg-white rounded-2xl shadow-lg flex flex-col border border-gray-100 overflow-hidden animate-pulse">
      <div className="w-full h-44 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center" />
      <div className="p-4 flex-1 flex flex-col gap-2">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-1" />
        <div className="h-3 bg-gray-100 rounded w-1/2 mb-2" />
        <div className="h-5 bg-gray-200 rounded w-1/3 mb-3" />
        <div className="h-9 bg-gray-100 rounded w-full" />
      </div>
    </div>
  );
}