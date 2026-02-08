import PropertyCard from "./PropertyCard";
import { properties } from "../utils/data";

const LatestProperties = () => {
  const filters = ["For Sale", "Villas", "Apartments", "Houses", "Condos", "Retail"];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Latest Properties</h2>
        <p className="text-gray-500 mt-4 text-sm max-w-2xl mx-auto">These are the latest properties in the Sales category.</p>

        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-16">
          {filters.map((f, i) => (
            <button key={i} className="px-6 py-2 bg-gray-50 hover:bg-white hover:shadow text-gray-600 text-xs font-bold border border-gray-100 uppercase transition-all">
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {properties.map(item => <PropertyCard key={item.id} property={item} />)}
        </div>

        <button className="mt-16 bg-[#0073e1] text-white px-10 py-4 rounded-md font-bold text-sm shadow-lg">
          Load More Listings
        </button>
      </div>
    </section>
  );
};

export default LatestProperties;