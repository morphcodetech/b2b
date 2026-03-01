import { FaSearch } from "react-icons/fa";
import heroImage from "../../assets/vendor-hero.jpg";

const VendorHero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for slight fade effect */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight">
          Vendor Details
        </h1>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl flex shadow-md rounded-md overflow-hidden bg-white">

            {/* Input Section */}
            <div className="flex items-center flex-1 px-5">
              <FaSearch className="text-gray-400 mr-3" size={18} />
              <input
                type="text"
                placeholder="Example text with button add on"
                className="w-full py-4 outline-none text-gray-600 placeholder-gray-400"
              />
            </div>

            {/* Button */}
            <button className="bg-primary px-10 text-white font-medium hover:bg-[#e65f3d] transition-colors duration-300">
              Search
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorHero;