import PropertyCard from "./PropertyCard";
import { rentalProperties } from "../utils/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PropertiesForRent = () => {
  return (
    <section className="bg-[#f7f8f9] py-20 px-4 md:px-12 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Properties for Rent</h2>
          <p className="text-gray-500 mt-4 text-sm max-w-2xl mx-auto">
            These are the latest properties in the Rent category. You can create the list using the "latest listing shortcode" and show items by specific categories.
          </p>
        </div>

        <div className="relative group px-4">
          {/* Navigation Arrows */}
          <button className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white shadow-md rounded-sm flex items-center justify-center text-[#0073e1] hover:bg-[#0073e1] hover:text-white transition-all border border-gray-100">
            <FaChevronLeft size={14} />
          </button>
          
          <button className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white shadow-md rounded-sm flex items-center justify-center text-[#0073e1] hover:bg-[#0073e1] hover:text-white transition-all border border-gray-100">
            <FaChevronRight size={14} />
          </button>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties && rentalProperties.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <span className="w-2.5 h-2.5 bg-[#0073e1] rounded-full cursor-pointer"></span>
          <span className="w-2.5 h-2.5 bg-blue-200 rounded-full cursor-pointer hover:bg-blue-300"></span>
          <span className="w-2.5 h-2.5 bg-blue-200 rounded-full cursor-pointer hover:bg-blue-300"></span>
          <span className="w-2.5 h-2.5 bg-blue-200 rounded-full cursor-pointer hover:bg-blue-300"></span>
          <span className="w-2.5 h-2.5 bg-blue-200 rounded-full cursor-pointer hover:bg-blue-300"></span>
        </div>
      </div>
    </section>
  );
};

export default PropertiesForRent;