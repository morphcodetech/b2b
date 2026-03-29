import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHeart, FaShareAlt, FaPlus } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  // Prevent crash if property is missing
  if (!property) return null;

  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
      <div className="relative h-64 overflow-hidden">
        <img src={property.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={property.title} />
        <div className="absolute top-3 left-3 flex gap-2">
          {property.tags && property.tags.map((t, i) => (
            <span key={i} className={`px-2 py-1 text-[10px] font-bold text-white uppercase rounded-sm ${t === 'Featured' ? 'bg-green-500' : 'bg-blue-600'}`}>{t}</span>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 text-white text-xs flex items-center gap-1 drop-shadow-md">
          <FaMapMarkerAlt size={12} /> {property.location}
        </div>
      </div>

      <div className="p-6 text-left">
        <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer truncate">{property.title}</h3>
        <p className="text-blue-600 font-bold text-lg mb-4">{property.price}</p>
        
        <div className="flex justify-between items-center text-gray-500 text-sm border-b border-gray-100 pb-4 mb-4">
          <span className="flex items-center gap-1"><FaBed /> {property.beds}</span>
          <span className="flex items-center gap-1"><FaBath /> {property.baths}</span>
          <span className="flex items-center gap-1"><FaRulerCombined /> {property.size}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={property.agent?.img} className="w-8 h-8 rounded-full bg-gray-200" alt="agent" />
            <span className="text-xs font-bold text-gray-600">{property.agent?.name}</span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <FaShareAlt className="hover:text-blue-500 cursor-pointer" />
            <FaHeart className="hover:text-red-500 cursor-pointer" />
            <FaPlus className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;