import Button from "../ui/Button";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4">
      
      <img
        src="https://via.placeholder.com/200"
        alt="Product"
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="mt-4 font-semibold text-gray-800">
        Fresh Apples
      </h3>

      <p className="text-primary font-bold mt-2">$12.00</p>

      <Button className="mt-4 w-full">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;