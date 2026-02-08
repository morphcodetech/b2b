import { FaSearch, FaCommentDots } from "react-icons/fa"; // Added chat icon
import heroImage from "../assets/p1.jpg"; // Your local image import

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex flex-col justify-center items-center text-white px-4 overflow-hidden">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} // UPDATED: Using your local p1.jpg now
          className="w-full h-full object-cover brightness-[0.6]"
          alt="Luxury House"
        />
      </div>

      {/* CENTER TEXT */}
      <div className="relative z-10 text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Find Your Dream Home</h1>
        <p className="text-lg md:text-xl text-gray-200 font-light px-4">
          We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.
        </p>
      </div>

      {/* SEARCH BOX AREA */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* The little tabs on top */}
        <div className="flex">
          <button className="bg-white text-gray-800 px-8 py-3 font-bold rounded-t-md text-sm transition-colors">Sales</button>
          <button className="bg-blue-600/90 hover:bg-blue-600 text-white px-8 py-3 font-bold rounded-t-md text-sm transition-colors">Rentals</button>
          <button className="bg-blue-600/90 hover:bg-blue-600 text-white px-8 py-3 font-bold rounded-t-md text-sm transition-colors">Invest</button>
        </div>

        {/* The main white box */}
        <div className="bg-white p-6 rounded-b-md rounded-tr-md shadow-2xl grid grid-cols-1 md:grid-cols-5 gap-4 items-end text-gray-700">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase text-gray-500 tracking-wider">Categories</label>
            <select className="w-full p-3 border border-gray-100 bg-gray-50/50 rounded outline-none text-sm appearance-none cursor-pointer">
              <option>Property Category</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase text-gray-500 tracking-wider">City</label>
            <select className="w-full p-3 border border-gray-100 bg-gray-50/50 rounded outline-none text-sm appearance-none cursor-pointer">
              <option>Property City</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase text-gray-500 tracking-wider">Beds & Baths</label>
            <select className="w-full p-3 border border-gray-100 bg-gray-50/50 rounded outline-none text-sm appearance-none cursor-pointer">
              <option>Beds | Baths</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase text-gray-500 tracking-wider">Price</label>
            <select className="w-full p-3 border border-gray-100 bg-gray-50/50 rounded outline-none text-sm appearance-none cursor-pointer">
              <option>Sale Price</option>
            </select>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white h-[50px] rounded shadow-lg shadow-blue-200 font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95">
            <FaSearch /> Search
          </button>
        </div>
      </div>

      {/* FLOATING CHAT ICON (From your screenshot) */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="bg-blue-600 p-4 rounded-full shadow-2xl cursor-pointer hover:bg-blue-700 transition-all group">
          <FaCommentDots className="text-white text-2xl group-hover:rotate-12 transition-transform" />
        </div>
      </div>

      {/* FAKE ACTIVATE WINDOWS (Easter egg from your screenshot) */}
      <div className="fixed bottom-10 right-4 z-50 text-gray-400/30 text-right pointer-events-none select-none hidden md:block">
        <p className="text-xl">Activate Windows</p>
        <p className="text-sm">Go to Settings to activate Windows.</p>
      </div>

    </section>
  );
};

export default Hero;