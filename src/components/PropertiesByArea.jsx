const PropertiesByArea = () => {
  const areas = [
    { name: "Jersey City", listings: "25 listings", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=100" },
    { name: "The Heights", listings: "3 listings", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=100" },
    { name: "New Jersey State", listings: "25 listings", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=100" },
    { name: "New York State", listings: "16 listings", img: "https://images.unsplash.com/photo-1496871328941-181999635ff0?w=100" },
    { name: "New York", listings: "17 listings", img: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=100" },
    { name: "Bayonne", listings: "5 listings", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=100" },
    { name: "Greenville", listings: "17 listings", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=100" },
    { name: "Manhattan", listings: "8 listings", img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=100" },
    { name: "Upper East Side", listings: "3 listings", img: "https://images.unsplash.com/photo-1490644659543-d24b5bb90c45?w=100" },
    { name: "Queens", listings: "4 listings", img: "https://images.unsplash.com/photo-1526230427044-70c5d7963977?w=100" },
    { name: "West Side", listings: "1 listing", img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=100" },
    { name: "West Village", listings: "1 listing", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100" },
  ];

  return (
    <section className="relative bg-gray-50 py-16 px-4">
      
      {/* Floating Card (now scoped to this section only) */}
      <div className="hidden xl:block absolute right-6 top-24 w-52 bg-white shadow-2xl rounded-md z-20 border border-gray-100">
        <div className="p-5 space-y-3 text-[13px] text-gray-600">
          <p className="font-bold text-gray-800">32,000+ Buyers</p>
          <p>5-Star Rated Theme</p>
          <p>Lifetime Free Updates</p>
          <p>No Extra Costs</p>
        </div>
        <button className="w-full bg-[#0073e1] text-white py-3 font-bold hover:bg-blue-700 transition-colors rounded-b-md">
          Buy Now!
        </button>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Properties by Area</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
          Highlight the best of your properties by using the List Category shortcode.
        </p>

        <div className="mt-12 bg-white p-10 shadow-sm rounded-sm border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 shrink-0 overflow-hidden rounded-md">
                  <img src={area.img} alt={area.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {area.name}
                  </h4>
                  <p className="text-xs text-gray-400">{area.listings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesByArea;
