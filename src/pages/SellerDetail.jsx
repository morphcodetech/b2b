import ProductCard from "../components/product/ProductCard";
import SectionTitle from "../components/ui/SectionTitle";
import VendorHero from "../components/seller/VendorHero";

const products = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    price: 12,
    rating: 4,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Natural Green Broccoli",
    price: 8,
    rating: 5,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Premium Bananas",
    price: 6,
    rating: 4,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Fresh Carrots Pack",
    price: 10,
    rating: 5,
    image: "https://via.placeholder.com/300",
  },
];

const SellerDetail = () => {
  return (
    <>
      <VendorHero />
    </>
  );
};

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-100">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

export default SellerDetail;