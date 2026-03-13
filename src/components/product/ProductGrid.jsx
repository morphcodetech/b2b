import ProductCard from "./ProductCard";
import products from "../../data/products";

export default function ProductGrid() {
  return (
    <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
}