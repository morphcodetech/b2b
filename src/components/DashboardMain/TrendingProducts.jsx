import React from "react";

const products = [
  {
    image: "https://placehold.co/60x60/fde8d8/ff6b35?text=🍪",
    name: "Fantasy Crunchy C",
    price: "$25.69",
    sales: 152,
  },
  {
    image: "https://placehold.co/60x60/e8f0e8/4a7c4a?text=🥜",
    name: "Peanut Butter Bite",
    price: "$35.36",
    sales: 34,
  },
  {
    image: "https://placehold.co/60x60/fff3e0/ff8f00?text=🌶",
    name: "Yumitos Chilli Sprir",
    price: "$78.55",
    sales: 78,
  },
  {
    image: "https://placehold.co/60x60/fff8e1/ffa000?text=🍟",
    name: "Healthy Long Life T",
    price: "$32.98",
    sales: 135,
  },
];

const TrendingProducts = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Trending Products
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
                Images
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
                Product Name
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
                Price
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 pb-3">
                Sales
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="py-4 pr-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                </td>
                <td className="py-4 pr-4 text-sm text-gray-500">{p.name}</td>
                <td className="py-4 pr-4 text-sm text-gray-500">{p.price}</td>
                <td className="py-4 text-sm text-gray-500">{p.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingProducts;
