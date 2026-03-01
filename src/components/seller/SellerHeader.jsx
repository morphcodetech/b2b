import Button from "../ui/Button";
import { FaStar } from "react-icons/fa";

const SellerHeader = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        <img
          src="https://via.placeholder.com/150"
          alt="Seller"
          className="w-32 h-32 rounded-full object-cover"
        />

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            John’s Organic Store
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-primary">
            <FaStar />
            <span className="text-gray-600 text-sm">4.8 Rating</span>
          </div>

          <p className="mt-4 text-gray-600 max-w-xl">
            Selling fresh organic vegetables and fruits with guaranteed quality.
          </p>

          <div className="mt-6">
            <Button>Contact Seller</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;