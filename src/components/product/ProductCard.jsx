import { FaEye, FaHeart, FaSync } from "react-icons/fa";

export default function ProductCard({ product }) {

  return (

    <div className="bg-white shadow rounded-xl p-4 relative group">

      {/* Product Image */}
      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain"
        />

        {/* Hover actions */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20 opacity-0 group-hover:opacity-100 transition">

          <div className="flex bg-white shadow rounded-lg overflow-hidden">

            <button className="p-3 border-r hover:bg-gray-100">
              <FaEye />
            </button>

            <button className="p-3 border-r hover:bg-gray-100">
              <FaSync />
            </button>

            <button className="p-3 hover:bg-gray-100">
              <FaHeart />
            </button>

          </div>

        </div>

      </div>

      {/* Category */}
      <p className="text-sm text-gray-400 mt-4">
        {product.category}
      </p>

      {/* Product Name */}
      <h3 className="font-semibold text-gray-700">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="text-yellow-500 text-sm mt-1">
        ★★★★☆ <span className="text-gray-400">({product.rating})</span>
      </div>

      {/* Size */}
      <p className="text-sm text-gray-500 mt-1">
        {product.size}
      </p>

      {/* Price */}
      <div className="flex items-center gap-2 mt-2">

        <span className="text-green-600 font-semibold">
          ${product.price}
        </span>

        <span className="line-through text-gray-400">
          ${product.oldPrice}
        </span>

      </div>

      {/* Add Button */}
      <button className="mt-3 w-full bg-gray-100 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200">

        Add

        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
          +
        </span>

      </button>

    </div>
  );
}