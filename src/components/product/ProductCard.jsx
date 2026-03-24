import { FaHeart, FaEye } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white border border-gray-100 p-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:outline hover:outline-1 hover:outline-primary">

      {/* HOVER ICONS */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        
        <button className="w-9 h-9 bg-white shadow border flex items-center justify-center text-gray-700 hover:text-primary">
          <FaHeart size={14} />
        </button>

        <button className="w-9 h-9 bg-white shadow border flex items-center justify-center text-gray-700 hover:text-primary">
          <FaEye size={14} />
        </button>

      </div>

      {/* PRODUCT IMAGE  */}
      <div className="h-40 flex items-center justify-center mb-5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain group-hover:scale-105 transition duration-500"
        />
      </div>

      {/*  CATEGORY  */}
      <p className="text-sm text-gray-400">
        {product.category}
      </p>

      {/*  PRODUCT NAME  */}
      <h3 className="text-[15px] font-semibold text-gray-800 leading-tight mt-1 min-h-[40px]">
        {product.name}
      </h3>

      {/*  RATING  */}
      <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < Math.round(product.rating) ? "★" : "☆"}
          </span>
        ))}
        <span className="text-gray-400 text-xs ml-1">
          ({product.rating})
        </span>
      </div>

      {/*  SIZE  */}
      <p className="text-sm text-gray-500 mt-1">
        {product.size}
      </p>

      {/*  PRICE  */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-green-600 font-semibold">
          ${product.price}
        </span>

        <span className="line-through text-gray-400 text-sm">
          ${product.oldPrice}
        </span>
      </div>

      {/*  ADD TO CART (HOVER STYLE)  */}
      <div className="mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

        <button className="w-full bg-primary text-white py-2 rounded-md text-sm font-semibold hover:bg-black transition">
          Add To Cart
        </button>

      </div>

      {/* spacing fix */}
      <div className="h-2 group-hover:h-4 transition-all duration-300"></div>

    </div>
  );
}