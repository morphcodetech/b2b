const ProductList = ({ products }) => {
  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex gap-6 bg-gray-50 rounded-xl p-6"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-contain"
          />

          <div className="flex-1">
            <h3 className="font-semibold text-xl mb-2">
              {product.name}
            </h3>

            <p className="text-gray-500 mb-3">
              Sample product description exactly like FastKart layout.
            </p>

            <p className="text-primary font-bold text-xl">
              ${product.price}
            </p>

            <button className="mt-4 bg-gray-200 rounded-full px-10 py-3 hover:bg-primary hover:text-white transition">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;