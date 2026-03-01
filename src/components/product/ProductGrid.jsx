const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain mb-4"
          />

          <p className="text-sm text-gray-500">{product.category}</p>

          <h3 className="font-semibold text-lg mb-2">
            {product.name}
          </h3>

          <p className="text-primary font-bold text-lg">
            ${product.price}
          </p>

          <button className="mt-4 w-full bg-gray-200 rounded-full py-3 hover:bg-primary hover:text-white transition">
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;